<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\Vendor\Classes\Data\CreateVehicleData;
use Modules\Vendor\Classes\Data\CreateVendorData;
use Modules\Vendor\Classes\Data\DriverData;
use Modules\Vendor\Classes\Data\VehicleData;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;
use Modules\Vendor\Services\DriverService;
use Modules\Vendor\Services\VehicleService;
use Illuminate\Validation\Rule;


class VendorVehicleController extends Controller
{
    
    public function __construct(protected VehicleService $vehicleService, protected DriverService $driverService){}
    public function index(Vendor $vendor)
    {
        $vehicles = $this->vehicleService->getPaginated(vendorId: $vendor->id);
        return Inertia::render('vendor/vehicles/index', ['data' => $vehicles, 'vendorId' => $vendor->id]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Vendor $vendor)
    {
        return Inertia::render('vendor/vehicles/create', ['vendorId'=> $vendor->id]);
    }

    /**
     * Store a newly created resource in storage.`
     */
    public function store(CreateVehicleData $data) {
        $this->vehicleService->createVehicle($data);
        return back()->with("success", "Created :)");
    }

    /**
     * Show the specified resource.
     */
    public function show(Vendor $vendor, Vehicle $vehicle)
    {
        $vehicle = $this->vehicleService->getVehicleWithInsurancesAndRegistration($vehicle->id);
        $history = $this->vehicleService->getDriverHistory($vehicle->id);
        return Inertia::render(
            'vendor/vehicles/show',
            [
                'vendorId' => $vendor->id,
                'drivers' => Inertia::optional(fn () => 
                    $this->driverService->getDriversFromVendor($vendor->id)
                ),
                'history' => $history,
                'vehicle' => $vehicle
            ]
        );
    }

   public function attachDriver(string $vehicleId, string $vendorId, Request $request)
    {
        $validated = $request->validate([
            'driver_id' => ['required', Rule::exists('drivers', 'id')],
        ]);

        $this->vehicleService->attachDriver(
            (int) $vehicleId,
            $validated['driver_id']
        );

        return back()->with('success', 'Driver attached.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vendor $vendor, Vehicle $vehicle)
    {
        return Inertia::render('vendors/vehicles/edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {
        return back()->with("success", "Deleted :)");
    }
}
