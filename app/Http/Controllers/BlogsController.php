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

    // public function show($id)
    // {
    //     // $mypost = Post::find($id);

    //     $mypost = Post::with('user', 'tags')->find($id);


    //     return response()->json($mypost);
    // }

    public function destroy($id)
    {
        $post = Post::find($id);
        // Delete the post
        $post->delete();

        return redirect()->back();
    }
}
