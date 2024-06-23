<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogsController extends Controller
{
    public function index()
    {
        $posts = Post::with('user',  'tags')->get();

        return Inertia::render('Blogs/BlogsPage', ['posts' => $posts]);
    }

    public function show($id)
    {
        // $mypost = Post::find($id);

        $mypost = Post::with('user', 'tags')->find($id);
        $posts = Post::with('user', 'tags')->orderBy('id', 'desc')->take(8)->get();



        return Inertia::render('Post', ['mypost' => $mypost, 'posts' => $posts]);
    }

    public function getUser($id)
    {

        try {
            $user = User::with('posts')->find($id);
            return Inertia::render('UserPage', ['user' => $user ]);
        } catch (\Exception $e) {
            // Handle the exception here
            // You can log the error or return an error response
            Log::error($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function PostsTag($id)
    {
        // $user_id = Auth::id();
        // $user = User::find($user_id)->with('image_user')->find($user_id);
        $tag = Tag::with('posts')->find($id);
        $user = Auth::user();





    try {

        if (!$tag) {
            throw new \Exception("Tag not found"); // Throw an exception if the category is not found
        }

        $posts = $tag->posts;

        $posts->load('user',  'tags');


        $postsTag = [
            'tag' => $tag,
            'posts' => $posts,

        ];


        return Inertia::render('PostsTag', ['postsTag' => $postsTag, 'user' => $user ]);
    } catch (\Exception $e) {
        // Handle the exception here
        // You can log the error or return an error response
        Log::error($e->getMessage());
        return response()->json(['error' => $e->getMessage()], 500);
    }
}



    public function store(Request $request)
    {
        try {
            // Validate the request data
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|min:3|max:3000',
                'tags' => 'required|array', // Validate tags as an array
                'tags.*' => 'exists:tags,id', // Ensure each tag ID exists in the tags table
                'user_id' => 'required|exists:users,id',
                'imagePath' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            if ($request->hasFile('imagePath')) {
                // Store the image in the public storage
                $imageName = $request->file('imagePath')->getClientOriginalName();
                $imagePath = $request->file('imagePath')->storeAs('images', $imageName, 'public');
                $validatedData['imagePath'] = $imagePath;
            }

            // Create a new post and store the data
            $post = Post::create([
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'user_id' => $validatedData['user_id'],
                'slug' => Str::slug($validatedData['title']),
                'imagePath' => $validatedData['imagePath'],
            ]);

            // Attach tags to the post
            $post->tags()->sync($validatedData['tags']);

            // Handle any additional logic or redirection
            return Inertia::render('Dashboard')->with('success', 'Post created successfully');

        } catch (\Exception $e) {
            // Log the error message
            Log::error($e->getMessage());
            return Redirect::back()->withErrors(['error' => $e->getMessage()])->withInput();
        }
    }




    public function destroy($id)
    {
        $post = Post::find($id);
        // Delete the post
        $post->delete();

        return redirect()->back();
    }
}
