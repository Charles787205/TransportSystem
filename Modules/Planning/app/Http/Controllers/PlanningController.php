<?php

namespace Modules\Planning\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Planning\Classes\Data\CreatePlanData;
use Modules\Planning\Classes\Data\PlanData;
use Modules\Planning\Classes\Data\PlanIndexFilterData;
use Modules\Planning\Services\PlanService;
use Modules\Planning\Models\Plan;


class PlanningController extends Controller
{
    public function __construct(
        private PlanService $planService,
    )
    {}
    public function index(Request $request)
    {
        
        $filters = PlanIndexFilterData::from($request->query());
        $data = $this->planService->getDataForIndex($filters);
        
        return Inertia::render(
            'planning/index',
            $data
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('planning::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePlanData $data) {
        $this->planService->createPlan($data);
        return back()->with('success', 'Plan created');
    }

    /**
     * Show the specified resource.
     */
    public function show(int $id)
    {
        $plan = $this->planService->getPlanDetails($id);
        return Inertia::render('planning/show',
            [
                'plan' => $plan,
                'dispatches' => []
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('planning::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
