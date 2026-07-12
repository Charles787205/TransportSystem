<?php

namespace Modules\Client\Repositories;
use Modules\Client\Models\BusinessUnit;
class BusinessUnitRepository
{
    public function handle() {}


    public function createBusinessunit(array $data){
        $bu = BusinessUnit::create($data);
        return $bu->refresh();
    }
}
