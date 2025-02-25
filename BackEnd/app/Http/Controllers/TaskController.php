<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

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
        ]);

        $task = Task::create($request->only(['title', 'description', 'due_date']));

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
}
