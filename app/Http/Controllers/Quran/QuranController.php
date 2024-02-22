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
use App\Models\SourahAudio;

use Illuminate\Support\Facades\Input;
use Symfony\Component\Console\Input\Input as InputInput;

class QuranController extends Controller
{
//     public function search()
//    {
//     $verses = Fatiha::all();
//     return Inertia::render('Home', ['verses' => $verses]);
//    }


public function QuranPage()
{
 $surahs = Surah::with('ayahs', 'surahaudio')->get();






 return Inertia::render('Quran/QuranPage', ['surahs'=> $surahs]);
}


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
        // dd($surah);

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
    $results = [];
    $searchTerms = $request->input('searchData');

    if(empty($searchTerms)) {
        $results = [];
    }else{
        // $searchTerms = explode(' ', $searchTerms);



    // $query = Ayah::query()
    //     ->with('surah') // Eager load the surah relationship
    //     ->where(function ($q) use ($searchTerms) {

    //             $q->where('englishContent', 'LIKE', "%{$searchTerms}%" );
    //             $q->where('content',  'LIKE', "%{$searchTerms}%" );
    //             $q->where('frenshContent',  'LIKE', "%{$searchTerms}%"  );
    //             // Add other conditions as needed

    //     });



    //     $results = $query->get();
    $results = Ayah::where('englishContent', 'LIKE', '%'.$searchTerms.'%')
                    ->orWhere('content',  'LIKE', "%{$searchTerms}%" )
                    ->orWhere('frenshContent',  'LIKE', "%{$searchTerms}%" )->with('surah')->get();

    };



    // Add a condition to filter by surah_id if provided
    // if ($surahId) {
    //     $query->whereHas('surah', function ($q) use ($surahId) {
    //         $q->where('id', $surahId);
    //     });
    // }







        $ayahs = Ayah::with('surah')->get();


        $verses = [];

        foreach($ayahs as $ayah) {
            $verses[] = $ayah;
        }





    return Inertia::render('Quran/Results', ['results' => $results, 'verses' => $verses]);
}






}
