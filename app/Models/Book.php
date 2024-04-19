<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';

    public function hadeets()
{
    return $this->hasMany(Hadeet::class);
}

public function imam()
{
    return $this->belongsTo(Imam::class);
}
}
