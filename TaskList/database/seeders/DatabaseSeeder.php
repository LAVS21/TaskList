<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
{
    $this->call([
        UserSeeder::class, // Asegúrate de que este sea el seeder de los usuarios
        TaskSeeder::class, // Llamamos al TaskSeeder
    ]);
}
}
