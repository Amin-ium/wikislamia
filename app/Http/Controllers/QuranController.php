<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QuranController extends Controller
{
    public function index()
    {
        return Inertia::render('Quran/QuranPage');
    }
}
