<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hadeet extends Model
{
    use HasFactory;
    protected $table = 'hadeeths';
    protected $fillable = ['id', 'imam_id', 'book_id', 'number_in_book', 'ar_hadith',  'fr_hadith', 'eng_hadith', 'grade', 'count'];


//     public function chapiter()
// {
//     return $this->belongsTo(Chapiter::class);
// }

public function books()
{
    return $this->belongsTo(Book::class, 'book_id');
}

public function imams()
{
    return $this->belongsTo(Imam::class, 'imam_id');
}
}
