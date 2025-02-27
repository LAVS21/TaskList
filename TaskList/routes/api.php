<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TaskController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

// Ruta para realizar el login (POST)
Route::post('/login', [AuthController::class, 'login']);

// Ruta para registrar un nuevo usuario (POST)
Route::post('/register', [AuthController::class, 'register']);


// Ruta para obtener todas las tareas (GET)
Route::get('/tasks', [TaskController::class, 'index']);

// Ruta para obtener una tarea específica (GET)
Route::get('/tasks/{task}', [TaskController::class, 'show']);

// Ruta para crear una nueva tarea (POST)
Route::post('/tasks', [TaskController::class, 'store']);

// Ruta para actualizar una tarea existente (PUT)
Route::put('/tasks/{task}', [TaskController::class, 'update']);

// Ruta para eliminar una tarea (DELETE)
Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

// Ruta para obtener la información meteorológica relacionada con una tarea (GET)
Route::get('/tasks/{task}/weather', [TaskController::class, 'getWeather']);


