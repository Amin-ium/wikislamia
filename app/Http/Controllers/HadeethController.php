<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Hadeet;
use App\Models\Imam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HadeethController extends Controller
{
    public function index()
    {
        $hadeets = Hadeet::with(['book', 'imam'])->get();
    $imams = Imam::with( ['books', 'imam_bio'])->get();



    // $articlehadeeth = Articlehadeeth::with('titlehadeeth')->get();


    $hadeetData = [
        'hadeets' => $hadeets,
        'imams' => $imams,
        // 'articlehadeeth' => $articlehadeeth
    ];


        return Inertia::render('Hadeeth/HadeethPage', compact('hadeetData'));
    }

    public function show($id)
    {
        $book = Book::with(['imam', 'hadeets'])->find($id);
        $imam_id = $book->imam()->first()->id;
        // $books = Book::find($imam_id);
        $books = Book::where('imam_id', $imam_id)->get();


        // $nextSurah = Surah::with('ayahs', 'surahaudio')->find($id + 1);
        // $previousSurah = Surah::with('ayahs', 'surahaudio')->find($id - 1);


        // $next = Surah::where('id', '>', $surah->id)->min('id');
        // $previous = Surah::where('id', '<', $surah->id)->max('id');

        // $nextSurah = Surah::with('ayahs', 'surahaudio')->find($next);
        // $previousSurah = Surah::with('ayahs', 'surahaudio')->find($previous);




        return Inertia::render('Hadeeth/Book', ['book' => $book, 'books' => $books]);
    }
}
