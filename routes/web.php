<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\HadeethController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Quran\QuranController;
use App\Http\Controllers\QuranSurahsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'Home'])->name('Pages.Home');

Route::get('item', [QuranSurahsController::class, 'saveAyahs']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'Profile'])->name('Pages.Profile');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [DashboardController::class, 'Dashboard'])->name('Pages.Dashborad');
});

Route::get('/quran/{id}', [QuranController::class, 'show'])->name('Quran.IndividualQuran');
Route::get('/quran/{id}/full-surah', [QuranController::class, 'getFullSurah'])->name('Quran.Fsurah');

// Route::post('logout', LogoutController::class)->name('logout');



Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.blogsPage');
Route::get('/quran', [QuranController::class, 'QuranPage'])->name('quran.quranPage');
Route::get('/hadeeth', [HadeethController::class, 'index'])->name('hadeeth.hadeethPage');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.contactPage');
Route::get('/about', [AboutController::class, 'index'])->name('about.aboutPage');

Route::post('/quran', [QuranController::class, 'index'])->name('quran.searchResults');
Route::get('/quran/surah/{id}', [QuranController::class, 'Surah'])->name('Quran.Surah');

Route::group(['middleware' => ['auth', 'is_admin']], function () {
    Route::get('/admin-dashboard', [AdminController::class, 'index'])->name('Pages.AdminDashboard');

});





// require __DIR__.'/auth.php';
// require __DIR__.'/admin.php';
