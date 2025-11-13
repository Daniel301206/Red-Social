import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from "./pages/LoginError";
import VentanaInicio from "./pages/VentanaInicio";

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
      </Routes>
    </BrowserRouter>
  );
}
export default App;