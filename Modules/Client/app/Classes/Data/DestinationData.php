<?php

namespace Modules\Client\Classes\Data;

class DestinationData
{
    public function __construct(
       public int $id,
       public int $clientId,
       public string $name,
       
    ) {}
}
