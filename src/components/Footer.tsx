import React from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/mockData';
import { Flame, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0e0e10] border-t border-[#2a2a2c] text-[#cdc7aa] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#201f21]">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Fuego Dulce"
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(253,228,0,0.3)]"
              />
              <span className="font-extrabold text-2xl uppercase tracking-tighter text-white">
                FUEGO<span className="text-[#fde400]">DULCE</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              Gomitas artesanales de alto octanaje con chile morita, habanero y chamoy puro. Nutrición extrema e impacto sensorial calibrado para atletas de alto rendimiento y almas de fuego.
            </p>

            <div className="flex items-center gap-2 text-[#d20402]">
              <Flame className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                100% Hecho en México con Chiles Nativos
              </span>
            </div>
          </div>

          {/* Tactical Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-widest font-black">
              Navegación Táctica
            </span>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                <button
                  onClick={() => onNavigate('productos')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Catálogo de Alto Voltaje
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                <button
                  onClick={() => onNavigate('mayoristas')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Programa Mayoristas & Distribuidores
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                <button
                  onClick={() => onNavigate('team-fuego')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Team Atletas & Patrocinios
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                <button
                  onClick={() => onNavigate('especificaciones')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Certificaciones Sanitarias COFEPRIS
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                <button
                  onClick={() => onNavigate('especificaciones', 'tabla-comparativa')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Términos de Garantía Térmica 38°C
                </button>
              </li>
            </ul>
          </div>

          {/* Logistics Hubs */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-widest font-black">
              Centros Logísticos
            </span>

            <div className="space-y-2.5">
              <div className="p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl text-xs">
                <div className="flex items-center justify-between text-white mb-1">
                  <span className="font-black uppercase text-[#fde400]">Hub CDMX</span>
                  <span className="text-[10px] bg-[#2a2a2c] px-2 py-0.5 rounded font-mono">Central</span>
                </div>
                <p className="text-[11px] text-[#cdc7aa]">
                  Parque Industrial Vallejo, Nave 4. Entregas express metropolitanas en 24h.
                </p>
              </div>

              <div className="p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl text-xs">
                <div className="flex items-center justify-between text-white mb-1">
                  <span className="font-black uppercase text-[#fde400]">Hub GDL</span>
                  <span className="text-[10px] bg-[#2a2a2c] px-2 py-0.5 rounded font-mono">Occidente</span>
                </div>
                <p className="text-[11px] text-[#cdc7aa]">
                  Zona Industrial Zapopan Norte. Despachos rápidos para la zona Pacífico y Bajío.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Support */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-widest font-black">
              Soporte Directo
            </span>
            <p className="text-xs">
              Atención B2B y pedidos de flota inmediata 24/7 vía canal encriptado.
            </p>

            <a
              href="https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20requiero%20atencion%20directa%20B2B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d20402] hover:bg-red-700 text-white px-3 py-2 text-xs uppercase font-extrabold rounded-lg shadow-[2px_2px_0px_#000000] transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Mesa WhatsApp</span>
            </a>

            <div className="p-2 bg-[#1b1b1d] border border-[#2a2a2c] rounded-lg flex items-center gap-2 text-[10px] text-white">
              <ShieldCheck className="w-4 h-4 text-[#fde400] shrink-0" />
              <span className="font-mono">COFEPRIS REG. 223300516X</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#cdc7aa]">
          <div className="flex items-center gap-3">
            <span>© 2025 Fuego Dulce S.A.P.I. de C.V.</span>
            <span>•</span>
            <span>Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#fde400] font-bold">Adrenalina Pura</span>
            <span className="w-1 h-1 rounded-full bg-[#353437]" />
            <span>Bajo en Azúcares Refinadas</span>
            <span className="w-1 h-1 rounded-full bg-[#353437]" />
            <span>Electrolitos Nativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
