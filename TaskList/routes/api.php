<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TaskController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\WeatherController;

use Illuminate\Http\Request;

Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

// Rutas de autenticación
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

//Agrupar rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Ruta para obtener todas las tareas (GET)
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');

    // Ruta para obtener una tarea específica (GET)
    Route::get('/tasks/{task}', [TaskController::class, 'show']);

    // Ruta para crear una nueva tarea (POST)
    Route::post('/tasks', [TaskController::class, 'store']);

    // Ruta para actualizar una tarea existente (PUT)
    Route::put('/tasks/{task}', [TaskController::class, 'update']);

    // Ruta para eliminar una tarea (DELETE)
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);


});

// Ruta para obtener la información meteorológica relacionada con una tarea (GET)
Route::get('/weather/{taskId}', [WeatherController::class, 'getWeather']);

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);

    return ['token' => $token->plainTextToken];
});
