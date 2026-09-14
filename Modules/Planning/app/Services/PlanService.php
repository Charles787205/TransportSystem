<?php

namespace Modules\Planning\Services;

use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Contracts\DispatchServiceInterface;
use Modules\Planning\Classes\Data\Request\CreatePlanData;
use Modules\Planning\Classes\Data\Request\PlanIndexFilterData;
use Modules\Planning\Classes\Data\Response\PaginatedPlanData;
use Modules\Planning\Classes\Data\Response\PlanData;
use Modules\Planning\Classes\Data\Response\PlanDetailPageData;
use Modules\Planning\Repositories\PlanRepository;

class PlanService
{
    public function __construct(
        private PlanRepository $planRepo,
        private ClientRepository $clientRepo,
        private LocationRepository $locationRepo,
        private DispatchServiceInterface $dispatchService,
    ) {}

    public function createPlan(CreatePlanData $data): PlanData
    {
        $plan = $this->planRepo->createPlan($data->planAttributes());

        return PlanData::from($plan->fresh(['client', 'origin', 'destination']));
    }

    public function getPaginatedPlan(): PaginatedPlanData
    {
        $plans = $this->planRepo->getPaginatedPlans(pageSize: 20, with: ['client', 'origin', 'destination']);

        return PaginatedPlanData::from($plans);
    }

    public function getDataForIndex(PlanIndexFilterData $filters): array
    {
        $plans = $this->planRepo->getPaginatedPlans(
            where: $filters->filterAttributes(),
            pageSize: 15,
            with: ['client', 'origin', 'destination'],
            search: $filters->search
        );

        $clients = $this->clientRepo->getClients();
        $locations = $this->locationRepo->getLocations();

        // Calculate dispatched vehicles per plan route and date
        $plansPaginator = $plans->through(function ($plan) {
            $dispatches = $this->dispatchService->getDispatchesForPlan(
                $plan->client_id,
                $plan->dispatch_date,
                $plan->origin_id,
                $plan->destination_id
            );

            $planData = PlanData::from($plan);
            $planData->dispatchedCount = $dispatches->count();
            $planData->dispatches = $dispatches->map(function ($dispatch) {
                $dispatchData = DispatchData::from($dispatch);
                $dispatchData->currentStatus = method_exists($dispatch, 'currentStatus') && $dispatch->currentStatus() ? $dispatch->currentStatus() : null;

                return $dispatchData;
            })->all();

            return $planData;
        });

        return [
            'paginatedPlans' => PaginatedPlanData::from($plansPaginator),
            'clients' => $clients->map(fn ($c) => ['id' => $c->id, 'label' => $c->name]),
            'locations' => $locations->map(fn ($l) => ['id' => $l->id, 'label' => $l->name, 'client_id' => $l->client_id]),
            'filters' => $filters,
        ];
    }

    public function getPlanDetails(int $id): PlanDetailPageData
    {
        $plan = $this->planRepo->getPlan($id, with: ['client', 'origin', 'destination']);

        // Fetch dispatches matching client, date, and route (origin -> destination)
        $dispatches = $this->dispatchService->getDispatchesForPlan(
            $plan->client_id,
            $plan->dispatch_date,
            $plan->origin_id,
            $plan->destination_id
        );

        $tripLegs = $dispatches->pluck('tripLegs')->flatten();

        $planData = PlanData::from($plan);
        $planData->dispatchedCount = $dispatches->count();

        return PlanDetailPageData::from([
            'plan' => $planData,
            'tripLegs' => $tripLegs,
            'dispatches' => $dispatches,
        ]);
    }
}
