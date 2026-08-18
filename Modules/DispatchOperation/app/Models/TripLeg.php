<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Client\Models\Location;
use Modules\DispatchOperation\Enums\TripStatus;

#[Fillable(
    'dispatch_id',
    'trip_sequence',
    'origin_location_id',
    'destination_location_id',
    'total_parcel',
    'status',
    'odometer_start',
    'odometer_end',
    'departure_time',
    'end_time',
    'arrived_time',
    'linehaul_trip_no'
)]
class TripLeg extends Model
{
    use HasFactory;

    protected $casts = [
        'status' => TripStatus::class,
    ];

    public function dispatch(): BelongsTo
    {
        return $this->belongsTo(Dispatch::class);
    }

    public function originLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'origin_location_id');
    }

    public function destinationLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'destination_location_id');
    }

    public function drops(): HasMany
    {
        return $this->hasMany(Drop::class);
    }

    public function cargoes(): HasMany
    {
        return $this->hasMany(TripLegCargo::class);
    }

    public function cancellationDetail()
    {
        return $this->hasOne(CancellationDetail::class);
    }
}
