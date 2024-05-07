<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Dashboard()
    {

        $id = Auth::id();
        $user = User::find($id)->with('image_user')->find($id);
        $postsUser = $user->posts()->with(['tags'])->get();

        $posts = Post::all();







        return Inertia::render('Dashboard',  ['user' => $user, 'postsUser' => $postsUser, 'posts' => $posts ]);
    }
}
