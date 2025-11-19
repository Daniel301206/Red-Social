import React, { useState, useRef } from "react";
import { createPost } from "../Services/postService";

const CreatePostForm = ({ onPostCreated, currentUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showFeelings, setShowFeelings] = useState(false);

  // Cámara
  const videoRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  const userName = currentUser?.name || "Usuario";
  const userAvatar = currentUser?.profilePicUrl || "/default_avatar.jpg";

  // ======================
  // 📸 INICIAR CÁMARA
  // ======================
  const openCamera = async (mode) => {
    try {
      setIsCameraOpen(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: mode === "video",
      });

      videoRef.current.srcObject = stream;

      if (mode === "video") startRecording(stream);
    } catch (error) {
      alert("No se pudo acceder a la cámara.");
    }
  };

  // ======================
  // 🎥 GRABAR VIDEO
  // ======================
  const startRecording = (stream) => {
    recordedChunksRef.current = [];
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => recordedChunksRef.current.push(e.data);

    recorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: "video/mp4" });
      setMediaFile(new File([blob], "video.mp4", { type: "video/mp4" }));
      stopCamera();
      setIsCameraOpen(false);
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // ======================
  // 📷 TOMAR FOTO
  // ======================
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      setMediaFile(new File([blob], "photo.jpg", { type: "image/jpeg" }));
    });

    stopCamera();
    setIsCameraOpen(false);
  };

  // ======================
  // 🔌 CERRAR CÁMARA
  // ======================
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  // ======================
  // 🚀 PUBLICAR
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content && !mediaFile) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("authorId", currentUser?.id);

    if (mediaFile) {
      formData.append("image", mediaFile);
    }

    try {
      const newPost = await createPost(formData);
      setTitle("");
      setContent("");
      setMediaFile(null);
      if (onPostCreated) onPostCreated(newPost);
    } catch {
      alert("Error al subir la publicación.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 shadow-xl rounded-xl mb-6 max-w-xl mx-auto border border-gray-200 w-full">
      {/* HEADER */}
      <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
        <img
          src={userAvatar}
          alt={userName}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`¿Qué estás pensando, ${userName}?`}
          className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      {/* BOTONES */}
      <div className="flex justify-around items-center flex-wrap gap-3">
        {/* 🔴 VIDEO EN VIVO */}
        <button
          className="flex items-center text-red-500 font-semibold hover:bg-red-50 p-2 rounded-lg transition"
          onClick={() => openCamera("video")}
        >
          🔴 <span className="ml-2 hidden sm:inline">Video en vivo</span>
        </button>

        {/* 🏞 FOTO / VIDEO */}
        <button
          className="flex items-center text-green-600 font-semibold hover:bg-green-50 p-2 rounded-lg transition"
          onClick={() => document.getElementById("filePicker").click()}
        >
          🏞️ <span className="ml-2 hidden sm:inline">Foto/Video</span>
        </button>

        <input
          type="file"
          id="filePicker"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setMediaFile(e.target.files[0]);
            }
          }}
        />

        {/* 🙂 SENTIMIENTOS */}
        <div className="relative">
          <button
            className="flex items-center text-yellow-500 font-semibold hover:bg-yellow-50 p-2 rounded-lg transition"
            onClick={() => setShowFeelings(!showFeelings)}
          >
            🙂 <span className="ml-2 hidden sm:inline">Sentimiento</span>
          </button>

          {showFeelings && (
            <div className="absolute bg-white shadow-lg rounded-xl p-2 border w-40 right-0">
              {["Feliz 😄", "Triste 😢", "Molesto 😡", "Enamorado ❤️"].map(
                (f) => (
                  <p
                    key={f}
                    className="p-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setContent(content + " " + f);
                      setShowFeelings(false);
                    }}
                  >
                    {f}
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* CÁMARA */}
      {isCameraOpen && (
        <div className="mt-4">
          <video ref={videoRef} autoPlay className="w-full rounded-xl" />

          <div className="flex justify-between mt-3">
            {/* TOMAR FOTO */}
            {!isRecording && (
              <button
                onClick={capturePhoto}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                Capturar foto
              </button>
            )}

            {/* DETENER GRABACIÓN */}
            {isRecording && (
              <button
                onClick={stopRecording}
                className="bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Detener grabación
              </button>
            )}

            <button
              onClick={() => {
                stopCamera();
                setIsCameraOpen(false);
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded-xl"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* BOTÓN PUBLICAR */}
      {(mediaFile || content) && (
        <div className="flex justify-end mt-4 border-t pt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Publicando..." : "Publicar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatePostForm;
