<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateReturnTripData;
use Modules\DispatchOperation\Services\ReturnTripService;

class ReturnTripController extends Controller
{
    public function __construct(
        private ReturnTripService $returnTripService
    ) {}

    public function store(CreateReturnTripData $data)
    {
        $this->returnTripService->createReturnTrip($data);

        return back()->with('success', 'Return trip created successfully.');
    }

    public function destroy(int $id)
    {
        $this->returnTripService->deleteReturnTrip($id);

        return back()->with('success', 'Return trip deleted successfully.');
    }
}
