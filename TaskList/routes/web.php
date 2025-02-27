<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\TaskController;
use Inertia\Middleware;

// Mostrar todas las tareas
Route::get('/', [TaskController::class, 'index']);

// Crear una nueva tarea
Route::post('/', [TaskController::class, 'store']);

// Ver una tarea específica
Route::get('/{task}', [TaskController::class, 'show']);

// Actualizar una tarea
Route::put('/{task}', [TaskController::class, 'update']);

// Eliminar una tarea
Route::delete('/{task}', [TaskController::class, 'destroy']);

// Obtener el clima para una tarea específica
Route::get('/{task}/weather', [TaskController::class, 'getWeather']);

// Ruta principal para la página de bienvenida (home)
Route::get('/', function () {
    // Retorna la vista de bienvenida (Inertia)
    return Inertia::render('Welcome');
})->name('home');


// Ruta para el dashboard del usuario autenticado
Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Rutas adicionales de configuración y autenticación
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


// Aquí va la ruta para las páginas adicionales protegidas por Inertia
Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});

// Ruta para obtener la cookie CSRF necesaria para Sanctum
Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['message' => 'CSRF cookie set']);
});

// routes/web.php
Route::middleware(['auth'])->group(function () {
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks');
});


