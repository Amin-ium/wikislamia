<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imam_bio extends Model
{
    use HasFactory;
    protected $table = 'imams_bios';

    public function imam()
{
    return $this->belongsTo(Imam::class);
}
}
