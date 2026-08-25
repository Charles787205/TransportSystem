<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Dashboard\Services\DashboardService;

class DashboardController extends Controller
{
    public function __construct(protected DashboardService $dashboardService) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->only([
            'date_preset',
            'date_from',
            'date_to',
            'origin_location_id',
            'destination_location_id',
            'client_id',
        ]);

        if (empty($filters)) {
            $today = now()->format('Y-m-d');
            $filters = [
                'date_preset' => 'today',
                'date_from' => $today,
                'date_to' => $today,
            ];
        }

        $data = $this->dashboardService->getDashboardData($filters);

        return Inertia::render('dashboard', $data);
    }
}
