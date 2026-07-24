<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Attributes\MapOutputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;

#[MapOutputName(SnakeCaseMapper::class)]
class CreateTripLegData extends Data
{
    public function __construct(
        public int $dispatchId,
    ) {}
}
