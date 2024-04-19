<?php

namespace App\Http\Controllers;

use App\Models\Hadeet;
use App\Models\Imam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HadeethController extends Controller
{
    public function index()
    {
        $hadeets = Hadeet::with(['chapiter', 'imam'])->get();
    $imams = Imam::with( 'books')->get();



    // $articlehadeeth = Articlehadeeth::with('titlehadeeth')->get();


    $hadeetData = [
        'hadeets' => $hadeets,
        'imams' => $imams,
        // 'articlehadeeth' => $articlehadeeth
    ];


        return Inertia::render('Hadeeth/HadeethPage', compact('hadeetData'));
    }
}
