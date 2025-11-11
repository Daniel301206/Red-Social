import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usuario from '../assets/usuario.png';
import mensaje from '../assets/mensaje.png';
import clave from "../assets/clave.png"

function Login() {
  const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify ({ email, password }),
      });

      const data = await response.json();
      if(!response.ok){
        throw new Error (data.message||"Error al iniciar sesion");
    }

    localStorage.setItem("authToken", data.data.token);
        navigate ("/login-success");

    } catch (err) {
        setError(err.message);
    }
  };

  
  return (
    <div className="flex items-center bg-gray justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-x-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-center items-center w-auto h-auto  m-15 p-5 ">
            <img src={usuario} className="w-40 h-40"/>
        </div>
        <h1 className="text-4xl font-bold Italic text-center">Iniciar Sesion</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electronico
            </label>
            <div class="relative mt-2 rounded shadow-sm ">
              <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              class="border border-grey-200 rounded py-2 pr-2 pl-9 w-full focus:border-gray-300 focus:autline-none focus:shadow-md"
              />
              <div class="absolute inset-y-0 left-0 flex items-center m-3">
               <img src={mensaje} />
              </div>
            </div>
            
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div class="relative mt-2 rounded shadow-sm ">
              <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"

              class="border border-grey-200 rounded py-2 pr-2 pl-9 w-full focus:border-gray-300 focus:autline-none focus:shadow-md"
              />
              <div class="absolute inset-y-0 left-0 flex items-center m-3">
                <img src={clave}  />
              </div>  
            </div>
            
          </div>
          {error && <p className="text-sm text-center text-red-500"></p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-blue-500 border border-transparent rounded-md shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm font-medium text-gray-500">O</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-sm text-center text-gray-600">
          No tienes una cuenta?
        </p>
        <div class="flex justify-center items-center align-items-center">
          <Link
          to="/register"
          className="font-medium text-blue-600 hover:text-orange-500"
          >
            Registrate aqui
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Login;
