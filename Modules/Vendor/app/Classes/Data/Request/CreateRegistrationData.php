<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateRegistrationData extends Data
{
    public function __construct(
        public readonly string $crNumber,
        public readonly string $crDate,
        public readonly string $orNumber,
        public readonly string $orDate,
        public readonly string $ltfrbDate,
        public readonly string $caseNumber,
    ) {}

    public function registrationAttributes()
    {
        return [
            'cr_number' => $this->crNumber,
            'cr_date' => $this->crDate,
            'or_number' => $this->orNumber,
            'or_date' => $this->orDate,
            'ltfrb_date' => $this->ltfrbDate,
            'case_number' => $this->caseNumber,
        ];
    }
}
