<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Modules\Vendor\Classes\Data\Request\CreateDriverData;
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
    public function show($id)
    {
        return view('vendor::show');
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
