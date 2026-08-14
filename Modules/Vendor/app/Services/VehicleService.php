<?php

namespace Modules\Vendor\Services;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\Vendor\Classes\Data\Request\CreateInsuranceData;
use Modules\Vendor\Classes\Data\Request\CreateRegistrationData;
use Modules\Vendor\Classes\Data\Request\CreateVehicleData;
use Modules\Vendor\Classes\Data\Request\UpdateVehicleData;
use Modules\Vendor\Classes\Data\Response\VehicleData;
use Modules\Vendor\Classes\Data\Response\VehicleDriverHistory;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Repositories\DriverRepository;
use Modules\Vendor\Repositories\VehicleRepository;

class VehicleService
{
    public function __construct(protected VehicleRepository $vehicleRepo, protected DriverRepository $driverRepo) {}

    public function getPaginated(int $vendorId, int $pageSize = 20)
    {
        return $this->vehicleRepo
            ->getVehiclesPaginated($vendorId, $pageSize)
            ->through(fn ($vehicle) => VehicleData::from($vehicle));
    }

    public function createVehicle(CreateVehicleData $data)
    {
        return DB::transaction(function () use ($data) {

            $vehicle = $this->vehicleRepo->createVehicle(
                $data->vehicleAttributes());
            $vehicle->insurances()->create($data->insurance->insuranceAttributes());

            $vehicle->registrations()->create(
                $data->registration->registrationAttributes()
            );

            return $vehicle->load(['insurances', 'registrations']);
        });
    }

    public function updateVehicle(int $vehicleId, UpdateVehicleData $data): VehicleData
    {
        $vehicle = Vehicle::findOrFail($vehicleId);
        $vehicle->update($data->vehicleAttributes());

        return VehicleData::from($vehicle->fresh(['insurances', 'registrations', 'driver']));
    }

    public function addInsurance(int $vehicleId, CreateInsuranceData $data)
    {
        $vehicle = Vehicle::findOrFail($vehicleId);

        return $vehicle->insurances()->create($data->insuranceAttributes());
    }

    public function addRegistration(int $vehicleId, CreateRegistrationData $data)
    {
        $vehicle = Vehicle::findOrFail($vehicleId);

        return $vehicle->registrations()->create($data->registrationAttributes());
    }

    public function getVehicleStats(int $vehicleId): array
    {
        $totalTrips = Dispatch::where('vehicle_id', $vehicleId)->count();
        $completedTrips = Dispatch::where('vehicle_id', $vehicleId)
            ->whereHas('tripLegs', fn ($q) => $q->where('status', 'delivered'))
            ->count();

        $successRate = $totalTrips > 0 ? (int) round(($completedTrips / $totalTrips) * 100) : 100;

        return [
            'totalTrips' => $totalTrips,
            'successRate' => $successRate,
        ];
    }

    public function getVehicleWithInsurancesAndRegistration(int $vehicleId)
    {
        $vehicleModel = $this->vehicleRepo->getVehicleWithInsurancesAndRegistrations($vehicleId);
        if (! $vehicleModel) {
            throw new ModelNotFoundException('Vehicle not found.');
        }

        return VehicleData::from($vehicleModel);
    }

    public function getDriverHistory(int $vehicleId)
    {
        $activities = $this->vehicleRepo->getDriverHistory($vehicleId);

        $driverIds = $activities
            ->flatMap(fn ($activity) => [
                data_get($activity->attribute_changes, 'old.driver_id'),
                data_get($activity->attribute_changes, 'attributes.driver_id'),
            ])
            ->filter()
            ->unique();

        $drivers = $this->driverRepo->findByIds($driverIds);

        return $activities->map(function ($activity) use ($drivers) {
            $oldId = data_get($activity->attribute_changes, 'old.driver_id');
            $newId = data_get($activity->attribute_changes, 'attributes.driver_id');

            return VehicleDriverHistory::from([
                'changed_at' => $activity->created_at,
                'changed_by' => $activity->causer?->name,
                'old_driver' => $drivers->get($oldId)?->full_name ?? 'None',
                'new_driver' => $drivers->get($newId)?->full_name,
            ]);
        });
    }

    public function attachDriver(int $vehicleId, int $driverId)
    {
        $this->vehicleRepo->attachDriver(vehicleId: $vehicleId, driverId: $driverId);
    }
}
