<?php

namespace Modules\DispatchOperation\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\DispatchService;

class DispatchFormOptionsController extends Controller
{
    public function __construct(
        private DispatchService $dispatchService
    ) {}

    public function index()
    {
        Gate::authorize('viewAny', Dispatch::class);

        return $this->dispatchService->getDispatchFormOptions();
    }
}
