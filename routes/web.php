<?php

use Illuminate\Http\Request;
use Image;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Upload image route
Route::post('/image', function(Request $request) {

    $user = auth()->user();

    // Save image to folder
    $imageObj = Image::make($request->base64);
    $name = time().'.'.substr($imageObj->mime(), 6);
    $base64 = str_replace('data:'.$imageObj->mime().';base64,', '', $request->base64);
    $imageObj->save(public_path('img/').$name);

    // Delete previous profile image
    if ($user->image != 'default.png') {
      $path = public_path('img/') . $user->image;
      if (file_exists($path)) {
        unlink($path);
      }
    }

    // Update the user
    $user->image = $name;
    $user->save();

    return response(['success' => true]);

})->middleware('auth');
