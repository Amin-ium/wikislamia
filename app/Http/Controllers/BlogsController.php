<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    public function index()
    {
        $posts = Post::with('user', 'category', 'tags')->get();

        return Inertia::render('Blogs/BlogsPage', ['posts' => $posts]);
    }
}
