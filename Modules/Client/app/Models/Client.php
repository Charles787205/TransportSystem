<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\HasMany;

// use Modules\Client\Database\Factories\ClientFactory;
#[Fillable(['email', 'name', 'phone_number'])]
class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    public function businessUnits() : HasMany
     {
        return $this->hasMany(\Modules\Client\Models\BusinessUnit::class);
    }
    
    public function destinations() : HasMany
     {
        return $this->hasMany(\Modules\Client\Models\Destination::class);
    }
}
