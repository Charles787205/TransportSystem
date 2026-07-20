<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable('vehicle_id', 'driver_id', 'business_unit_id', 'destination_id', 'service_type', 'dispatch_id', 'assigned_call_time', 'linehaule_trip_no','odometer_start', 'odometer_end')]
class Dispatch extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    public function vehicle(): BelongsTo {
        return $this->belongsTo(\Modules\Vendor\Models\Vehicle::class);
    }
    public function driver(): BelongsTo {
        return $this->belongsTo(\Modules\Vendor\Models\Driver::class);
    }
    public function businessUnit(): BelongsTo {
        return $this->belongsTo(\Modules\Client\Models\BusinessUnit::class);
    }
    public function destination(): BelongsTo {
        return $this->belongsTo(\Modules\Client\Models\Destination::class);
    }

    public function tripLeg(): HasMany 
    {
        return $this->hasMany(\Modules\DispatchOperation\Models\TripLeg::class);
    }
}
