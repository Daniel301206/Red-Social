import Layout from "./Layout";

const VentanaInicio = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 max-w-2xl mx-auto mt-6">
        <h2 className="text-yellow-400 text-xl sm:text-2xl font-bold mb-3">
          🏡 Bienvenido a Chatter
        </h2>
        <p className="text-gray-300 text-sm sm:text-base px-2">
          Aquí podrás ver publicaciones, videos y mensajes.
        </p>

        {/* Imagen central */}
        <div className="flex justify-center mt-6">
          <img
            src="/logo192.png"
            alt="Chatter logo"
            className="w-24 sm:w-32 opacity-60"
          />
        </div>

        {/* Botones opcionales (por ejemplo, futuras secciones) */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition text-sm sm:text-base">
            Ver publicaciones
          </button>
          <button className="bg-gray-700 text-gray-200 font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base">
            Explorar videos
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default VentanaInicio;

