<?php

namespace Modules\DispatchOperation\Contracts;

use Illuminate\Support\Collection;

interface DispatchServiceInterface
{
    /**
     * Get dispatches that match the specific plan criteria.
     */
    public function getDispatchesForPlan(int $clientId, string $dispatchDate, int $originId, int $destinationId): Collection;
}
