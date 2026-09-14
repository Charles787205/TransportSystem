<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Modules\DispatchOperation\Classes\Data\Request\CreateDropData;
use Modules\DispatchOperation\Classes\Data\Request\EditDropData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\DropService;

class DropController extends Controller
{
    public function __construct(
        private DropService $dropService
    ) {}

    public function store(CreateDropData $data)
    {
        Gate::authorize('create', Dispatch::class);

        $this->dropService->createDrop($data);

        return back()->with('success', 'Drop added successfully.');
    }

    public function update(EditDropData $data, int $id)
    {
        Gate::authorize('update', Dispatch::class);

        $this->dropService->updateDrop($data, $id);

        return back()->with('success', 'Drop updated successfully.');
    }

    public function destroy(int $id)
    {
        Gate::authorize('delete', Dispatch::class);

        $this->dropService->deleteDrop($id);

        return back()->with('success', 'Drop deleted successfully.');
    }
}
