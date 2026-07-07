<?php

namespace Modules\Vendor\Models;


use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\Models\Concerns\LogsActivity;
use Illuminate\Database\Eloquent\Attributes\Cast;
use Modules\Vendor\Enums\GenderEnum;

#[Fillable(
    ['vendor_id',
     'driver_id_number',
    'full_name', 
    'birthday', 
    'gender', 
    'phone_number', 
    'address', 
    'license_number', 
    'status',
    'license_expiry_date']
    )]
#[Hidden([
    'license_number',
])]

class Driver extends Model
{
    use HasFactory, LogsActivity;



    protected function cast(): array
    {
        return  [
            'gender' => GenderEnum::class,
            'birthday' => 'date',
            'license_expiry' => 'date',

        ];
    }
   

    public function vendor(){
        return $this->belongsTo(Vendor::class);
    }

    public function emergencyContact(){
        return $this->hasOne(EmergencyContact::class);
    }
    
}
