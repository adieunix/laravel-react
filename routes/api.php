<?php

use App\Http\Controllers\Api\CheckController;
use Illuminate\Support\Facades\Route;

Route::get('check', CheckController::class)->name('api.check');
