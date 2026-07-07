<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Vendor\Database\Factories\VendorFactory;


#[Fillable(['name', 'email', 'phone_number', 'is_active'])]
class Vendor extends Model
{
    use HasFactory;

  

    // protected static function newFactory(): VendorFactory
    // {
    //     // return VendorFactory::new();
    // }
    public function vehicles() {
        return $this->hasMany(Vehicle::class);
    }
    public function drivers(){
        return $this->hasMany(Driver::class);
    }
}
