<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;



#[Fillable([
    'vendor_id',
    'plate_number',
    'type',
    'make',
    'engine_number',
    'chassis_number',
    'year_model',
    'owners_name',
    'registered_address',
    'is_active'
])]
class Vehicle extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    public function vendor() {
        return $this->belongsTo(Vendor::class);
    }
    public function insurances(){
        return $this->hasMany(Insurance::class);
    }
    public function registrations() {
        return $this->hasMany(Registration::class);
    }
}
