<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surahaudio extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'surah_id', 'audio', 'created_at',  'updated_at'];


    public function surah() {
        return $this->belongsTo(Surah::class, 'surah_id');
    }
}
