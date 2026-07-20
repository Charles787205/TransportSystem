<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(
        'dispatch_id',
        'trip_sequence',
        'trip_no', 
        'total_parcel', 
        'odometer_start',
        'odometer_end',
        'departure_time',
        'end_time',
        'arrived_time'
)]
class TripLeg extends Model
{
    use HasFactory;

    public function dispatch(): BelongsTo
    {
        return $this->belongsTo(\Modules\DispatchOperation\Models\Dispatch::class);
    }
}
