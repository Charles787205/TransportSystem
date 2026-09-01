<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateDropData;
use Modules\DispatchOperation\Classes\Data\Request\EditDropData;
use Modules\DispatchOperation\Services\DropService;

class DropController extends Controller
{
    public function __construct(
        private DropService $dropService
    ) {}

    public function store(CreateDropData $data)
    {
        $this->dropService->createDrop($data);

        return back()->with('success', 'Drop added successfully.');
    }

    public function update(EditDropData $data, int $id)
    {
        $this->dropService->updateDrop($data, $id);

        return back()->with('success', 'Drop updated successfully.');
    }

    public function destroy(int $id)
    {
        $this->dropService->deleteDrop($id);

        return back()->with('success', 'Drop deleted successfully.');
    }
}
