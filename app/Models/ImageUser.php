<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageUser extends Model
{
    use HasFactory;
    protected $table = 'image_user';

    protected $fillable = ['imagePath']; // Add other fillable fields if needed

    public function user()
{
    return $this->belongsTo(User::class, 'user_id');
}
}

