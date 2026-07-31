<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Modules\Vendor\Classes\Data\CreateVendorData;
use Modules\Vendor\Models\Vendor;
use Modules\Vendor\Services\VendorService;

class VendorController extends Controller
{
    public function __construct(private readonly VendorService $vendorService) {}

    public function index()
    {
        Gate::authorize('viewAny', Vendor::class);

        $vendors = $this->vendorService->getVendorsWithVehicles();

        return Inertia::render('vendor/index', [
            'vendors' => $vendors,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Vendor::class);

        return Inertia::render('vendor/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateVendorData $data)
    {
        Gate::authorize('create', Vendor::class);

        $this->vendorService->createVendor($data);

        return redirect()->route('vendor.index')->with('status', 'Vendor created.');
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $vendorModel = Vendor::findOrFail($id);
        Gate::authorize('view', $vendorModel);

        $vendor = $this->vendorService->getVendorForVendorPage($id);

        return Inertia::render('vendor/show', ['vendor' => $vendor]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $vendorModel = Vendor::findOrFail($id);
        Gate::authorize('update', $vendorModel);

        return view('vendor::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $vendorModel = Vendor::findOrFail($id);
        Gate::authorize('update', $vendorModel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $vendorModel = Vendor::findOrFail($id);
        Gate::authorize('delete', $vendorModel);
    }
}
