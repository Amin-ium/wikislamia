<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function __invoke(Request $request) {

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if (Auth::check()) {
            User::where('id', Auth::user()->id)->update(['last_seen' => null]);
            Auth::logout();
        }



        // flash()->addSuccess('Berhasil logout');

        return to_route('login.index');
    }
}

