<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Modules\Vendor\Classes\Data\Request\CreateInsuranceData;
use Modules\Vendor\Classes\Data\Request\CreateRegistrationData;
use Modules\Vendor\Classes\Data\Request\CreateVehicleData;
use Modules\Vendor\Classes\Data\Request\UpdateVehicleData;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;
use Modules\Vendor\Services\DriverService;
use Modules\Vendor\Services\VehicleService;

class VendorVehicleController extends Controller
{
    public function __construct(protected VehicleService $vehicleService, protected DriverService $driverService) {}

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
        return Inertia::render('vendor/vehicles/create', ['vendorId' => $vendor->id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateVehicleData $data)
    {
        $this->vehicleService->createVehicle($data);

        return back()->with('success', 'Created :)');
    }

    /**
     * Show the specified resource.
     */
    public function show(Vendor $vendor, Vehicle $vehicle)
    {
        $vehicleData = $this->vehicleService->getVehicleWithInsurancesAndRegistration($vehicle->id);
        $history = $this->vehicleService->getDriverHistory($vehicle->id);
        $stats = $this->vehicleService->getVehicleStats($vehicle->id);

        return Inertia::render(
            'vendor/vehicles/show',
            [
                'vendorId' => $vendor->id,
                'drivers' => Inertia::optional(fn () => $this->driverService->getDriversFromVendor($vendor->id)),
                'history' => $history,
                'vehicle' => $vehicleData,
                'stats' => $stats,
            ]
        );
    }

    public function update(UpdateVehicleData $data, Vendor $vendor, Vehicle $vehicle)
    {
        $this->vehicleService->updateVehicle($vehicle->id, $data);

        return back()->with('success', 'Vehicle updated successfully.');
    }

    public function addInsurance(CreateInsuranceData $data, Vendor $vendor, Vehicle $vehicle)
    {
        $this->vehicleService->addInsurance($vehicle->id, $data);

        return back()->with('success', 'Insurance policy added.');
    }

    public function addRegistration(CreateRegistrationData $data, Vendor $vendor, Vehicle $vehicle)
    {
        $this->vehicleService->addRegistration($vehicle->id, $data);

        return back()->with('success', 'Registration added.');
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
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return back()->with('success', 'Deleted :)');
    }
}
