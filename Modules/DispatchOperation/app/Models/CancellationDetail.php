<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\DispatchOperation\Enums\CancellationDetailsEnum;

// use Modules\DispatchOperation\Database\Factories\CancellationDetailFactory;

#[Fillable(['trip_leg_id', 'detail', 'remark'])]
class CancellationDetail extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    protected $cast = [
        'detail' => CancellationDetailsEnum::class,
    ];

    public function tripLeg()
    {
        return $this->belongsTo(TripLeg::class);
    }
}
