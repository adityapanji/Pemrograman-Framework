<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', [App\Http\Controllers\AuthController::class, 'showFormLogin'])->name('login');
Route::get('login', [App\Http\Controllers\AuthController::class, 'showFormLogin'])->name('login');
Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
Route::get('register', [App\Http\Controllers\AuthController::class, 'showFormRegister'])->name('register');
Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
 
Route::group(['middleware' => 'auth'], function () {
 
Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('mahasiswa', [App\Http\Controllers\HomeController::class, 'mahasiswa'])->name('mahasiswa');
Route::get('logout', [App\Http\Controllers\AuthController::class, 'logout'])->name('logout');

Route::view('/articles', 'app');
Route::view('/article/edit/{id}', 'app');
Route::view('/article/{id}', 'app');
Route::view('/{path}', 'app');

// Route::view('/articles', 'mhs');
// Route::view('/article/edit/{id}', 'mhs');
// Route::view('/article/{id}', 'mhs');
// Route::view('/{path}', 'mhs');

});




