import React from "react";

// 🔹 Importa tus imágenes PNG
import logoEmpresa from "../assets/logoEmpresa.png";
import lupa from "../assets/lupa.png";
import img from "../assets/img.png";
import Home from "../assets/Home.png";
import Video from "../assets/Video.png";
import Solicitudes from "../assets/Solicitudes.png";
import Notificaciones from "../assets/Notificaciones.png";
import Grupos from "../assets/Grupos.png";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* CABECERA */}
      <header className="w-full sticky top-0 bg-gray-900 border-b border-yellow-600/30 shadow-md z-20">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <img src={logoEmpresa} alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-yellow-500">Chatter</h1>
          </div>

          {/* Buscador */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1">
            <img src={lupa} alt="Buscar" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 text-gray-200 placeholder-gray-400 outline-none w-48"
            />
          </div>

          {/* Imagen/Avatar */}
          <div>
            <img src={img} alt="Usuario" className="w-10 h-10 rounded-full object-cover" />
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Zona principal */}
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-4 shadow-md border border-gray-700">
          {children ? (
            children
          ) : (
            <div className="text-center py-20 text-yellow-400 text-lg">
              👋 Bienvenido a Chatter — tu red social
            </div>
          )}
        </div>

        {/* Sidebar derecho */}
        <aside className="hidden lg:block p-4">
          <div className="sticky top-[120px] bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md">
            <h3 className="text-yellow-400 font-semibold mb-2">Tendencias</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>#ReactJS</li>
              <li>#TailwindCSS</li>
              <li>#DesarrolloWeb</li>
              <li>#SENATI</li>
            </ul>
          </div>
        </aside>
      </main>

      {/* NAVEGACIÓN INFERIOR */}
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-yellow-600/30 flex justify-around items-center py-2 md:py-3">
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
}

export default Layout;
