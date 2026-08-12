<?php

namespace Modules\Client\Classes\Data\Request;

use Modules\Client\Enums\LocationType;
use Modules\Client\Enums\TouchpointType;
use Spatie\LaravelData\Data;

class CreateLocationData extends Data
{
    public function __construct(
        public int $clientId,
        public string $name,
        public ?TouchpointType $touchpoint = null,
        public ?LocationType $type = null,
        public ?string $address = null,
        public bool $active = true,
    ) {}

    public function locationAttributes(): array
    {
        return [
            'client_id' => $this->clientId,
            'name' => $this->name,
            'touchpoint' => $this->touchpoint?->value,
            'type' => $this->type?->value,
            'address' => $this->address,
            'active' => $this->active,
        ];
    }
}
