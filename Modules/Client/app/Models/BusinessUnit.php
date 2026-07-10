<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
// use Modules\Client\Database\Factories\BusinessUnitFactory;

#[Fillable(['name', 'touchpoint'])]
class BusinessUnit extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): BusinessUnitFactory
    // {
    //     // return BusinessUnitFactory::new();
    // }
}
