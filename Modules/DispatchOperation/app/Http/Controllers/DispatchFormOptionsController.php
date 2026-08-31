<?php

namespace Modules\DispatchOperation\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\DispatchOperation\Services\DispatchService;

class DispatchFormOptionsController extends Controller
{
    public function __construct(
        private DispatchService $dispatchService
    ) {}

    public function index()
    {
        return $this->dispatchService->getDispatchFormOptions();
    }
}
