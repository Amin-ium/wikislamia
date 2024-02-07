<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Dashboard()
    {

        $posts = Post::all();







        return Inertia::render('Dashboard',  compact('posts'));
    }
}
