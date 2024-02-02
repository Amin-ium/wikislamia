<?php

namespace App\Http\Controllers\Quran;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Ayah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Fatiha;
use App\Models\Surah;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Facades\Input;
use Symfony\Component\Console\Input\Input as InputInput;

class QuranController extends Controller
{
//     public function search()
//    {
//     $verses = Fatiha::all();
//     return Inertia::render('Home', ['verses' => $verses]);
//    }

   public function getFullSurah($id)
   {
    $surah = Surah::with('ayahs', 'surahaudio')->find($id);



// dd($surah);

    return Inertia::render('Quran/Fsurah', ['surah' => $surah]);
   }

   public function SurahDetail($id)
    {
        $surah = Surah::find($id);

        return Inertia::render('Quran/SurahDetail', ['surah' => $surah]);
    }

    public function show($id)
    {
        $ayah = Ayah::with('surah')->find($id);
        $surahs = Surah::get();
        // dd($surahs);
        return Inertia::render('Quran/IndividualQuran', ['ayah' => $ayah, 'surahs' => $surahs]);
    }

    public function Surah($id)
    {
        $surah = Surah::with('ayahs', 'surahaudio')->find($id);

        return Inertia::render('Quran/Surah', ['surah' => $surah]);
    }

    public function quranList()
    {
        $ayahs = Ayah::with('surah')->get();
        $surahs = $ayahs->map(function ($ayah) {
            return $ayah->surah;
        })->unique();



        $surahs = Surah::get();
        $ayahs = Ayah::get();


        $verses = [];

        foreach($ayahs as $ayah) {
            $verses[] = $ayah;
        }


        $article = Article::with('title')->get();
        // dd($article);




        $quranData = [
            'ayahs'  => $ayahs,
            'surahs'   => $surahs,
            'verses'   => $verses,
            'article'   => $article,
        ];


        return Inertia::render('Quran/Quran', ['quranData' => $quranData]);
    }

    public function index(Request $request)
{
    $searchTerms = $request->input('searchData');
    $searchTerms = explode(' ', $searchTerms);

    $surahId = $request->input('surah_id'); // Adjust this line based on how you pass the surah_id

    $query = Ayah::query()
        ->with('surah') // Eager load the surah relationship
        ->where(function ($q) use ($searchTerms) {
            foreach ($searchTerms as $searchTerm) {
                $q->where('englishContent', 'like', '%' . $searchTerm . '%');
                // Add other conditions as needed
            }
        });

    // Add a condition to filter by surah_id if provided
    if ($surahId) {
        $query->whereHas('surah', function ($q) use ($surahId) {
            $q->where('id', $surahId);
        });
    }

    $results = $query->get();
        $ayahs = Ayah::with('surah')->get();


        $verses = [];

        foreach($ayahs as $ayah) {
            $verses[] = $ayah;
        }

    return Inertia::render('Quran/Results', ['results' => $results, 'verses' => $verses]);
}




}
