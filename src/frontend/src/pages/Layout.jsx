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
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Navbar superior */}
      <header className="sticky top-0 bg-gray-900 shadow-md z-50">
        <div className="flex justify-between items-center px-4 md:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoEmpresa} alt="Logo" className="w-8 h-8 object-contain" />
            <h1 className="text-xl md:text-2xl font-bold text-yellow-500">Chatter</h1>
          </div>

          {/* Buscador */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 w-64">
            <img src={lupa} alt="Buscar" className="w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 text-gray-200 placeholder-gray-400 outline-none w-full"
            />
          </div>

          {/* Avatar */}
          <img src={chat} alt="Usuario" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col md:flex-row gap-4 p-4">
        {/* Contenido principal centrado */}
        <div className="flex-1 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">{children}</div>
        </div>

        {/* Columna lateral (solo PC) */}
        <aside className="hidden md:block w-1/4 bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 h-fit">
          <h2 className="text-yellow-400 font-bold mb-3">Tendencias</h2>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>#ReactJS</li>
            <li>#TailwindCSS</li>
            <li>#DesarrolloWeb</li>
            <li>#SENATI</li>
          </ul>
        </aside>
      </main>

      {/* Barra inferior (solo móvil) */}
      <nav className="flex md:hidden justify-around bg-gray-800 border-t border-gray-700 py-2 fixed bottom-0 w-full z-50">
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
