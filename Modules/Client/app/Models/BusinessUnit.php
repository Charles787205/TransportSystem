<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;

// use Modules\Client\Database\Factories\BusinessUnitFactory;

#[Fillable(['client_id','name', 'touchpoint', 'active'])]
class BusinessUnit extends Model
{
    use HasFactory;

    public function client(){
        return $this->belongsTo(\Modules\Client\Models\Client::class);
    }
   
}
