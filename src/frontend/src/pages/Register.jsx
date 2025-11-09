import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import mensaje from "../assets/mensaje.png";
import clave from "../assets/clave.png";
import user from "../assets/user.png";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Para redirigir al usuario después del registro
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      console.log('Usuario registrado:', data);
      navigate('/login-success');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <div className='flex justify-center items-center w-auto h-auto  m-15 p-5 '>
          <img src={logo} className='w-40 h-40'/>
        </div>
        <h1 className="text-2xl font-bold text-center">Registrarse</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <div class="relative mt-2 rounded shadow-sm">
              <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              class="border border-grey-200 rounded py-2 pr-2 pl-9 w-full focus:border-gray-300 focus:autline-none focus:shadow-md"
              />
              <div class="absolute inset-y-0 left-0 flex items-center m-3">
                <img src={user} />
              </div>
            </div>
            
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <div class="relative mt-2 rounded shadow-sm">
                <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                class="border border-grey-200 rounded py-2 pr-2 pl-9 w-full focus:border-gray-300 focus:autline-none focus:shadow-md"
                />
                <div class="absolute inset-y-0 left-0 flex items-center m-3">
                  <img src={mensaje}  />
                </div>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div class="relative mt-2 rounded shadow-sm">
              <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              class="border border-grey-200 rounded py-2 pr-2 pl-9 w-full focus:border-gray-300 focus:autline-none focus:shadow-md"
              />
              <div class="absolute inset-y-0 left-0 flex items-center m-3">
                <img src={clave} />
              </div>
            </div>
    
          </div>

          {/* Mensaje de error*/}
          {error && <p className="text-sm text-center text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;