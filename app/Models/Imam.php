<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imam extends Model
{
    use HasFactory;
    protected $table = 'imams';

    public function hadeets()
{
    return $this->hasMany(Hadeet::class);
}

public function books()
{
    return $this->hasMany(Book::class);
}

public function imams_bios()
{
    return $this->hasOne(Imam_bio::class);
}
}

