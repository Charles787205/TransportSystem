<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateInsuranceData extends Data
{
    public function __construct(
        public readonly string $providerName,
        public readonly string $policyNumber,
        public readonly string $startDate,
        public readonly string $endDate,
    ) {}

    public function insuranceAttributes()
    {
        return [
            'provider_name' => $this->providerName,
            'policy_number' => $this->policyNumber,
            'start_date' => $this->startDate,
            'end_date' => $this->endDate,
        ];
    }
}
