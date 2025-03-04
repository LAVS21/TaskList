<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;

// Página de inicio
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');




// Rutas protegidas con auth:sanctum (requieren autenticación con cookies)
Route::middleware(['auth:sanctum'])->group(function () {
    // Página de lista de tareas
    Route::get('/tasks', function () {
        return Inertia::render('TasksForm');
    })->name('tasks.index');

    // Rutas de CRUD para tareas
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('/tasks/{task}', [TaskController::class, 'show'])->name('tasks.show');
    Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');

    // Dashboard del usuario autenticado
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Ruta para obtener el clima de una tarea
Route::get('/tasks/{task}/weather', [App\Http\Controllers\WeatherController::class, 'getWeather'])->name('tasks.weather');

// Rutas adicionales (configuración, autenticación)
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// Página de bienvenida
Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});
