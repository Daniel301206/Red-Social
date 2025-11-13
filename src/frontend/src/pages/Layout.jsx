import { useNavigate } from "react-router-dom";
import lupa from "../assets/lupa.png";
import logoEmpresa from "../assets/logoEmpresa.png";
import chat from "../assets/chat.png";
import Home from "../assets/Home.png";
import Video from "../assets/Video.png";
import Solicitudes from "../assets/Solicitudes.png";
import Notificaciones from "../assets/Notificaciones.png";
import Grupos from "../assets/Grupos.png";

const Layout = ({ children }) => {
  const navigate = useNavigate(); // 👈 para cambiar de ventana

  return (
    <div className="min-h-screen bg-gray-0 text-gray-200 flex flex-col">
      <header className="w-full sticky top-0 bg-gray-900 text-gray-200 shadow-lg z-20">
        {/* FILA SUPERIOR: Logo, Título y Acciones */}
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <img
              src={logoEmpresa}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-yellow-500">Chatter</h1>
          </div>

          {/* Buscador */}
          <div className="md:flex items-center bg-gray-800 rounded-full px-3 py-1">
            <button className="hidden md:flex  text-black px-3 py-2 rounded">
            <img src={lupa} alt="Buscar" className="w-6 h-6 mr-2" />
            </button>
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 text-gray-100 placeholder-gray-00
              outline-none"
            />
          </div>

          {/* Imagen/Avatar derecho */}

          <button
            onClick={() => navigate("/chats")}
            className="flex flex-col items-center hover:text-yellow-500 transition">
            <img src={chat} alt="Usuario"className="w-10 h-10 rounded-full object-cover"/>
          </button>
        </div>

        {/* FILA INFERIOR: Barra de navegación con íconos */}
        <nav className="flex justify-center items-center gap-8 bg-gray-800 border-t border-gray-700 py-2">
          <button
            onClick={() => navigate("/ventanaInicio")}
            className="flex flex-col items-center hover:text-yellow-500 transition"
          >
            <img src={Home} alt="Inicio" className="w-6 h-6 mb-1" />
            <span className="text-xs">Inicio</span>
          </button>

          <button
            onClick={() => navigate("/video")}
            className="flex flex-col items-center hover:text-yellow-500 transition"
          >
            <img src={Video} alt="Video" className="w-6 h-6 mb-1" />
            <span className="text-xs">Video</span>
          </button>

          <button
            onClick={() => navigate("/solicitudes")}
            className="flex flex-col items-center hover:text-yellow-500 transition"
          >
            <img src={Solicitudes} alt="Solicitudes" className="w-6 h-6 mb-1" />
            <span className="text-xs">Solicitudes</span>
          </button>

          <button
            onClick={() => navigate("/notificaciones")}
            className="flex flex-col items-center hover:text-yellow-500 transition"
          >
            <img
              src={Notificaciones}
              alt="Notificaciones"
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs">Notificaciones</span>
          </button>

          <button
            onClick={() => navigate("/grupos")}
            className="flex flex-col items-center hover:text-yellow-500 transition"
          >
            <img src={Grupos} alt="Grupos" className="w-6 h-6 mb-1" />
            <span className="text-xs">Grupos</span>
          </button>
        </nav>
      </header>
      <main className="flex-1 p-4 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
