<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run()
    {
        // Crear algunas tareas de ejemplo
        Task::create([
            'user_id' => 1,
            'title' => 'Tarea 1',
            'description' => 'Descripción de la tarea 1',
            "due_date" => "2025-03-01",
            "location" => "Madrid"
        ]);

        Task::create([
            'user_id' => 1,
            'title' => 'Tarea 2',
            'description' => 'Descripción de la tarea 2',
            "due_date" => "2025-03-01",
            "location" => "Madrid"
        ]);

        Task::create([
            'user_id' => 1,
            'title' => 'Tarea 3',
            'description' => 'Descripción de la tarea 3',
            "due_date" => "2025-03-01",
            "location" => "Madrid"
        ]);
    }
}
