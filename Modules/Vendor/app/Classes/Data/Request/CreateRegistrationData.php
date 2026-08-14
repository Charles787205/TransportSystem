<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateRegistrationData extends Data
{
    public function __construct(
        public readonly string $crNumber,
        public readonly string $orNumber,
        public readonly ?string $orDate = null,
        public readonly ?string $ltfrbDate = null,
        public readonly ?string $caseNumber = null,
    ) {}

    public function registrationAttributes(): array
    {
        return array_filter([
            'cr_number' => $this->crNumber,
            'or_number' => $this->orNumber,
            'or_date' => $this->orDate,
            'ltfrb_date' => $this->ltfrbDate,
            'case_number' => $this->caseNumber,
        ], fn ($val) => $val !== null);
    }
}
