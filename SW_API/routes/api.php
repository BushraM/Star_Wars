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


Route::get('displaypeople', 'PeopleController@getAllPeople');
Route::get('searchperson/{search_person}', 'PeopleController@getPerson'); 
Route::get('displayplanets', 'PlanetController@getAllPlanets');
Route::get('displaystarships', 'StarshipController@getAllStarships');

