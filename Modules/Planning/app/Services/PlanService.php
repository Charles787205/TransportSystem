<?php

namespace Modules\Planning\Services;

use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;
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
        private DispatchRepository $dispatchRepo,
        private TripLegRepository $tripLegRepo,
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
            $dispatchedCount = Dispatch::where('client_id', $plan->client_id)
                ->whereDate('dispatch_date', $plan->dispatch_date)
                ->whereHas('tripLegs', function ($q) use ($plan) {
                    $q->where('origin_location_id', $plan->origin_id)
                        ->where('destination_location_id', $plan->destination_id);
                })
                ->count();

            $planData = PlanData::from($plan);
            $planData->dispatchedCount = $dispatchedCount;

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
        $dispatches = Dispatch::where('client_id', $plan->client_id)
            ->whereDate('dispatch_date', $plan->dispatch_date)
            ->whereHas('tripLegs', function ($q) use ($plan) {
                $q->where('origin_location_id', $plan->origin_id)
                    ->where('destination_location_id', $plan->destination_id);
            })
            ->with(['vehicle', 'driver', 'client', 'tripLegs.originLocation', 'tripLegs.destinationLocation'])
            ->get();

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
