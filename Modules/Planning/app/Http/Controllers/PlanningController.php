<?php

namespace Modules\Planning\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Modules\Planning\Classes\Data\CreatePlanData;
use Modules\Planning\Classes\Data\PlanIndexFilterData;
use Modules\Planning\Models\Plan;
use Modules\Planning\Services\PlanService;

class PlanningController extends Controller
{
    public function __construct(
        private PlanService $planService,
    ) {}

    public function index(Request $request)
    {
        Gate::authorize('viewAny', Plan::class);

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
        Gate::authorize('create', Plan::class);

        return view('planning::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePlanData $data)
    {
        Gate::authorize('create', Plan::class);

        $this->planService->createPlan($data);

        return back()->with('success', 'Plan created');
    }

    /**
     * Show the specified resource.
     */
    public function show(int $id)
    {
        $planModel = Plan::findOrFail($id);
        Gate::authorize('view', $planModel);

        $planDetails = $this->planService->getPlanDetails($id);

        return Inertia::render('planning/show',
            $planDetails
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $planModel = Plan::findOrFail($id);
        Gate::authorize('update', $planModel);

        return view('planning::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $planModel = Plan::findOrFail($id);
        Gate::authorize('update', $planModel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $planModel = Plan::findOrFail($id);
        Gate::authorize('delete', $planModel);

        $planModel->delete();

        return back()->with('success', 'Plan deleted successfully.');
    }
}
