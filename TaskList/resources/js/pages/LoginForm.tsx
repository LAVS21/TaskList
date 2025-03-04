import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await fetch('/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'same-origin',
        //credentials: 'include',
      });

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });


      if (response.ok) {

        const data = await response.json();
        console.log(data);
        // Guardar el token en el almacenamiento local
        localStorage.setItem('auth_token', data.token);

        // Redirigir a la página de tareas
        Inertia.visit('/tasks');
      } else {
        const data = await response.json();
        setError(data.message || 'Credenciales incorrectas');
      }

    } catch (err) {
      // Manejo de excepciones
      setError('Hubo un error al intentar iniciar sesión. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <div>
        <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          placeholder="Ingresa tu correo"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className={`w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Deshabilitar el botón mientras se realiza la solicitud
      >
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default LoginForm;
