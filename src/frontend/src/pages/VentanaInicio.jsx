import Layout from "./Layout";

const VentanaInicio = () => {
  return (
    <Layout>
      <div className="bg-gray-0 p-6 rounded-xl  text-center">
        <h2 className="text-yellow-400 text-xl font-bold mb-2">
          🏡 Bienvenido a Chatter
        </h2>
        <p className="text-gray-300">
          Aquí podrás ver publicaciones, videos y mensajes.
        </p>
        <div className="flex justify-center mt-6">
          <img src="/logo192.png" alt="Chatter logo" className="w-32 opacity-50" />
        </div>
      </div>
    </Layout>
  );
};

export default VentanaInicio;
