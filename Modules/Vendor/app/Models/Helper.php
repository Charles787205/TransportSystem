<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// use Modules\Vendor\Database\Factories\HelperFactory;

#[Fillable(['full_name', 'phone_number'])]
class Helper extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): HelperFactory
    // {
    //     // return HelperFactory::new();
    // }
}
