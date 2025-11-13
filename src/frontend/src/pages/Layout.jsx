import lupa from "../assets/lupa.png";
import logoEmpresa from "../assets/logoEmpresa.png";
import chat from "../assets/chat.png";
import Home from "../assets/Home.png";
import Video from "../assets/Video.png";
import Solicitudes from "../assets/Solicitudes.png";
import Notificaciones from "../assets/Notificaciones.png";
import Grupos from "../assets/Grupos.png";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      {/* ===================== */}
      {/* NAV SUPERIOR */}
      {/* ===================== */}
      <header className="w-full sticky top-0 bg-gray-900 text-gray-200 shadow-lg z-20">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Logo y título */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logoEmpresa} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-500">Chatter</h1>
          </div>

          {/* Buscador (solo visible en pantallas medianas y grandes) */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 flex-1 max-w-sm mx-4">
            <img src={lupa} alt="Buscar" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 text-gray-200 placeholder-gray-400 outline-none w-full"
            />
          </div>

          {/* Icono del usuario o chat */}
          <div>
            <img
              src={chat}
              alt="Usuario"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Buscador visible solo en móvil */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 w-full">
            <img src={lupa} alt="Buscar" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="¿Qué estás pensando?"
              className="bg-gray-800 text-gray-200 placeholder-gray-400 outline-none w-full text-sm"
            />
          </div>
        </div>
      </header>

      {/* ===================== */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ===================== */}
      <main className="flex-grow overflow-y-auto p-3 sm:p-6">{children}</main>

      {/* ===================== */}
      {/* NAV INFERIOR */}
      {/* ===================== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 py-2 flex justify-around items-center md:static md:justify-center md:gap-10">
        <button className="flex flex-col items-center hover:text-yellow-500 transition">
          <img src={Home} alt="Inicio" className="w-6 h-6 mb-1" />
          <span className="text-xs">Inicio</span>
        </button>
        <button className="flex flex-col items-center hover:text-yellow-500 transition">
          <img src={Video} alt="Video" className="w-6 h-6 mb-1" />
          <span className="text-xs">Video</span>
        </button>
        <button className="flex flex-col items-center hover:text-yellow-500 transition">
          <img src={Solicitudes} alt="Solicitudes" className="w-6 h-6 mb-1" />
          <span className="text-xs">Solicitudes</span>
        </button>
        <button className="flex flex-col items-center hover:text-yellow-500 transition">
          <img src={Notificaciones} alt="Notificaciones" className="w-6 h-6 mb-1" />
          <span className="text-xs">Notificaciones</span>
        </button>
        <button className="flex flex-col items-center hover:text-yellow-500 transition">
          <img src={Grupos} alt="Grupos" className="w-6 h-6 mb-1" />
          <span className="text-xs">Grupos</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
