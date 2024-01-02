<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HadeethController extends Controller
{
    public function index()
    {
        return Inertia::render('Hadeeth/HadeethPage');
    }
}
