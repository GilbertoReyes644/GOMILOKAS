import React, { useState, useEffect, useRef } from 'react';
import { PageId, Product } from '../types';
import { LOGO_URL, PRODUCTS_DATA } from '../data/mockData';
import { 
  Flame, 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingBag, 
  Zap, 
  Package, 
  Users, 
  FlaskConical, 
  Calculator, 
  Download, 
  Activity, 
  MapPin, 
  Award,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBatchStatus: () => void;
  onOpenProductModal: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenBatchStatus,
  onOpenProductModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navigateTo = (page: PageId, anchorId?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(page, anchorId);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#131315]/95 backdrop-blur-xl border-b border-[#2a2a2c] shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#131315]/90 backdrop-blur-md border-b border-[#2a2a2c]/60'
        }`}
      >
        {/* Top Status Ticker Bar (Image 7 style) */}
        <div className="hidden lg:block w-full bg-[#0e0e10] border-b border-[#201f21] py-1 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[#cdc7aa] text-[11px] font-mono uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#fde400] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#fde400] animate-ping" />
                STATUS: DESPACHOS ACTIVOS
              </span>
              <span className="text-[#4b4731]">/</span>
              <span>LOTE N° 08-2025</span>
              <span className="text-[#4b4731]">/</span>
              <span>REG. COFEPRIS 223300516X</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-[#ffb4a8] flex items-center gap-1 font-bold">
                <Flame className="w-3.5 h-3.5 text-[#d20402]" />
                TERMO-SELLADO NITRO POUCH
              </span>
              <span className="text-[#4b4731]">/</span>
              <span>ENVÍO A TODO MÉXICO EN 24-48H</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigateTo('inicio')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="relative">
                <img
                  src={LOGO_URL}
                  alt="Fuego Dulce Logo"
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(253,228,0,0.35)]"
                />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#d20402] border-2 border-[#131315]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tighter uppercase text-white leading-none">
                  FUEGO<span className="text-[#fde400]">DULCE</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#cdc7aa] font-bold">
                  High-Octane Heat
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation with Menus and Mega-Submenus */}
          <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#0e0e10] border border-[#2a2a2c] rounded-xl shadow-inner relative">
            {/* 1. INICIO Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('inicio')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('inicio')}
                className={`px-3.5 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'inicio'
                    ? 'bg-[#353437] text-[#fde400] shadow-sm'
                    : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Inicio</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'inicio' ? 'rotate-180 text-[#fde400]' : ''}`} />
              </button>

              {/* Submenu: Inicio */}
              {activeDropdown === 'inicio' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#2a2a2c] mb-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#fde400]">
                      NAVEGACIÓN PRINCIPAL
                    </span>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('inicio')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Portada & Manifiesto
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Combustible de picor y dulzura
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('inicio', 'catalogo')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#d20402] group-hover:scale-105">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Arsenal de Sabores
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Durazno, Mango Habanero, Sandía
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('inicio', 'lifestyle')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-white group-hover:scale-105">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          De la Montaña al Gym
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Acción extrema y sin derrames
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('inicio', 'quienes-somos')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#cdc7aa] group-hover:scale-105">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Testimonios Reales
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Reseñas verificadas de atletas
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. PRODUCTOS Mega-Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('productos')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('productos')}
                className={`px-3.5 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'productos'
                    ? 'bg-[#353437] text-[#fde400] shadow-sm'
                    : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Productos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'productos' ? 'rotate-180 text-[#fde400]' : ''}`} />
              </button>

              {/* Mega-Submenu: Productos */}
              {activeDropdown === 'productos' && (
                <div className="absolute top-full -left-20 mt-2 w-[720px] bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-[#2a2a2c] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#d20402]" />
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        CATÁLOGO DE ALTO VOLTAJE (7 REFERENCIAS)
                      </span>
                    </div>
                    <button
                      onClick={() => navigateTo('productos')}
                      className="text-[11px] font-bold uppercase tracking-wider text-[#fde400] hover:underline flex items-center gap-1"
                    >
                      Ver Catálogo Completo &rarr;
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {PRODUCTS_DATA.slice(0, 6).map((product) => (
                      <div
                        key={product.id}
                        className="bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] hover:border-[#fde400] p-2.5 rounded-xl transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-black shrink-0 border border-[#353437] group-hover:scale-105 transition-transform"
                          />
                          <div className="overflow-hidden">
                            <span className="text-[10px] font-bold text-[#fde400] uppercase block truncate">
                              {product.category}
                            </span>
                            <h4 className="text-xs font-black text-white uppercase leading-snug group-hover:text-[#fde400] truncate">
                              {product.name}
                            </h4>
                            <span className="text-[11px] text-[#ffb4a8] font-mono font-bold">
                              ${product.price} MXN
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-[#2a2a2c] text-[10px]">
                          <span className="text-[#cdc7aa] uppercase">{product.scoville}</span>
                          <button
                            onClick={() => onOpenProductModal(product)}
                            className="text-[#fde400] font-bold hover:underline"
                          >
                            Ver Ficha
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom strip inside mega menu */}
                  <div className="mt-3 pt-3 border-t border-[#2a2a2c] bg-[#131315] -mx-4 -mb-4 p-3 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#cdc7aa]">
                      <span className="flex items-center gap-1 text-white font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#fde400]" />
                        Cero Dedos Pegajosos
                      </span>
                      <span>•</span>
                      <span>Garantía Térmica 38°C</span>
                      <span>•</span>
                      <span>Absorción Sub-15min</span>
                    </div>
                    <button
                      onClick={() => navigateTo('productos', 'matriz-cinetica')}
                      className="px-3 py-1 bg-[#353437] hover:bg-[#fde400] hover:text-black text-white text-[11px] font-extrabold uppercase rounded-lg transition-colors"
                    >
                      Matriz por Deporte
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. MAYORISTAS Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('mayoristas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('mayoristas')}
                className={`px-3.5 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'mayoristas'
                    ? 'bg-[#353437] text-[#fde400] shadow-sm'
                    : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Mayoristas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'mayoristas' ? 'rotate-180 text-[#fde400]' : ''}`} />
              </button>

              {/* Submenu: Mayoristas */}
              {activeDropdown === 'mayoristas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#2a2a2c] mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#fde400]">
                      PROGRAMA B2B & RETAIL
                    </span>
                    <span className="text-[10px] font-black uppercase text-[#d20402] bg-[#d20402]/20 px-1.5 py-0.5 rounded">
                      HASTA 55% MARGEN
                    </span>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('mayoristas', 'simulador')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Simulador de Rentabilidad
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Calcula ganancia neta en vivo
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('mayoristas', 'paquetes')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#d20402] group-hover:scale-105">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Paquetes de Mayoreo
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Emprendedor, Extremo y Eventos
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('mayoristas', 'exhibidor')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-white group-hover:scale-105">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Exhibidor Acrílico Gratis
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          En compras a partir de 100 bolsas
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('mayoristas', 'contacto-b2b')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Descargar Tabulador 2025
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Dossier y fichas técnicas PDF
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. TEAM FUEGO Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('team-fuego')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('team-fuego')}
                className={`px-3.5 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'team-fuego'
                    ? 'bg-[#353437] text-[#fde400] shadow-sm'
                    : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Team Fuego</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'team-fuego' ? 'rotate-180 text-[#fde400]' : ''}`} />
              </button>

              {/* Submenu: Team Fuego */}
              {activeDropdown === 'team-fuego' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#2a2a2c] mb-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#fde400]">
                      EMBAJADORES & ALTO RENDIMIENTO
                    </span>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('team-fuego', 'atletas')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Roster Oficial 2025
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Sofía, Rodrigo, Mateo y Valeria
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('team-fuego', 'manifiesto')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#d20402] group-hover:scale-105">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Manifiesto Biomecánico
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Activación vascular y capsaicina
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('team-fuego', 'galeria')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-white group-hover:scale-105">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Galería en Terreno
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Condiciones extremas en acción
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('team-fuego', 'convocatoria')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Convocatoria Atletas 2025
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Postulación para dotación y patrocinio
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. ESPECIFICACIONES Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('especificaciones')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('especificaciones')}
                className={`px-3.5 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'especificaciones'
                    ? 'bg-[#353437] text-[#fde400] shadow-sm'
                    : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Especificaciones</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'especificaciones' ? 'rotate-180 text-[#fde400]' : ''}`} />
              </button>

              {/* Submenu: Especificaciones */}
              {activeDropdown === 'especificaciones' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#2a2a2c] mb-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#fde400]">
                      INGENIERÍA & METROLOGÍA
                    </span>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('especificaciones', 'historia-comal')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <FlaskConical className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Del Comal al Protocolo
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Las 3 fases de producción artesanal
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('especificaciones', 'tabla-comparativa')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#d20402] group-hover:scale-105">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Gomita Convencional vs FD
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Tolerancia térmica 38.4°C y sellado
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('especificaciones', 'faq-tecnico')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-white group-hover:scale-105">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Preguntas Frecuentes Técnicas
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Vida de anaquel, agarre y envíos
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigateTo('especificaciones', 'muestras')}
                      className="w-full px-3 py-2 rounded-xl text-left hover:bg-[#2a2a2c] flex items-center gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] group-hover:scale-105">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white uppercase group-hover:text-[#fde400]">
                          Solicitud de Muestras
                        </span>
                        <span className="block text-[11px] text-[#cdc7aa]">
                          Auditoría para boxes y tiendas
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Batch Button (Interactive Modal trigger) */}
            <button
              onClick={onOpenBatchStatus}
              className="hidden md:flex items-center gap-2 px-2.5 py-1.5 bg-[#1b1b1d] hover:bg-[#201f21] border border-[#353437] rounded-lg transition-colors cursor-pointer group"
              title="Click para ver telemetría de lote en ruta"
            >
              <span className="w-2 h-2 rounded-full bg-[#d20402] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#cdc7aa] group-hover:text-white">
                Batch #08: <span className="text-[#fde400]">En Ruta</span>
              </span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] text-white rounded-lg transition-all cursor-pointer"
              title="Ver Bolsa Táctica"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#fde400] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Ordering Button */}
            <a
              href="https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20ordenar%20combustible%20de%20alto%20octanaje"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#fde400] text-black hover:bg-white px-3 sm:px-4 py-2 font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pedir por WhatsApp</span>
              <span className="sm:hidden">Pedir</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 bg-[#201f21] border border-[#353437] text-white rounded-lg hover:text-[#fde400]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl xl:hidden pt-20 overflow-y-auto animate-in fade-in duration-200">
          <div className="p-4 space-y-4 max-w-lg mx-auto pb-12">
            {/* Quick Status Bar */}
            <div className="p-3 bg-[#1b1b1d] border border-[#353437] rounded-xl flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBatchStatus();
                }}
                className="flex items-center gap-2 text-xs font-bold uppercase text-[#cdc7aa]"
              >
                <span className="w-2 h-2 rounded-full bg-[#d20402] animate-pulse" />
                <span>Batch #08: <strong className="text-[#fde400]">En Ruta</strong></span>
              </button>
              <span className="text-[10px] bg-[#353437] px-2 py-0.5 rounded text-white font-mono">
                COFEPRIS REG
              </span>
            </div>

            {/* Navigation Sections & Submenus Accordion */}
            <div className="space-y-2">
              {/* Item: Inicio */}
              <div className="border border-[#2a2a2c] rounded-xl overflow-hidden bg-[#1b1b1d]">
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => navigateTo('inicio')}
                    className="font-black text-sm uppercase text-white flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-[#fde400]" />
                    <span>Inicio</span>
                  </button>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'inicio' ? null : 'inicio')}
                    className="p-1 text-[#cdc7aa]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'inicio' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileSubmenu === 'inicio' && (
                  <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#2a2a2c] bg-[#131315]">
                    <button
                      onClick={() => navigateTo('inicio')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Portada & Manifiesto
                    </button>
                    <button
                      onClick={() => navigateTo('inicio', 'catalogo')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Arsenal de Sabores
                    </button>
                    <button
                      onClick={() => navigateTo('inicio', 'lifestyle')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; De la Montaña al Gym
                    </button>
                    <button
                      onClick={() => navigateTo('inicio', 'quienes-somos')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Testimonios Reales
                    </button>
                  </div>
                )}
              </div>

              {/* Item: Productos */}
              <div className="border border-[#2a2a2c] rounded-xl overflow-hidden bg-[#1b1b1d]">
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => navigateTo('productos')}
                    className="font-black text-sm uppercase text-white flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4 text-[#d20402]" />
                    <span>Productos</span>
                  </button>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'productos' ? null : 'productos')}
                    className="p-1 text-[#cdc7aa]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'productos' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileSubmenu === 'productos' && (
                  <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#2a2a2c] bg-[#131315]">
                    <button
                      onClick={() => navigateTo('productos')}
                      className="block text-xs uppercase font-bold text-[#fde400] py-1"
                    >
                      &bull; Ver Catálogo Completo (7 Referencias)
                    </button>
                    {PRODUCTS_DATA.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenProductModal(p);
                        }}
                        className="block text-left text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                      >
                        &bull; {p.name} (${p.price} MXN)
                      </button>
                    ))}
                    <button
                      onClick={() => navigateTo('productos', 'matriz-cinetica')}
                      className="block text-xs uppercase text-[#fde400] py-1"
                    >
                      &bull; Matriz de Selección Cinética
                    </button>
                  </div>
                )}
              </div>

              {/* Item: Mayoristas */}
              <div className="border border-[#2a2a2c] rounded-xl overflow-hidden bg-[#1b1b1d]">
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => navigateTo('mayoristas')}
                    className="font-black text-sm uppercase text-white flex items-center gap-2"
                  >
                    <Package className="w-4 h-4 text-[#fde400]" />
                    <span>Mayoristas B2B</span>
                  </button>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'mayoristas' ? null : 'mayoristas')}
                    className="p-1 text-[#cdc7aa]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'mayoristas' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileSubmenu === 'mayoristas' && (
                  <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#2a2a2c] bg-[#131315]">
                    <button
                      onClick={() => navigateTo('mayoristas', 'simulador')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Simulador de Rentabilidad B2B
                    </button>
                    <button
                      onClick={() => navigateTo('mayoristas', 'paquetes')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Paquetes de Mayoreo (40% a 55%)
                    </button>
                    <button
                      onClick={() => navigateTo('mayoristas', 'exhibidor')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Exhibidor Acrílico Compacto
                    </button>
                    <button
                      onClick={() => navigateTo('mayoristas', 'contacto-b2b')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Descarga Tabulador & Contacto Express
                    </button>
                  </div>
                )}
              </div>

              {/* Item: Team Fuego */}
              <div className="border border-[#2a2a2c] rounded-xl overflow-hidden bg-[#1b1b1d]">
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => navigateTo('team-fuego')}
                    className="font-black text-sm uppercase text-white flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#d20402]" />
                    <span>Team Fuego</span>
                  </button>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'team-fuego' ? null : 'team-fuego')}
                    className="p-1 text-[#cdc7aa]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'team-fuego' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileSubmenu === 'team-fuego' && (
                  <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#2a2a2c] bg-[#131315]">
                    <button
                      onClick={() => navigateTo('team-fuego', 'atletas')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Roster Oficial // Atletas Pro
                    </button>
                    <button
                      onClick={() => navigateTo('team-fuego', 'manifiesto')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Manifiesto Biomecánico
                    </button>
                    <button
                      onClick={() => navigateTo('team-fuego', 'galeria')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Galería Lifestyle en Acción
                    </button>
                    <button
                      onClick={() => navigateTo('team-fuego', 'convocatoria')}
                      className="block text-xs uppercase text-[#fde400] font-bold py-1"
                    >
                      &bull; Convocatoria Atletas 2025 (Formulario)
                    </button>
                  </div>
                )}
              </div>

              {/* Item: Especificaciones */}
              <div className="border border-[#2a2a2c] rounded-xl overflow-hidden bg-[#1b1b1d]">
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => navigateTo('especificaciones')}
                    className="font-black text-sm uppercase text-white flex items-center gap-2"
                  >
                    <FlaskConical className="w-4 h-4 text-white" />
                    <span>Especificaciones</span>
                  </button>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'especificaciones' ? null : 'especificaciones')}
                    className="p-1 text-[#cdc7aa]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'especificaciones' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileSubmenu === 'especificaciones' && (
                  <div className="px-4 pb-3 pt-1 space-y-2 border-t border-[#2a2a2c] bg-[#131315]">
                    <button
                      onClick={() => navigateTo('especificaciones', 'historia-comal')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Del Comal al Protocolo
                    </button>
                    <button
                      onClick={() => navigateTo('especificaciones', 'tabla-comparativa')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Gomita Convencional vs Fuego Dulce
                    </button>
                    <button
                      onClick={() => navigateTo('especificaciones', 'faq-tecnico')}
                      className="block text-xs uppercase text-[#cdc7aa] hover:text-white py-1"
                    >
                      &bull; Preguntas Frecuentes Técnicas
                    </button>
                    <button
                      onClick={() => navigateTo('especificaciones', 'muestras')}
                      className="block text-xs uppercase text-[#fde400] py-1"
                    >
                      &bull; Auditoría & Muestras Técnicas
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3">
              <a
                href="https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20hacer%20un%20pedido%20directo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#fde400] text-black rounded-xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Pedir Directo por WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 bg-[#201f21] border border-[#353437] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#fde400]" />
                <span>Bolsa Táctica ({cartCount} productos)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
