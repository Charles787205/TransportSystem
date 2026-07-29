<?php

namespace Modules\Planning\Services;

use Modules\Client\Classes\Data\BusinessUnitData;
use Modules\Client\Classes\Data\DestinationData;
use Modules\Planning\Classes\Data\CreatePlanData;
use Modules\Planning\Classes\Data\PaginatedPlanData;
use Modules\Planning\Classes\Data\PlanData;
use Modules\Planning\Repositories\PlanRepository;
use Modules\Client\Repositories\BusinessUnitRepository;
use Modules\Client\Repositories\DestinationRepository;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\Planning\Classes\Data\PlanIndexFilterData;
use Modules\Planning\Classes\Data\PlanDetailPageData;
use Modules\Planning\Classes\Data\PlanWithBUandDestinationData;
use Modules\DispatchOperation\Classes\Data\DispatchData;
use Modules\DispatchOperation\Classes\Data\TripLegData;
use Modules\DispatchOperation\Repositories\TripLegRepository;

class PlanService
{
    public function __construct(
        private PlanRepository $planRepo,
        private BusinessUnitRepository $businessUnitRepo,
        private DestinationRepository $destinationRepo,
        private DispatchRepository $dispatchRepo,
        private TripLegRepository $tripLegRepo,
        )
    {}
    public function createPlan(CreatePlanData $data){
        $plan = $this->planRepo->createPlan($data->planAttributes());
        return $plan;
    }

    public function getPaginatedPlan(): PaginatedPlanData
    {
        $plans = $this->planRepo->getPaginatedPlans(pageSize: 20);
        return PaginatedPlanData::from($plans);
    }

    public function getDataForIndex(PlanIndexFilterData $filters): array {
        $destinations = $this->destinationRepo->getDestinations();
        $businessUnits = $this->businessUnitRepo->getBusinessUnits();
        $plans = $this->planRepo->getPaginatedPlans(where: $filters->filterAttributes(), with: ['destination', 'businessUnit']);
        
        return [
            'destinations' => $destinations->map(fn ($dest) => DestinationData::from($dest)),
            'businessUnits' => $businessUnits->map(fn ($bu) => BusinessUnitData::from($bu)),
            'paginatedPlans' => PaginatedPlanData::from($plans),
            'filters' => $filters
        ];
    }

    public function getPlanDetails(int $id): PlanDetailPageData
    {
        $plan = $this->planRepo->getPlan($id, ['businessUnit', 'destination']);
        $dispatchesModel = $this->dispatchRepo->getDispatches(with:['tripLegs'], where: ['business_unit_id' => $plan->businessUnit->id, 'destination_id' => $plan->destination->id]);
        $dispatches = $dispatchesModel->map(fn ($dispatch) => DispatchData::from($dispatch));
        $tripLegsModel = $this->tripLegRepo->getTripLegsByBusinessUnitAndDestination(businessUnitId: $plan->businessUnit->id, destinationId: $plan->destination->id, with: ['dispatch']);
        return PlanDetailPageData::from([
            'plan' => PlanWithBUandDestinationData::from($plan),
            'dispatches' => $dispatches,
            'tripLegs' => $tripLegsModel->map(
                fn ($tripLeg) => TripLegData::from($tripLeg)
            ),
        ]);
    }

    
}
