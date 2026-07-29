<?php

namespace Modules\DispatchOperation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Destination;
use Modules\DispatchOperation\Enums\ServiceType;
use Modules\DispatchOperation\Enums\TripStatus;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;

#[Fillable(
    'vehicle_id',
    'driver_id',
    'business_unit_id',
    'destination_id',
    'service_type',
    'dispatch_date',
    'assigned_call_time',
    'odometer_start',
    'odometer_end')]
class Dispatch extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $casts = [
        'service_type' => ServiceType::class,
    ];

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function driver(): BelongsTo
    {
        return $this->belongsTo(Driver::class);
    }

    public function businessUnit(): BelongsTo
    {
        return $this->belongsTo(BusinessUnit::class);
    }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }

    public function tripLegs(): HasMany
    {
        return $this->hasMany(TripLeg::class);
    }
    public function currentStatus(): ?TripStatus
    {
        
        if ($this->relationLoaded('tripLegs')) {
            return $this->tripLegs->sortByDesc('created_at')->first()?->status;
        }

        
        return $this->tripLegs()->latest()->first()?->status;
    }
}
