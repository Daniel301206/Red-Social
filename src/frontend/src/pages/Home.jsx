import { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import {useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate(); 
  //tiempo total que se mostrara
  const TIEMPO_ESPERA_MS = 4500; // 4.5 segundos
  
  useEffect(() => {
    const timer = setTimeout(() => {
         navigate('/feed'); 
    }, TIEMPO_ESPERA_MS); 

    const redirectTimer = setTimeout(() => {
        navigate('/login'); 
    }, 4500);
    return () => {
         clearTimeout(redirectTimer);
    };
  },
    [ navigate]);

  return (
        <div className="min-h-screen flex justify-center items-center #18191a">
            <img src={logo} />
        </div>
  );
}
export default Home;

     
    