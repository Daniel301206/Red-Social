import Layout from "./Layout";
import usuario from "../assets/usuario.png";
import clave from "../assets/clave.png";
import lupa from "../assets/lupa.png";

import Solicitudes from "../assets/Solicitudes.png";
import cajas from "../assets/Solicitudes.png";
import texto from "../assets/Solicitudes.png";

function Chats() {
  return (
    <Layout>
      <div className="w-full max-w-md mx-auto bg-white h-screen border rounded-xl shadow-md">
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          {/* Foto del usuario */}
          <img
            src={usuario}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Título */}
          <h1 className="text-xl font-bold flex-1 text-center">Chats</h1>

          {/* Iconos configuración y buscar */}
          <div className="flex items-center gap-4">
            <img src={lupa} alt="Search" className="w-6 h-6" />
            <img src={clave} alt="Settings" className="w-6 h-6" />
          </div>
        </div>

        {/* CUADRO DE BÚSQUEDA */}
        <div className="px-4 pb-2">
          <div className="w-full bg-gray-200 rounded-full flex items-center px-3 py-2">
            <img src={lupa} className="w-5 h-5 mr-2" alt="Search" />
            <input
              className="bg-transparent w-full outline-none"
              placeholder="Buscar chats"
            />
          </div>
        </div>

        {/* LISTA DE CHATS */}
        <div className="px-4 mt-3 space-y-4">
          {/* CHAT 1 */}
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              src={Solicitudes}
              className="w-12 h-12 rounded-full object-cover"
              alt="Chat"
            />

            <div className="flex flex-col">
              <span className="font-semibold">Luis Fernando</span>
              <span className="text-gray-500 text-sm">
                Oye, ¿qué tal estás?
              </span>
            </div>
          </div>

          {/* CHAT 2 */}
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              src={cajas}
              className="w-12 h-12 rounded-full object-cover"
              alt="Chat"
            />

            <div className="flex flex-col">
              <span className="font-semibold">María López</span>
              <span className="text-gray-500 text-sm">¿A qué hora llegas?</span>
            </div>
          </div>

          {/* CHAT 3 */}
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              src={texto}
              className="w-12 h-12 rounded-full object-cover"
              alt="Chat"
            />

            <div className="flex flex-col">
              <span className="font-semibold">Grupo de amigos</span>
              <span className="text-gray-500 text-sm">Nuevo meme 😂</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Chats;
