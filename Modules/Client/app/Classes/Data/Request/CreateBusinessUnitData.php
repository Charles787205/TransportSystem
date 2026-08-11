<?php

namespace Modules\Client\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateBusinessUnitData extends Data
{
    public function __construct(
        public string $clientId,
        public string $name,
        public string $touchpoint,
    ) {}

    public function businessUnitAttributes()
    {
        return [
            'client_id' => $this->clientId,
            'name' => $this->name,
            'touchpoint' => $this->touchpoint,
        ];
    }
}
