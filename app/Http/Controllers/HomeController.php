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
use App\Models\VersesTest;
use GuzzleHttp\Client as GuzzleHttpClient;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Stevebauman\Location\Facades\Location;

class HomeController extends Controller
{
    public function Home(Request $request)
    {

        $ldate = date('Y-m-d');
        // $ldate = '07-02-2024';

        // $lat = Auth::user()->latitude;
        // $long = Auth::user()->longitude;


        // $location = Location::get($ip);
        // $position = Location::get('105.191.147.7');



    // Access specific information


    // Use the latitude and longitude as needed
    // dd($latitude, $longitude);

        // dd($locationData);



        // dd($currentUserInfo);


        $url = 'https://api.aladhan.com/v1/timingsByCity/'.$ldate.'?city=Casablanca&country=Morocco&method=8';


        $response = Http::retry(3, 100)->get($url);


        $data = json_encode($response);
        $ch=curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        $curl_response = curl_exec($ch);

		$resultPrayer = json_decode($curl_response,true);

        $versesTest = VersesTest::get();

        $fatihah = $versesTest[0]->data[0];




        $surahs = Surah::get();
        $ayahs = Ayah::get();
        $user = Auth::user();
        $posts = Post::with('user', 'category', 'tags')->get();
        // $accordion = Accordion::get();
        $quiz = Quiz::get();

        $verses = [];

        foreach($ayahs as $ayah) {
            $verses[] = $ayah;
        }






        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $posts,

            // 'accordion' => $accordion,
            // Pass the retrieved Surahs to the view
            'verses' => $verses,
            'quiz' => $quiz,
            'resultPrayer' => $resultPrayer,
            'fatihah' => $fatihah
        ]);
    }

    // public function getIp(){
    //     foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
    //         if (array_key_exists($key, $_SERVER) === true){
    //             foreach (explode(',', $_SERVER[$key]) as $ip){
    //                 $ip = trim($ip); // just to be safe
    //                 if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
    //                     return $ip;
    //                 }
    //             }
    //         }
    //     }
    //     return request()->ip(); // it will return server ip when no client ip found

    // }



}
