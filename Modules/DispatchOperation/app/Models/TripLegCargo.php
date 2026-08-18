<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TripLegCargo extends Model
{
    use HasFactory;

    protected $table = 'trip_leg_cargoes';

    protected $fillable = [
        'trip_leg_id',
        'cargo_type',
        'quantity',
        'remarks',
    ];

    public function tripLeg(): BelongsTo
    {
        return $this->belongsTo(TripLeg::class);
    }
}
