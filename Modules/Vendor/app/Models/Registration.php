<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Vendor\Database\Factories\RegistrationFactory;


#[Fillable(['vehicle_id', 'cr_number', 'cr_date', 'or_number', 'or_date', 'ltfrb_date', 'case_number'])]
class Registration extends Model
{
    use HasFactory;
    protected $fillable = [];

    public function vehicle(){
        return $this->belongsTo(Vehicle::class);
    }
}
