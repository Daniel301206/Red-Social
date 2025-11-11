import React, { useState } from "react";
// Importamos iconos de Lucide para la navegación y diseño
import {
  MessageSquareText, Search, Home, Bell, Users, User, Settings, LogOut,
  MessageSquare, Camera, UserPlus, Calendar, User as UserIcon // Renombramos User
} from "lucide-react";

// --- CONFIGURACIÓN Y COLORES ---
const BG_DARK = 'bg-[#18191a]';
const BG_CARD = 'bg-[#252528]';
const TEXT_LIGHT = 'text-gray-200';
const ACCENT_YELLOW = 'text-yellow-500';
const BORDER_YELLOW = 'border-yellow-500';
const HOVER_YELLOW_BG = 'hover:bg-yellow-900/40';

// Botones de navegación (usados en AppLayout)
const NAV_BUTTONS_CENTRAL = [
    { name: 'Home', icon: Home, label: 'Inicio' },
    { name: 'Camera', icon: Camera, label: 'Cámara' },
    { name: 'Amigos', icon: UserPlus, label: 'Solicitudes' },
    { name: 'Notificaciones', icon: Bell, label: 'Notificaciones' },
    { name: 'Grupos', icon: Users, label: 'Grupos' },
];

const NAV_BUTTONS_RIGHT = [
    { name: 'Config', icon: Settings, label: 'Configuración' },
    { name: 'Mensajes', icon: MessageSquare, label: 'Mensajes' },
    { name: 'Perfil', icon: UserIcon, label: 'Perfil' },
];


// --- COMPONENTE: LAYOUT Y FEED SOCIAL ---

const AppLayout = () => {
    const [activeTab, setActiveTab] = useState('Ventana01');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const buttonCircleClasses = `w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${BG_DARK} ${TEXT_LIGHT} border ${BORDER_YELLOW}/50 ${HOVER_YELLOW_BG}`;
    
    // --- COLUMNA DERECHA: WIDGETS Y CHATS ACTIVOS ---
    const RightSidebar = () => (
        <div className="hidden lg:col-span-1 lg:block p-4">
            <div className="sticky top-[140px] space-y-6">
                
                {/* WIDGET: CHATS ACTIVOS */}
                <div className={`p-4 rounded-xl shadow-lg border ${BORDER_YELLOW}/20 ${BG_CARD}`}>
                    <h4 className={`text-sm font-semibold mb-3 ${ACCENT_YELLOW}`}>Chats Activos</h4>
                    <div className="space-y-3 text-sm">
                        {['Carlos García', 'Fiona Ozeri', 'Ricardo Díaz'].map((name, index) => (
                            <div key={name} className={`flex items-center justify-between p-2 rounded-lg ${HOVER_YELLOW_BG} cursor-pointer`}>
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full mr-3 bg-blue-500 border-2 ${BORDER_YELLOW}`}></div>
                                    <span className={TEXT_LIGHT}>{name}</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        ))}
                        <button className="w-full text-center py-2 mt-2 text-sm font-medium rounded-lg bg-yellow-600/50 hover:bg-yellow-700/60 transition-colors">
                            Ver todos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- COLUMNA CENTRAL: FEED ---
    const MainContent = () => (
        <div className="lg:col-span-2 p-4">
            {/* 1. CAJA DE PUBLICACIÓN */}
            <div className={`${BG_CARD} p-4 rounded-xl shadow-lg mb-6 border ${BORDER_YELLOW}/20`}>
                <div className="flex items-center border-b border-gray-700 pb-3 mb-3">
                    <div className="w-10 h-10 bg-gray-500 rounded-full mr-3 border border-gray-400"></div>
                    <input 
                        type="text" 
                        placeholder="¿Qué estás pensando, Fiona?" 
                        className={`flex-grow p-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-500 text-gray-300`}
                    />
                </div>
                <div className="flex justify-around pt-2">
                    <button className="flex items-center text-red-400 font-medium hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                        <Camera className="w-5 h-5 mr-1" /> Foto/Video
                    </button>
                    <button className="flex items-center text-green-400 font-medium hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                        <Calendar className="w-5 h-5 mr-1" /> Evento
                    </button>
                </div>
            </div>

            {/* 2. PUBLICACIÓN DE EJEMPLO */}
            <div className={`bg-white p-4 rounded-xl shadow-lg mb-4 text-gray-800 border border-gray-200`}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <img 
                            src="https://placehold.co/40x40/778899/FFFFFF?text=F" 
                            alt="Perfil" 
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                            <p className="font-semibold text-sm">Fiona Ozery</p>
                            <p className="text-xs text-gray-500">1 h</p>
                        </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-800">...</button>
                </div>
                <p className="text-sm mb-3">
                    La oscura densidad del bosque... Es mi lugar favorito.
                </p>
                <img 
                    src="https://placehold.co/600x400/228B22/FFFFFF?text=IMAGEN+DE+BOSQUE" 
                    alt="Post Image" 
                    className="w-full h-auto rounded-lg object-cover mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/333333/FFFFFF?text=Error+Carga+Imagen"; }}
                />
                
                {/* Botones de Interacción */}
                <div className="flex justify-around border-t border-gray-200 pt-3 text-sm font-medium text-gray-600">
                    <button className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
                        <MessageSquareText className="w-4 h-4 mr-1" /> Me Gusta
                    </button>
                    <button className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
                        <MessageSquare className="w-4 h-4 mr-1" /> Comentar
                    </button>
                    <button className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
                        <LogOut className="w-4 h-4 mr-1 transform rotate-180" /> Compartir
                    </button>
                </div>
            </div>
        </div>
    );
    
    // --- RENDERIZADO DEL LAYOUT COMPLETO ---
    return (
        <div className={`min-h-screen ${BG_DARK} ${TEXT_LIGHT} font-sans`}>
            {/* HEADER: Fijo en la parte superior */}
            <header className={`sticky top-0 shadow-xl z-20 ${BG_DARK} border-b ${BORDER_YELLOW}/10`}>
                {/* FILA 1: LOGO, BÚSQUEDA Y BOTONES DE ACCIÓN */}
                <div className="container mx-auto flex items-center justify-between px-4 py-2 h-[70px]">
                    <div className="flex items-center space-x-4">
                        <button className={buttonCircleClasses} onClick={() => handleTabClick('Home')}>
                            <MessageSquareText className="w-6 h-6" style={{ color: '#FFD700' }}/> 
                        </button>
                        <div className="relative hidden lg:block">
                            <input
                                type="text"
                                placeholder="Buscar en Chatter..."
                                className={`w-64 py-2 pl-10 pr-4 rounded-full text-sm ${BG_DARK} border ${BORDER_YELLOW}/50 focus:outline-none focus:ring-1 focus:ring-yellow-500 text-gray-300`}
                            />
                            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400`} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {NAV_BUTTONS_RIGHT.map(button => (
                            <button
                                key={button.name}
                                className={buttonCircleClasses}
                                onClick={() => handleTabClick(button.name)}
                                aria-label={button.label}
                            >
                                <button.icon className="w-5 h-5" />
                            </button>
                        ))}
                        {/* El botón de Logout se mantiene, aunque no hará nada ya que no hay Login */}
                        <button
                            className={`${buttonCircleClasses} text-red-400`}
                            onClick={() => alert('Sesión Cerrada (Simulación)')}
                            aria-label="Cerrar Sesión"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* FILA 2: ICONOS DE NAVEGACIÓN CENTRAL */}
                <div className={`${BG_CARD} h-[60px] flex justify-center items-center border-t border-b ${BORDER_YELLOW}/10`}>
                    <nav className="flex items-center space-x-8">
                        {NAV_BUTTONS_CENTRAL.map(button => (
                            <button
                                key={button.name}
                                onClick={() => handleTabClick(button.name)}
                                className={`
                                    w-12 h-12 flex items-center justify-center transition-all duration-200 
                                    rounded-full border-2 ${BORDER_YELLOW}/20 
                                    ${activeTab === button.name 
                                        ? 'bg-yellow-600/50 border-yellow-400 shadow-lg shadow-yellow-500/20' 
                                        : 'hover:bg-yellow-700/20'}`
                                }
                                aria-label={button.label}
                            >
                                <button.icon className={`w-6 h-6 ${ACCENT_YELLOW}`} />
                            </button>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    );
};


// --- COMPONENTE PRINCIPAL APP (Controla las VISTAS) ---
// Ahora solo renderiza AppLayout directamente.

const App = () => {
    // Ya no hay Splash Screen o manejo de vista. Simplemente renderiza el layout principal.
    return <AppLayout />;
};

export default App;