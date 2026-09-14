<?php

use Mockery\MockInterface;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Modules\Dashboard\Classes\Data\Response\DashboardMetricsData;
use Modules\Dashboard\Classes\Data\Response\DashboardResponseData;
use Modules\Dashboard\Classes\Data\Response\DispatchesByServiceTypeItemData;
use Modules\Dashboard\Classes\Data\Response\PlannedVsDispatchedTouchpointItemData;
use Modules\Dashboard\Classes\Data\Response\RecentDispatchItemData;
use Modules\Dashboard\Classes\Data\Response\StatusBreakdownItemData;
use Modules\Dashboard\Repositories\DashboardRepository;
use Modules\Dashboard\Services\DashboardService;
use Spatie\LaravelData\DataCollection;
use Tests\TestCase;


uses(TestCase::class);

test('getDashboardData assembles response data from repository', function () {
    $filters = new DashboardFilterData(datePreset: 'today');

    $metricsData = new DashboardMetricsData(
        plans: 10,
        dispatches: 8,
        vendors: 5,
        vehicles: 20,
        planVsDispatchPercentage: 80.0,
    );

    $statusBreakdown = new DataCollection(StatusBreakdownItemData::class, []);
    $plannedVsDispatched = new DataCollection(PlannedVsDispatchedTouchpointItemData::class, []);
    $dispatchesByServiceType = new DataCollection(DispatchesByServiceTypeItemData::class, []);
    $recentDispatches = new DataCollection(RecentDispatchItemData::class, []);
    $locations = new DataCollection(LocationData::class, []);
    $clients = new DataCollection(ClientData::class, []);

    $repository = Mockery::mock(DashboardRepository::class, function (MockInterface $mock) use (
        $filters, $metricsData, $statusBreakdown, $plannedVsDispatched, $dispatchesByServiceType, $recentDispatches, $locations, $clients
    ) {
        $mock->shouldReceive('getMetrics')->once()->with($filters)->andReturn($metricsData);
        $mock->shouldReceive('getStatusBreakdown')->once()->with($filters)->andReturn($statusBreakdown);
        $mock->shouldReceive('getPlannedVsDispatchedPerTouchPoint')->once()->with($filters)->andReturn($plannedVsDispatched);
        $mock->shouldReceive('getDispatchesByServiceType')->once()->with($filters)->andReturn($dispatchesByServiceType);
        $mock->shouldReceive('getRecentDispatches')->once()->with($filters)->andReturn($recentDispatches);
        $mock->shouldReceive('getLocations')->once()->andReturn($locations);
        $mock->shouldReceive('getClients')->once()->andReturn($clients);
    });

    $service = new DashboardService($repository);
    $result = $service->getDashboardData($filters);

    expect($result)->toBeInstanceOf(DashboardResponseData::class)
        ->and($result->filters)->toBe($filters)
        ->and($result->metrics)->toBe($metricsData)
        ->and($result->statusBreakdown)->toBe($statusBreakdown)
        ->and($result->plannedVsDispatchedPerTouchPoint)->toBe($plannedVsDispatched)
        ->and($result->dispatchesByServiceType)->toBe($dispatchesByServiceType)
        ->and($result->recentDispatches)->toBe($recentDispatches)
        ->and($result->locations)->toBe($locations)
        ->and($result->clients)->toBe($clients);
});
