<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Http;

class TaskController extends Controller
{
    public function index()
    {
        return Task::paginate(5);
    }

    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'location' => 'required|string',
        ]);

        try {
            $task = Task::create($request->only(['title', 'description', 'due_date', 'location']));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($task, 201);
    }


    public function show(Task $task)
    {
        return response()->json($task);
    }

    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'due_date' => 'sometimes|date',
            'completed' => 'sometimes|boolean',
        ]);

        $task->update($request->only(['title', 'description', 'due_date', 'completed']));

        return response()->json($task);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(['message' => 'Tarea eliminada'], 200);
    }

    public function getWeather($id)
    {
        $task = Task::findOrFail($id);

        $location = $task->location;

        $apiKey = env('OPENWEATHER_API_KEY');
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $location,
            'appid' => $apiKey,
            'units' => 'metric',
            'lang' => 'es',
        ]);


        if ($response->successful()) {
            return response()->json([
                'weather' => $response->json(),
            ]);
        }

        return response()->json([
            'message' => 'No se pudo obtener el clima',
            'error' => $response->status(),
            'response' => $response->body(),
        ], 400);
    }

}
