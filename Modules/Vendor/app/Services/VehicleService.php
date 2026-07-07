<?php

namespace Modules\Vendor\Services;

use Modules\Vendor\Classes\Data\CreateVehicleData;
use Modules\Vendor\Repositories\VehicleRepository;
use Modules\Vendor\Classes\Data\VehicleData;
use Illuminate\Support\Facades\DB;
class VehicleService
{

    public function __construct(protected VehicleRepository $vehicleRepo)
    {}
    public function getPaginated(int $vendorId, int $pageSize = 20)
    {
        return $this->vehicleRepo
            ->getVehiclesPaginated($vendorId, $pageSize)
            ->through(fn ($vehicle) => VehicleData::from($vehicle));
    }

    public function createVehicle(CreateVehicleData $data) {
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
}
