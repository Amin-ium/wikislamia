<?php

namespace App\Http\Controllers;

use App\Models\Ayah;
use App\Models\Surah;
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
    $verses = File::get(base_path() . '/public/ayahs.json');
    $datas = json_decode($verses, true);


    foreach ($datas as $data) {
        Log::info('Processing data: ' . json_encode($data));

        // Check if 'surah_id' key exists in the current $data
        if (array_key_exists('surah_id', $data)) {
            // Check if Surah exists before inserting Ayah
            $surah = Surah::find($data['surah_id']);


            if ($surah) {
                // $surah->ayahs()->update([
                //     'content' => $data['content']

                // ]);

                // Insert Ayah using the relationship
                $surah->ayahs()->create([
                    'content' => $data['content'],
                    'englishContent' => $data['englishContent'],
                    'frenshContent' => $data['frenshContent'],
                    'verseNumber' => $data['verseNumber'],
                    'audio' => $data['audio'],
                    'revelationType' => $data['revelationType'],
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

public function saveSurahs()
{
    $verses = File::get(base_path() . '/public/surahs.json');
    $datas = json_decode($verses, true);


    foreach ($datas as $data) {
        // Check if 'surah_id' key exists in the current $data


        Surah::create([
                    'arabicName' => $data['arabicName'],
                    'englishName' => $data['englishName'],
                    'englishNameTranslation' => $data['englishNameTranslation'],
                    'frenshNameTranslation' => $data['frenshNameTranslation'],
                    'versesNumber' => $data['versesNumber'],
                    'numberInQuran' => $data['numberInQuran'],
                    'revelationType' => $data['revelationType'],
                ]);

        };

    return 'Verses Created Successfully';
}




}
