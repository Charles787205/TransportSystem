<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\Drop;

class DropRepository
{
    public function createDrop(array $attributes): Drop
    {
        return Drop::create($attributes);
    }

    public function updateDrop(int $id, array $attributes): Drop
    {
        $drop = Drop::findOrFail($id);
        $drop->update($attributes);

        return $drop->refresh();
    }

    public function deleteDrop(int $id): bool
    {
        $drop = Drop::findOrFail($id);

        return (bool) $drop->delete();
    }

    public function findDropWithTripLeg(int $id): Drop
    {
        return Drop::with('tripLeg')->findOrFail($id);
    }
}
