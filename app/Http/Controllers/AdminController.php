<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::with('image_user', 'posts')->get();
        $id = Auth::id();
        $user = User::find($id)->with('image_user', 'posts')->find($id);
        $posts = Post::with( 'user')->get();

        // $postsUser = $users->posts()->with(['tags'])->get();



        return Inertia::render('AdminDashboard',  ['users' => $users, 'user' => $user, 'posts' => $posts]);
    }
}
