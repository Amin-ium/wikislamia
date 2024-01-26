<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use App\Models\Accordion;
use App\Models\Ayah;
use App\Models\Client;
use App\Models\Fatiha;
use App\Models\Quiz;
use App\Models\Surah;
use GuzzleHttp\Client as GuzzleHttpClient;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function Home()
    {
        // $surahs = Surah::get();
        // $ayahs = Ayah::get();
        // $user = Auth::user();
        $posts = Post::with('user', 'category', 'tags')->get();
        // $accordion = Accordion::get();
        $quiz = Quiz::get();

        // $verses = [];

        // foreach($ayahs as $ayah) {
        //     $verses[] = $ayah;
        // }






        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $posts,

            // 'accordion' => $accordion,
            // Pass the retrieved Surahs to the view
            // 'verses' => $verses,
            'quiz' => $quiz
        ]);
    }

}
