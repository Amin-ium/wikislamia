<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function Profile(Request $request): Response
    {
        return Inertia::render('Profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {



        $request->user()->fill($request->validated());




        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }


            if (!$request->user()) {
                return back()->with('error', 'User not found');
            }



            // Validate the request data



        $request->user()->save();

        return Redirect::route('Pages.Profile');
    }

    public function updateImg(Request $request)
    {

        // dd(Storage::disk('public'));

        try {
            $id = Auth::id();
             $user = User::with('image_user')->find($id);
            if (!$user) {
                return back()->with('error', 'User not found');
            }



            // Validate the request data
            $request->validate([
                'imagePath' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            if ($request->hasFile('imagePath') && $request->file('imagePath')->isValid()) {
                $file = $request->file('imagePath');
                $fileName = time()  . '_' . $file->getClientOriginalName();
                $imagePath =  $fileName;

                // Store the file in the public disk
                Storage::disk('public')->put($imagePath, file_get_contents($file));
                if($user) {
                    $user->imagePath = $user->imagePath;
                    $user->update(['imagePath' => $imagePath]);

                    $user->save();

                }
            }


        Storage::delete($user->imagePath);



           return Redirect::route('Pages.Profile')->with('success', 'Image updated successfully');



        } catch (\Exception $e) {
            dd($e);
            // Log or print the error message
            Log::error($e->getMessage());
            dd($e);
            return back()->with('error', 'Failed to update image');
        }
    }


    /**
     * Delete the user's account.
     */
    // public function destroy(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'password' => ['required', 'current_password'],
    //     ]);

    //     $user = $request->user();

    //     Auth::logout();

    //     $user->delete();

    //     $request->session()->invalidate();
    //     $request->session()->regenerateToken();

    //     return Redirect::to('/');
    // }
}
