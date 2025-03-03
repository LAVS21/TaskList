<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\WeatherController;

Route::get('/', function () {
    return Inertia::render('Welcome');

})->name('home');


// Rutas de tareas individuales protegidas
Route::middleware(['auth'])->group(function () {

    //Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');

    Route::get('/tasks', function () {
        return Inertia::render('Tasks');
    })->name('tasks.index');

    Route::get('/tasks/{task}', [TaskController::class, 'show'])->name('tasks.show');
    Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');

    // Dashboard del usuario autenticado
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Ruta para obtener el clima de la tarea
Route::get('/tasks/{task}/weather', [WeatherController::class, 'getWeather'])->name('tasks.weather');

// Rutas de autenticación y configuración
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// Redirección a bienvenida si se accede a `/welcome`
Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});
