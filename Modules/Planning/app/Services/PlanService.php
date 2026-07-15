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
use Modules\Planning\Classes\Data\PlanIndexFilterData;

class PlanService
{
    public function __construct(
        private PlanRepository $planRepo,
        private BusinessUnitRepository $businessUnitRepo,
        private DestinationRepository $destinationRepo,
        )
    {}
    public function createPlan(CreatePlanData $data){
        $plan = $this->planRepo->createPlan($data->toArray());
        return $plan;
    }

    public function getPaginatedPlan(){
        $plans = $this->planRepo->getPaginatedPlans(pageSize: 20);
        return PaginatedPlanData::from($plans);
    }

    public function getDataForIndex(PlanIndexFilterData $filters): array {
        $destinations = $this->destinationRepo->getDestinations();
        $businessUnits = $this->businessUnitRepo->getBusinessUnits();
        $plans = $this->planRepo->getPaginatedPlans(where: $filters->filterAttributes(), with: ['destinations', 'business_units']);
        
        return [
            'destinations' => $destinations->map(fn ($dest) => DestinationData::from($dest)),
            'businessUnits' => $businessUnits->map(fn ($bu) => BusinessUnitData::from($bu)),
            'paginatedPlans' => PaginatedPlanData::from($plans),
            'filters' => $filters
        ];
    }
}
