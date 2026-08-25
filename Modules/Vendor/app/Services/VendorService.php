<?php

namespace Modules\Vendor\Services;

use Illuminate\Support\Collection;
use Modules\Vendor\Classes\Data\Request\CreateVendorData;
use Modules\Vendor\Classes\Data\Response\VendorData;
use Modules\Vendor\Classes\Data\Response\VendorWithDriversAndVehiclesData;
use Modules\Vendor\Classes\Data\Response\VendorWithVehicleCountData;
use Modules\Vendor\Models\Vendor;
use Modules\Vendor\Repositories\VendorRepository;

class VendorService
{
    public function __construct(private readonly VendorRepository $vendorRepo) {}

    public function getVendorsWithVehicles(): Collection
    {
        $vendors = $this->vendorRepo->getActiveVendorsWithVehiclesCount();

        return $vendors->map(function (Vendor $vendor) {
            return VendorWithVehicleCountData::from($vendor);
        });
    }

    public function createVendor(CreateVendorData $data): VendorData
    {
        $vendor = $this->vendorRepo->createVendor($data->name, $data->email, $data->phoneNumber);

        return VendorData::from($vendor);
    }

    public function getVendorForVendorPage(int $id): VendorWithDriversAndVehiclesData
    {
        $vendor = $this->vendorRepo->getVendorWithDriversAndVehiclesCount($id);

        return VendorWithDriversAndVehiclesData::from($vendor);
    }
}
