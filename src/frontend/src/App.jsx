import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from "./pages/LoginError";
import VentanaInicio from "./pages/VentanaInicio";
import Video from "./pages/Video";
import Solicitudes from "./pages/Solicitudes";
import Notificaciones from "./pages/Notificaciones";
import Grupos from "./pages/Grupos";
import Chats from "./pages/chats";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-error" element={<LoginError />} />
        <Route path="/login-success" element={<LoginSuccess />}/>
        <Route path="/ventanaInicio" element={<VentanaInicio/>}/>
        <Route path="/video" element={<Video />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/chats" element={<Chats />} />   


      </Routes>
    </BrowserRouter>
  );
}
export default App;