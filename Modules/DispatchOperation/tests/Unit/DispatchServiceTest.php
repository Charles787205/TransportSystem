<?php

use Mockery\MockInterface;
use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;
use Modules\DispatchOperation\Services\DispatchService;
use Modules\Vendor\Repositories\DriverRepository;
use Modules\Vendor\Repositories\VehicleRepository;
use Tests\TestCase;

uses(TestCase::class);

test('getDispatchMetrics returns correct metrics from repository', function () {
    $filters = ['date_filter' => 'today'];

    $expectedMetrics = [
        'planned' => 10,
        'completed' => 5,
        'dispatched' => 8,
        'unplanned' => 2,
        'remaining' => 2,
    ];

    $dispatchRepo = Mockery::mock(DispatchRepository::class, function (MockInterface $mock) use ($filters, $expectedMetrics) {
        $mock->shouldReceive('getDispatchMetrics')->once()->with($filters)->andReturn($expectedMetrics);
    });

    $tripLegRepo = Mockery::mock(TripLegRepository::class);
    $vehicleRepo = Mockery::mock(VehicleRepository::class);
    $driverRepo = Mockery::mock(DriverRepository::class);
    $clientRepo = Mockery::mock(ClientRepository::class);
    $locationRepo = Mockery::mock(LocationRepository::class);

    $service = new DispatchService(
        $dispatchRepo,
        $tripLegRepo,
        $vehicleRepo,
        $driverRepo,
        $clientRepo,
        $locationRepo
    );

    $result = $service->getDispatchMetrics($filters);

    expect($result)->toBe($expectedMetrics);
});
