<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Modules\DispatchOperation\Classes\Data\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Services\TripLegService;
use Illuminate\Http\Request;
class TripLegController extends Controller
{
    public function __construct(
        private TripLegService $tripLegService,
        ){}
    
    public function store(CreateTripLegData $request)
    {
            
            $this->tripLegService->addTripLeg($request);
            
            return back()->with('success', 'Trip leg added');
       
    }

    public function update(EditTripLegData $request, int $id) {
       
       
        $this->tripLegService->editTripLeg($request, $id);
        return back()->with(['success', 'Trip data updated']);
      
    }

   
    public function destroy($id) {

    }
}
