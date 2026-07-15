<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

// use Modules\Client\Database\Factories\DestinationFactory;

#[Fillable('client_id', 'name')]
class Destination extends Model
{
    use HasFactory;

    
    public function client() : BelongsTo
    {
        return $this->belongsTo(\Modules\Client\Models\Client::class);
    }

    
  
}
