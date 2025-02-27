import axios from 'axios';

// Configurar Axios para enviar las credenciales y el token automáticamente en cada solicitud
axios.defaults.withCredentials = true;  // Asegura que las cookies se envíen con cada solicitud
axios.defaults.baseURL = 'http://127.0.0.1:8000';  // Cambia a la URL de tu backend

// Agregar el token JWT al encabezado de cada solicitud
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default axios;  // Exportar la instancia configurada de axios
