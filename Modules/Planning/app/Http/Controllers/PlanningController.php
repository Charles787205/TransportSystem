<?php

namespace Modules\Planning\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Planning\Classes\Data\PlanIndexFilterData;
use Modules\Planning\Services\PlanService;


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
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('planning::show');
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
