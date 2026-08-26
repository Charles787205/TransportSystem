<?php

namespace Modules\Vendor\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Modules\Vendor\Models\Vendor;

class VendorRepository
{
    public function createVendor(string $name, string $email, string $phoneNumber): Vendor
    {
        $vendor = Vendor::create([
            'name' => $name,
            'email' => $email,
            'phone_number' => $phoneNumber,
        ]);

        return $vendor->refresh();
    }

    public function getVendors(): Collection
    {
        return Vendor::get()->latest();
    }

    public function getActiveVendorsWithVehiclesCount(): Collection
    {
        return Vendor::where('is_active', true)->withCount('vehicles')->latest()->get();
    }

    public function getVendorWithDriversAndVehiclesCount(int $id): Vendor
    {
        return Vendor::with([
            'vehicles' => fn ($query) => $query->latest()->take(5),
            'drivers' => fn ($query) => $query->latest()->take(5),
        ])->findOrFail($id);
    }
}
