<?php

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

/* Route::get('/', function () {
    return view('auth.login');
})->middleware('guest'); */

Route::group(['middleware' => ['guest']], function () {
    Route::get('/', function () {
        return view('auth.login');
    });
    Route::get('/home', function () {
        return 'home';
    })->middleware('auth');
});

Auth::routes();

Route::get('/dashboard', function () {
    return view('index');
})->middleware('auth');

Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {
    Route::get('invoices', function () {
        return view('index');
    });
    Route::get('products', function () {
        return view('index');
    });
    // Route::get('products', 'ProductController@index');
    Route::get('clients', function () {
        return view('index');
    });
    Route::get('account', function () {
        return view('index');
    });
    Route::get('create-product', function () {
        return view('index');
    });
    Route::get('edit-product', function () {
        return view('index');
    });
    // Route::post('add-product', 'ProductController@store');
});
