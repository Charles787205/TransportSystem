<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(
    'dispatch_id',
    'trip_sequence',
    'total_parcel',
    'status',
    'odometer_start',
    'odometer_end',
    'departure_time',
    'end_time',
    'arrived_time'
)]
class TripLeg extends Model
{
    use HasFactory;

    public $cast = [
        'status' => \Modules\DispatchOperation\Enums\TripStatus::class
    ];

    public function dispatch(): BelongsTo
    {
        return $this->belongsTo(Dispatch::class);
    }

}
