<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    // public function index($id)
    // {

    //     // $id = Auth::id();
    //     // $user = User::find($id)->with('image_user', 'posts')->find($id);




    //     // $posts = Post::all();
    //     // $postsUser = $user->posts()->with('tags')->get();

    //     $mypost = Post::with('user', 'tags')->find($id);









    //     return Inertia::render('Dashboard',  [ 'mypost' => $mypost ]);
    // }

    public function Dashboard()
    {

        $id = Auth::id();
        $user = User::find($id)->with('image_user', 'posts')->find($id);
        $posts = Post::all();
        $tags = Tag::all();
        $postsUser = $user->posts()->with('tags', 'user')->get();




        return Inertia::render('Dashboard',  ['user' => $user, 'postsUser' => $postsUser, 'posts' => $posts, 'tags' => $tags   ]);
    }

    public function show($id)
{
    $singlePost = Post::with('user', 'tags')->findOrFail($id);
    // return response()->json(['singlePost' => $singlePost]);

    return Inertia::render('MyPost', ['singlePost' => $singlePost]);
}
}
