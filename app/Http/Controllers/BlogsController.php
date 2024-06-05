<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
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


        return Inertia::render('MyPost', ['mypost' => $mypost]);
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
