<?php

namespace Modules\Planning\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Planning\Database\Factories\PlanFactory;

#[Fillable(['business_unit_id', 'destination_id', 'batch', 'number_of_vehicles', 'dispatch_date'])]
class Plan extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): PlanFactory
    // {
    //     // return PlanFactory::new();
    // }
}
