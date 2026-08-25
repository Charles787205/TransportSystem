<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Client\Models\Location;
use Modules\User\Models\User;

class TripRemark extends Model
{
    use HasFactory;

    protected $fillable = [
        'trip_leg_id',
        'remark',
        'location_id',
        'user_id',
    ];

    public function tripLeg(): BelongsTo
    {
        return $this->belongsTo(TripLeg::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
