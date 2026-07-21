<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\DispatchOperation\Classes\Data\CreateDispatchData;
use Modules\DispatchOperation\Services\DispatchService;
class DispatchOperationController extends Controller
{
    
    public function __construct(
        private DispatchService $dispatchService
    ) {}

    public function index()
    {

        $dispatchData = $this->dispatchService->getPaginatedDispatches();
        return Inertia::render(
            'dispatchoperations/index',
            ['dispatches' => $dispatchData]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dispatchoperation::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateDispatchData $data) {
        $this->dispatchService->createDispatch($data);
        return back()->with('success' , 'Dispatch Created');
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('dispatchoperation::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('dispatchoperation::edit');
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
