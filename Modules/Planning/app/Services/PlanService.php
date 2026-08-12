<?php

namespace Modules\Planning\Services;

use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;
use Modules\Planning\Classes\Data\Request\CreatePlanData;
use Modules\Planning\Classes\Data\Request\PlanIndexFilterData;
use Modules\Planning\Classes\Data\Response\PaginatedPlanData;
use Modules\Planning\Repositories\PlanRepository;

class PlanService
{
    public function __construct(
        private PlanRepository $planRepo,
        private DispatchRepository $dispatchRepo,
        private TripLegRepository $tripLegRepo,
    ) {}

    public function createPlan(CreatePlanData $data)
    {
        $plan = $this->planRepo->createPlan($data->planAttributes());

        return $plan;
    }

    public function getPaginatedPlan(): PaginatedPlanData
    {
        $plans = $this->planRepo->getPaginatedPlans(pageSize: 20, with: ['client', 'origin', 'destination']);

        return PaginatedPlanData::from($plans);
    }

    public function getDataForIndex(PlanIndexFilterData $filters): array
    {
        $plans = $this->planRepo->getPaginatedPlans(where: $filters->filterAttributes(), with: ['client', 'origin', 'destination']);

        return [
            'paginatedPlans' => PaginatedPlanData::from($plans),
            'filters' => $filters,
        ];
    }
}
