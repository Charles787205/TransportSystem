<?php

namespace Modules\Client\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
// use Modules\Client\Database\Factories\ClientFactory;
#[Fillable(['email', 'name', 'phone_number'])]
class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): ClientFactory
    // {
    //     // return ClientFactory::new();
    // }
}
