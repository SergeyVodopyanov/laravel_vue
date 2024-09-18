<?php

use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Person\StoreController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'App\Http\Controllers\Person', 'prefix' => 'people'], function () {
    Route::post('/', 'StoreController@__invoke');
    Route::get('/', 'IndexController@__invoke');
    Route::patch('/{person}', 'UpdateController@__invoke');
    Route::delete('/{person}', 'DeleteController@__invoke');


});

