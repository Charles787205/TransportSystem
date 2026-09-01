<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// use Modules\Vendor\Database\Factories\EmergencyContactFactory;

#[Fillable(['driver_id', 'phone_number', 'full_name'])]
class EmergencyContact extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): EmergencyContactFactory
    // {
    //     // return EmergencyContactFactory::new();
    // }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
