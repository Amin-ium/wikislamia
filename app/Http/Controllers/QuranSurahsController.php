<?php

namespace App\Http\Controllers;

use App\Models\Ayah;
use App\Models\Book;
use App\Models\Imam;
use App\Models\Surah;
use App\Models\Surahaudio;
use App\Models\VersesTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class QuranSurahsController extends Controller
{
    // public function index()
    // {
    //     return Inertia::render('Quran/QuranPage');
    // }

    public function saveAyahs()
{
    $verses = File::get(base_path() . '/public/hadiths.json');
    $datas = json_decode($verses, true);


    foreach ($datas as $data) {
        Log::info('Processing data: ' . json_encode($data));
        // Check if 'surah_id' key exists in the current $data
        if (array_key_exists('imam_id', $data) && array_key_exists('book_id', $data)) {
            // Check if Surah exists before inserting Ayah
            $surah = Imam::find($data['imam_id']);
            $surahh = Book::find($data['book_id']);
            $counter = 0;
            if ($surah && $surahh) {
                // Insert Ayah using the relationship
                $surah->hadeeths()->create([

                    'id' => $data['id'],
                    'imam_id' => $data['imam_id'],
                    'book_id' => $data['book_id'],
                    'number_in_book' => $data['number_in_book'],
                    'ar_hadith' => $data['ar_hadith'],
                    'fr_hadith' => $data['fr_hadith'],
                    'eng_hadith' => $data['eng_hadith'],
                    'grade' => 'Saheeh',
                    'count' => $counter++
                ]);



            } else {
                // Handle case where Surah doesn't exist
                continue; // Skip to the next iteration
            }
        } else {
            // Handle case where 'surah_id' key is missing in $data
            continue; // Skip to the next iteration
        }
    }

    return 'Ayahs Updated Successfully';
}

public function saveAudio() {
    $audiosJson = File::get(base_path() . '/public/storage/ayahs.json');
    $datas = json_decode($audiosJson, true);

    foreach ($datas as $data) {
        Log::info('Processing data: ' . json_encode($data));
        // Check if 'surah_id' key exists in the current $data
        if (array_key_exists('surah_id', $data) && array_key_exists('audio', $data)) {
            // Check if Surah exists before inserting Ayah
            $surah = Surah::find($data['surah_id']);
            $s_audio = Surahaudio::get();
            // $surah = Surah::find($data['surah_id']);
            // dd($s_audio);
            if ($surah) {
                // Insert Ayah using the relationship
                $surah->surahaudio()->create([

                    'id' => $data['id'],
                    'surah_id' => $data['surah_id'],
                    'audio' => $data['audio'],
                    'created_at' => $data['created_at'],
                    'updated_at' => $data['updated_at']
                ]);





            } else {
                // Handle case where Surah doesn't exist
                dd($s_audio) ;// Skip to the next iteration
            }
        } else {
            // Handle case where 'surah_id' key is missing in $data
            continue; // Skip to the next iteration
        }
    }






}

public function saveSurahs()
{
    $verses = File::get(base_path() . '/public/hadiths.json');
    $datas = json_decode($verses, true);


    foreach ($datas as $data) {
        // Check if 'surah_id' key exists in the current $data


        Surah::create([
                    'id' => $data['id'],
                    'arabicName' => $data['arabicName'],
                    'englishName' => $data['englishName'],
                    'englishNameTranslation' => $data['englishNameTranslation'],
                    'frenshNameTranslation' => $data['frenshNameTranslation'],
                    'versesNumber' => $data['versesNumber'],
                    'numberInQuran' => $data['numberInQuran'],
                    'revelationType' => $data['revelationType'],
        ]);

    };

    return 'Surahs Created Successfully';
}




}
