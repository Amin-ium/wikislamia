<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class PrayerTimesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot()
    {
        // Retrieve prayer times data and share it globally
        // Inertia::share('resultPrayer', function () {
        //     $ldate = date('Y-m-d');
        //     $url = 'https://api.aladhan.com/v1/timingsByCity/'.$ldate.'?city=Casablanca&country=Morocco&method=8';

        //     $response = Http::retry(3, 100)->get($url);
        //     $resultPrayer = json_decode($response->body(), true);

        //     return $resultPrayer;
        // });
    }
}
