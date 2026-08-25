<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Client\Enums\LocationType;
use Modules\Client\Enums\TouchpointType;

#[Fillable(['client_id', 'name', 'touchpoint', 'type', 'address', 'active'])]
class Location extends Model
{
    use HasFactory;

    protected $casts = [
        'type' => LocationType::class,
        'touchpoint' => TouchpointType::class,
        'active' => 'boolean',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }
}
