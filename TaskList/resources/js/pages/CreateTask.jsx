import { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [location, setLocation] = useState('');

  const createTask = async () => {
    try {
      await axios.post('/tasks', { title, description, due_date: dueDate, location });
      window.location.reload();  // Recargar la página después de agregar la tarea
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Agregar Nueva Tarea</h2>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded mt-2"
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded mt-2"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded mt-2"
      />
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded mt-2"
      />
      <button
        onClick={createTask}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Agregar
      </button>
    </div>
  );
};

export default CreateTask;
