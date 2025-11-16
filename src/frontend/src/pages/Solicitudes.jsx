import Layout from "./Layout";

import React, { useState } from "react";

const initialRequests = [
  { id: 1, name: "Ana Perez", status: "pending" },
  { id: 2, name: "Juan Gomez", status: "pending" },
  { id: 3, name: "Carla Ruiz", status: "pending" },
];

function Solicitudes() {
    // Asegúrate de que el nombre sea "requests"
  const [requests, setRequests] = useState(initialRequests);

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "accepted" } : req
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.filter((req) => req.id !== id)
    );
  };
  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Solicitudes de amistad</h2>
        {requests.length === 0 && <p>No tienes solicitudes pendientes.</p>}
        {requests.map((req) => (
          <div
            key={req.id}
            className="flex items-center justify-between mb-3 p-3 bg-gray-100 rounded-lg"
          >
            <div>
              <p className="font-medium">{req.name}</p>
              {req.status === "accepted" && (
                <p className="text-green-600 text-sm">Amigo</p>
              )}
            </div>
            <div className="flex gap-2">
              {req.status === "pending" && (
                <>
                  <button
                    onClick={() => handleAccept(req.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={() => handleReject(req.id)}
                    className="bg-gray-300 text-black px-3 py-1 rounded-md"
                  >
                    Rechazar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Solicitudes;
