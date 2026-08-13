<?php

namespace Modules\Planning\Services;

use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
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

        return [
            'paginatedPlans' => PaginatedPlanData::from($plans),
            'clients' => $clients->map(fn ($c) => ['id' => $c->id, 'label' => $c->name]),
            'locations' => $locations->map(fn ($l) => ['id' => $l->id, 'label' => $l->name, 'client_id' => $l->client_id]),
            'filters' => $filters,
        ];
    }

    public function getPlanDetails(int $id): PlanDetailPageData
    {
        $plan = $this->planRepo->getPlan($id, with: ['client', 'origin', 'destination']);
        $dispatches = $this->dispatchRepo->getDispatches(
            where: [
                'client_id' => $plan->client_id,
                'dispatch_date' => $plan->dispatch_date,
            ],
            with: ['vehicle', 'driver', 'client', 'tripLegs.originLocation', 'tripLegs.destinationLocation']
        );

        $tripLegs = $dispatches->pluck('tripLegs')->flatten();

        return PlanDetailPageData::from([
            'plan' => PlanData::from($plan),
            'tripLegs' => $tripLegs,
            'dispatches' => $dispatches,
        ]);
    }
}
