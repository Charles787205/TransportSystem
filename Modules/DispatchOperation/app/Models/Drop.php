<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Client\Models\Location;

#[Fillable([
    'trip_leg_id',
    'location_id',
    'drop_sequence',
    'parcel_count',
    'box_count',
    'loose_items_count',
    'weight_kg',
    'arrived_time',
    'departed_time',
])]
class Drop extends Model
{
    use HasFactory;

    public function tripLeg(): BelongsTo
    {
        return $this->belongsTo(TripLeg::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }
}
