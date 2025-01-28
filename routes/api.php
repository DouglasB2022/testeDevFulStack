<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller('/user')->group(function (){
Route::get('/user', [UserController::class,'index']);
Route::put('/update/{user}', [UserController::class,'update']);
Route::delete('/destroy/{user}', [UserController::class,'destroy']);
});

Route::controller('/auth')->group(function (){
Route::post('/login',[AuthController::class, 'login']);
Route::post('/logout/{user}',[AuthController::class, 'logout']);
Route::get('/recover', [AuthController::class, 'recoverPassword']);
Route::post('/password/', [AuthController::class, 'resetPassword']);
});

Route::post('/register',[RegisterController::class, 'register']);



