<?php

namespace Modules\Dashboard\Services;

use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\Dashboard\Repositories\DashboardRepository;

class DashboardService
{
    public function __construct(
        protected DashboardRepository $dashboardRepo,
        protected LocationRepository $locationRepo,
        protected ClientRepository $clientRepo
    ) {}

    public function getDashboardData(array $filters): array
    {
        return [
            'metrics' => $this->dashboardRepo->getMetrics($filters),
            'statusBreakdown' => $this->dashboardRepo->getStatusBreakdown($filters),
            'topDestinations' => $this->dashboardRepo->getTopDestinations($filters),
            'dispatchesByClient' => $this->dashboardRepo->getDispatchesByClient($filters),
            'recentDispatches' => $this->dashboardRepo->getRecentDispatches($filters),
            'filters' => $filters,
            'locations' => $this->locationRepo->getLocations(),
            'clients' => $this->clientRepo->getAllClients(),
        ];
    }
}
