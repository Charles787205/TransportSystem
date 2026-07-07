<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Vendor\Classes\Data\CreateVendorData;
use Modules\Vendor\Classes\DTO\VendorDTO;
use Modules\Vendor\Services\VendorService;
use Modules\Vendor\Http\Requests\StoreVendorRequest;

class VendorController extends Controller
{
    public function __construct(private readonly VendorService $vendorService){}
    public function index()
    {
        $vendors = $this->vendorService->getVendorsWithVehicles();
        return Inertia::render('vendor/index', [
            'vendors' => $vendors
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('vendor/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateVendorData $data) {
       
        $this->vendorService->createVendor($data);
   

        return redirect()->route('vendor.index')->with('status', 'Vendor created.');
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $vendor = $this->vendorService->getVendorForVendorPage($id);
        return Inertia::render('vendor/show', ['vendor' => $vendor]);
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
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
