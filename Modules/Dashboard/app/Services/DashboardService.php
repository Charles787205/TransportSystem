<?php

namespace Modules\Dashboard\Services;

use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Modules\Dashboard\Classes\Data\Response\DashboardResponseData;
use Modules\Dashboard\Repositories\DashboardRepository;

class DashboardService
{
    public function __construct(
        protected DashboardRepository $dashboardRepo
    ) {}

    public function getDashboardData(DashboardFilterData $filters): DashboardResponseData
    {
        return new DashboardResponseData(
            metrics: $this->dashboardRepo->getMetrics($filters),
            statusBreakdown: $this->dashboardRepo->getStatusBreakdown($filters),
            topDestinations: $this->dashboardRepo->getTopDestinations($filters),
            dispatchesByClient: $this->dashboardRepo->getDispatchesByClient($filters),
            recentDispatches: $this->dashboardRepo->getRecentDispatches($filters),
            filters: $filters,
            locations: $this->dashboardRepo->getLocations(),
            clients: $this->dashboardRepo->getClients(),
        );
    }
}
