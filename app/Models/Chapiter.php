<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapiter extends Model
{
    use HasFactory;
    protected $table = 'chapiters';

    public function hadeets()
{
    return $this->hasMany(Hadeet::class);
}
}

