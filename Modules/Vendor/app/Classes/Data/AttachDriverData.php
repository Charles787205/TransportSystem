<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Data;

class AttachDriverData extends Data
{
    public function __construct(
        public readonly int $driverId,
        public readonly int $vendorId,
    ) {}
}
