import Layout from "./Layout";
import React, { useRef, useEffect } from "react";


const videos = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", author: "Juan" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4", author: "Ana" },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    author: "Carlos",
  },
];

function Videos() {
  const videoRefs = useRef([]);

  // Auto play/pause según visibilidad en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-8 p-4 bg-gray-100 min-h-screen">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-3 border-b border-gray-200">
              <h3 className="font-semibold">{video.author}</h3>
            </div>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="w-full h-80 object-cover"
              controls
              loop
              muted
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Videos;
