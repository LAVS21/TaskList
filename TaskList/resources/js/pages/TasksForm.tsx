import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Task {
    id: number;
    title: string;
    description: string;
    due_date: string;
    completed: boolean;
    location: string;
    user?: { name: string }; // Puede ser opcional si no siempre viene en la API
}

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    setError('No se encontró un token de autenticación');
                    return;
                }

                const response = await fetch('/api/tasks', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Error al obtener las tareas');
                }

                const data = await response.json();
                setTasks(data.tasks);
            } catch (err) {
                setError('No se pudieron cargar las tareas');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <p className="text-center text-gray-600">Cargando tareas...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
            {tasks.length === 0 ? (
                <p className="text-gray-600">No hay tareas disponibles.</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map(task => (
                        <li key={task.id} className="p-4 border rounded-lg shadow-md bg-white">
                            <h2 className="text-lg font-semibold">{task.title}</h2>
                            <p className="text-gray-600">{task.description}</p>
                            <p className="text-sm text-gray-500">📍 {task.location}</p>
                            <p className="text-sm text-gray-500">🗓 Fecha límite: {task.due_date}</p>
                            <p className={`text-sm font-bold ${task.completed ? 'text-green-600' : 'text-red-600'}`}>
                                {task.completed ? '✅ Completada' : '❌ Pendiente'}
                            </p>
                            {task.user && <p className="text-sm text-gray-700">👤 Asignado a: {task.user.name}</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tasks;

