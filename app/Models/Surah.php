<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surah extends Model
{
    use HasFactory;

    protected $fillable = ['arabicName', 'englishName', 'englishNameTranslation', 'frenshNameTranslation',  'versesNumber', 'numberInQuran', 'revelationType'];

    public function ayahs()
{
    return $this->hasMany(Ayah::class);
}

public function surahaudio() {
    return $this->hasOne(SurahAudio::class);
}




}
