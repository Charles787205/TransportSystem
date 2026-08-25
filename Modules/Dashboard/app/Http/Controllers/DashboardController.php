<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Modules\Dashboard\Services\DashboardService;

class DashboardController extends Controller
{
    public function __construct(protected DashboardService $dashboardService) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $hasQueryParams = $request->hasAny([
            'date_preset',
            'date_from',
            'date_to',
            'origin_location_id',
            'destination_location_id',
            'client_id',
        ]);

        if (! $hasQueryParams) {
            $today = now()->format('Y-m-d');
            $filterData = new DashboardFilterData(
                datePreset: 'today',
                dateFrom: $today,
                dateTo: $today,
            );
        } else {
            $filterData = DashboardFilterData::from($request);
        }

        $data = $this->dashboardService->getDashboardData($filterData);

        return Inertia::render('dashboard', $data);
    }
}
