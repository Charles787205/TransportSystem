<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Vendor\Database\Factories\InsuranceFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\Vendor\Enums\InsuranceTypeEnum;

#[Fillable(['vehicle_id', 'provider_name', 'policy_number', 'start_date', 'end_date', 'type'])]

class Insurance extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    protected $cast = [
        'type' => InsuranceTypeEnum::class,
    ];

    // protected static function newFactory(): InsuranceFactory
    // {
    //     // return InsuranceFactory::new();
    // }
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
