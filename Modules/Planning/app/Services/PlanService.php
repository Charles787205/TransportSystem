<?php

namespace Modules\Planning\Services;

use Modules\Planning\Classes\Data\CreatePlanData;
use Modules\Planning\Classes\Data\PaginatedPlanData;
use Modules\Planning\Classes\Data\PlanData;
use Modules\Planning\Repositories\PlanRepository;

class PlanService
{
    public function __construct(
        private PlanRepository $planRepo
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
}
