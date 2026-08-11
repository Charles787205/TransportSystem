<?php

namespace Modules\Client\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateDestinationData extends Data
{
    public function __construct(
        public string $name,
        public int $clientId
    ) {}

    public function destinationAttributes()
    {
        return [
            'name' => $this->name,
            'client_id' => $this->clientId,
        ];
    }
}
