<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('platforms', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return IGDB::searchPlatforms('');
});

Route::get('platforms/{name}', function($name) {
        return IGDB::searchPlatforms($name);
});

Route::get('games/{name}', function($name) {
        return IGDB::getGame(28540, ['name', 'release_dates', 'esrb', 'genres'], $limit = 10, $offset = 0, $order = 'release_dates.date:desc');
});
