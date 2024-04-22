<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hadeet extends Model
{
    use HasFactory;
    protected $table = 'hadeets';


//     public function chapiter()
// {
//     return $this->belongsTo(Chapiter::class);
// }

public function book()
{
    return $this->belongsTo(Book::class);
}

public function imam()
{
    return $this->belongsTo(Imam::class);
}
}
