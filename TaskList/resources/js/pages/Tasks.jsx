// resources/js/Pages/Tasks.jsx
import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';

// Componente para listar las tareas
const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar las tareas cuando el componente se monta
  useEffect(() => {
    // Usar Inertia para hacer la llamada a la API
    Inertia.get('/api/tasks', {}, {
      onSuccess: (response) => {
        setTasks(response.props.tasks);
      },
      onError: (error) => {
        console.error('Error al cargar las tareas', error);
      }
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lista de Tareas</h1>

      {/* Mostrar las tareas */}
      <TaskList tasks={tasks} />

      {/* Enlace para ir al Dashboard */}
      <div className="mt-4">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Ir al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Tasks;

