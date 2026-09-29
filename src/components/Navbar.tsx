import React, { useState, useEffect, useRef } from 'react';
import { PageId, Product } from '../types';
import { LOGO_URL, BUSINESS_CONFIG } from '../data/mockData';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Package, 
  PhoneCall,
  Flame,
  Radio,
  Users,
  QrCode
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBatchStatus?: () => void;
  onOpenShare?: () => void;
  onOpenProductModal: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenBatchStatus,
  onOpenShare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId, anchorId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchorId);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#131315]/95 backdrop-blur-xl border-b border-[#2a2a2c] shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
            : 'bg-[#131315]/90 backdrop-blur-md border-b border-[#2a2a2c]/60'
        }`}
      >
        {/* TOP TACTICAL MARQUEE / TICKER BAR */}
        <div className="w-full bg-[#0e0e10] border-b border-[#201f21] py-1.5 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] font-mono">
            
            {/* Live Indicator Button */}
            <button
              onClick={onOpenBatchStatus}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1b1b1d] border border-[#fde400]/40 text-[#fde400] font-bold hover:bg-[#fde400] hover:text-black transition-all cursor-pointer shrink-0"
              title="Ver estatus y radar de entrega hoy"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>RADAR DE ENTREGAS: ACTIVO</span>
              <Radio className="w-3 h-3 ml-0.5 text-[#25D366]" />
            </button>

            {/* Marquee Ticker */}
            <div className="hidden md:flex overflow-hidden relative flex-1 mx-4">
              <div className="animate-marquee whitespace-nowrap text-[#cdc7aa] text-[11px] flex items-center gap-6">
                <span className="text-[#fde400] font-bold">/// GOMILOKAS</span>
                <span>AROS DE MANZANA ENCHILADOS</span>
                <span className="text-white font-bold">100G = $15 MXN</span>
                <span>CHAMOY ARTESANAL QUE NO ESCURRE</span>
                <span className="text-[#25D366] font-bold">ENTREGAS EN LA UNI & VILLA DE TEZONTEPEC</span>
                <span className="text-[#fde400] font-bold">PEDIDOS AL {BUSINESS_CONFIG.phone}</span>
                <span className="text-[#fde400] font-bold">/// GOMILOKAS</span>
                <span>AROS DE MANZANA ENCHILADOS</span>
                <span className="text-white font-bold">100G = $15 MXN</span>
                <span>CHAMOY ARTESANAL QUE NO ESCURRE</span>
                <span className="text-[#25D366] font-bold">ENTREGAS EN LA UNI & VILLA DE TEZONTEPEC</span>
              </div>
            </div>

            {/* Fast direct WhatsApp link */}
            <div className="flex items-center gap-2 shrink-0">
              <a 
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#cdc7aa] hover:text-[#25D366] transition-colors flex items-center gap-1 font-bold"
              >
                <span className="hidden sm:inline">WhatsApp:</span> {BUSINESS_CONFIG.phone}
              </a>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Typography */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigateTo('inicio')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fde400] to-[#ff2a2a] rounded-xl blur-sm opacity-40 group-hover:opacity-100 transition duration-300" />
                <img
                  src={LOGO_URL}
                  alt="GOMILOKAS Logo"
                  className="relative h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(253,228,0,0.5)]"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-2xl tracking-tighter uppercase text-white leading-none font-headline">
                    GOMI<span className="text-[#fde400]">LOKAS</span>
                  </span>
                  <span className="text-[9px] font-mono font-bold bg-[#ff2a2a]/20 text-[#ff4d4d] border border-[#ff2a2a]/40 px-1 rounded uppercase">
                    100G
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#cdc7aa] font-bold font-mono">
                  AROS ENCHILADOS • $15 MXN
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#0e0e10] border border-[#2a2a2c] rounded-xl shadow-inner">
            <button
              onClick={() => navigateTo('inicio')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer ${
                currentPage === 'inicio'
                  ? 'bg-[#353437] text-[#fde400] shadow-sm'
                  : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => navigateTo('productos')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'productos'
                  ? 'bg-[#353437] text-[#fde400] shadow-sm'
                  : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#fde400]" />
              Aros de Manzana
            </button>

            <button
              onClick={() => navigateTo('especificaciones')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'especificaciones'
                  ? 'bg-[#353437] text-[#fde400] shadow-sm'
                  : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
              Ficha Táctica & Rutas
            </button>

            <button
              onClick={() => navigateTo('mayoristas')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'mayoristas'
                  ? 'bg-[#353437] text-[#fde400] shadow-sm'
                  : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-[#fde400]" />
              Mayoreo & Reventa
            </button>

            <button
              onClick={() => navigateTo('team-fuego')}
              className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'team-fuego'
                  ? 'bg-[#353437] text-[#fde400] shadow-sm'
                  : 'text-[#cdc7aa] hover:text-white hover:bg-[#201f21]'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#ff4d4d]" />
              El Crew // 18 Años
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Radar Quick Action */}
            <button
              onClick={onOpenBatchStatus}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] text-[#fde400] rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
              title="Abrir radar de entregas y estatus"
            >
              <Radio className="w-3.5 h-3.5 text-[#25D366] animate-pulse" />
              <span>RADAR</span>
            </button>

            {/* QR Code / Share Button */}
            <button
              onClick={onOpenShare}
              className="p-2.5 bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] text-[#25D366] hover:text-white rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Compartir página o ver Código QR"
            >
              <QrCode className="w-4 h-4" />
              <span className="hidden xl:inline text-xs font-mono font-bold text-white">QR</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] text-white rounded-lg transition-all cursor-pointer flex items-center gap-2 shadow-sm"
              title="Ver Mi Pedido"
            >
              <ShoppingBag className="w-4 h-4 text-[#fde400]" />
              <span className="hidden md:inline text-xs font-bold font-mono">
                {cartCount > 0 ? `${cartCount} bolsas` : 'Mi Pedido'}
              </span>
              {cartCount > 0 && (
                <span className="bg-[#fde400] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Ordering Button */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g para entrega en la Uni / Villa de Tezontepec'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-black hover:bg-white hover:text-black px-3.5 sm:px-4 py-2 font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pedir por WhatsApp</span>
              <span className="sm:hidden">Pedir</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-[#201f21] border border-[#353437] text-white rounded-lg hover:text-[#fde400] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-28 overflow-y-auto animate-in fade-in duration-200">
          <div className="p-4 space-y-3 max-w-lg mx-auto pb-12">
            
            <div className="p-4 bg-[#1b1b1d] border border-[#353437] rounded-2xl text-center space-y-1 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#201f21] border border-[#fde400]/40 text-[#fde400] text-[10px] font-mono font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                VILLA DE TEZONTEPEC & LA UNI
              </div>
              <h4 className="text-base font-black uppercase text-white font-headline">
                GOMILOKAS // 100G A $15 MXN
              </h4>
              <p className="text-xs text-[#cdc7aa]">
                Aros de manzana verde con chamoy artesanal que no escurre.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => navigateTo('inicio')}
                className={`w-full p-3.5 rounded-xl font-bold text-sm uppercase flex items-center justify-between transition-colors ${
                  currentPage === 'inicio' ? 'bg-[#353437] text-[#fde400]' : 'bg-[#1b1b1d] text-white hover:bg-[#201f21]'
                }`}
              >
                <span>Inicio</span>
                <span className="text-xs text-[#cdc7aa]">→</span>
              </button>

              <button
                onClick={() => navigateTo('productos')}
                className={`w-full p-3.5 rounded-xl font-bold text-sm uppercase flex items-center justify-between transition-colors ${
                  currentPage === 'productos' ? 'bg-[#353437] text-[#fde400]' : 'bg-[#1b1b1d] text-white hover:bg-[#201f21]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#fde400]" />
                  Aros de Manzana (Catálogo)
                </span>
                <span className="text-xs text-[#cdc7aa]">→</span>
              </button>

              <button
                onClick={() => navigateTo('especificaciones')}
                className={`w-full p-3.5 rounded-xl font-bold text-sm uppercase flex items-center justify-between transition-colors ${
                  currentPage === 'especificaciones' ? 'bg-[#353437] text-[#fde400]' : 'bg-[#1b1b1d] text-white hover:bg-[#201f21]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#25D366]" />
                  Ficha Táctica & Rutas de Entrega
                </span>
                <span className="text-xs text-[#cdc7aa]">→</span>
              </button>

              <button
                onClick={() => navigateTo('mayoristas')}
                className={`w-full p-3.5 rounded-xl font-bold text-sm uppercase flex items-center justify-between transition-colors ${
                  currentPage === 'mayoristas' ? 'bg-[#353437] text-[#fde400]' : 'bg-[#1b1b1d] text-white hover:bg-[#201f21]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#fde400]" />
                  Mayoreo & Reventa en Salón
                </span>
                <span className="text-xs text-[#cdc7aa]">→</span>
              </button>

              <button
                onClick={() => navigateTo('team-fuego')}
                className={`w-full p-3.5 rounded-xl font-bold text-sm uppercase flex items-center justify-between transition-colors ${
                  currentPage === 'team-fuego' ? 'bg-[#353437] text-[#fde400]' : 'bg-[#1b1b1d] text-white hover:bg-[#201f21]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ff4d4d]" />
                  El Crew // Gilberto (18 Años)
                </span>
                <span className="text-xs text-[#cdc7aa]">→</span>
              </button>
            </div>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare?.();
                }}
                className="w-full py-3 bg-[#201f21] border border-[#25D366]/40 text-[#25D366] font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
                <span>Compartir / Ver Código QR</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBatchStatus?.();
                }}
                className="w-full py-3 bg-[#201f21] border border-[#fde400]/40 text-[#fde400] font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Radio className="w-4 h-4 text-[#25D366] animate-pulse" />
                <span>Ver Radar de Entregas Hoy</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g para entrega en la Uni / Villa de Tezontepec'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Pedir directo por WhatsApp ({BUSINESS_CONFIG.phone})</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
