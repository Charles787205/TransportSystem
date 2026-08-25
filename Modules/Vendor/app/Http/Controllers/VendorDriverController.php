<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Inertia\Inertia;
use Modules\Vendor\Classes\Data\Request\CreateDriverData;
use Modules\Vendor\Classes\Data\Request\UpdateDriverStatusData;
use Modules\Vendor\Enums\DriverStatusEnum;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vendor;
use Modules\Vendor\Services\DriverService;

class VendorDriverController extends Controller
{
    public function __construct(
        protected DriverService $driverService
    ) {}

    public function index()
    {
        return view('vendor::index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('vendor::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateDriverData $request)
    {
        try {
            $this->driverService->createDriver($request);

            return back()->with('success', 'Driver created.');
        } catch (Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    /**
     * Show the specified resource.
     */
    public function show(Vendor $vendor, Driver $driver)
    {
        $driverData = $this->driverService->getDriverDetails($driver->id);
        $statuses = array_map(fn ($case) => $case->value, DriverStatusEnum::cases());

        return Inertia::render('vendor/drivers/show', [
            'vendorId' => $vendor->id,
            'driver' => $driverData,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('vendor::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDriverStatusData $request, Vendor $vendor, Driver $driver)
    {
        $this->driverService->updateDriverStatus($driver->id, $request->status);

        return back()->with('success', 'Driver status updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
