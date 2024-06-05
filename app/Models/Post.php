<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    protected $fillable = ['user_id',  'title',  'imagePath', 'description', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }


    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }


    // public function getRouteKeyName() {
    //     return 'slug';
    // }


}

