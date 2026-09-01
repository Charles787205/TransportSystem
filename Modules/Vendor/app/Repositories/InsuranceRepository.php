<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\Insurance;

class InsuranceRepository
{
    public function createInsurance(array $attributes)
    {
        return Insurance::create($attributes)->refresh();
    }
}
