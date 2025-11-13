import React from "react";
import Layout from "./Layout"; // ✅ Usa tu layout global
import chat from "../assets/chat.png";

const VentanaInicio = () => {
  return (
    <Layout>
      {/* 👇 Aquí va SOLO el contenido principal de esta página */}
      <div className="text-center text-yellow-400 mt-10">
        <h2 className="text-2xl font-bold mb-4">🏠 Bienvenido a Chatter</h2>
        <p className="text-gray-300">
          Aquí podrás ver publicaciones, videos y mensajes.
        </p>

        <div className="mt-10 flex justify-center">
          <img src={chat} alt="Chat" className="w-40 h-40 opacity-70" />
        </div>
      </div>
    </Layout>
  );
};

export default VentanaInicio;

