<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\LocationData;
use Modules\User\Classes\Data\Response\UserData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class TripRemarkData extends Data
{
    public function __construct(
        public int $id,
        public int $tripLegId,
        public string $remark,
        public ?int $locationId = null,
        public ?int $userId = null,
        public ?LocationData $location = null,
        public ?UserData $user = null,
        public string $createdAt = '',
        public string $updatedAt = '',
    ) {}
}
