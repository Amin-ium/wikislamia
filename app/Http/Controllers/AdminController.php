<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::get();
        $id = Auth::id();
        $user = User::find($id)->with('image_user')->find($id);
        $posts = Post::all();
        $categories = Category::all();

        return Inertia::render('AdminDashboard',  ['users' => $users, 'user' => $user, 'posts' => $posts, 'categories' => $categories]);
    }
}
