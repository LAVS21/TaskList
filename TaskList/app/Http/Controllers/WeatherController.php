<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather($taskId)
    {
        $task = Task::findOrFail($taskId);
        $location = $task->location;
        $apiKey = config('weather.api_key');

        if (empty($apiKey)) {
            return response()->json(['message' => 'API Key no configurada'], 500);
        }

        try {
            $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
                'q' => $location,
                'appid' => $apiKey,
                'units' => 'metric',
                'lang' => 'es',
            ]);

            if ($response->successful()) {
                return response()->json(['weather' => $response->json()]);
            }

            return response()->json([
                'message' => 'No se pudo obtener el clima',
                'error' => $response->status(),
                'response' => $response->body(),
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al comunicarse con la API de clima',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
