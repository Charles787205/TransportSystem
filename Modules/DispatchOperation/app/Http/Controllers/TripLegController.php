<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Modules\DispatchOperation\Classes\Data\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Services\TripLegService;

class TripLegController extends Controller
{
    public function __construct(
        private TripLegService $tripLegService,
        ){}
    
    public function store(CreateTripLegData $data){
        Log::info($data);
        $this->tripLegService->addTripLeg($data->dispatchId);
    }

    public function update(EditTripLegData $request, int $id) {
       
        $this->tripLegService->editTripLeg($request, $id);
    }

   
    public function destroy($id) {}
}
