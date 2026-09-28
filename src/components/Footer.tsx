import React from 'react';
import { PageId } from '../types';
import { LOGO_URL, BUSINESS_CONFIG } from '../data/mockData';
import { Sparkles, PhoneCall, MapPin, GraduationCap, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0e0e10] border-t border-[#2a2a2c] text-[#cdc7aa] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#201f21]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="GOMILOKAS"
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(253,228,0,0.3)]"
              />
              <span className="font-extrabold text-2xl uppercase tracking-tighter text-white">
                GOMI<span className="text-[#fde400]">LOKAS</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-[#cdc7aa]">
              Aros de manzana verde enchilados con chamoy casero acidito y chilito en polvo que no escurre en tu mochila. Bolsa de 10.5 x 15 cm (100g) a solo $15 MXN.
            </p>

            <div className="flex items-center gap-2 text-[#25D366]">
              <Sparkles className="w-4 h-4 text-[#fde400]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Villa de Tezontepec, Hidalgo & Entregas en la Uni
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-widest font-black">
              Secciones
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Inicio & Portada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('productos')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Aros de Manzana (Bolsa $15)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('especificaciones')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Ficha Táctica & Rutas de Entrega
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mayoristas')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  Mayoreo & Reventa en Salón
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team-fuego')}
                  className="hover:text-[#fde400] transition-colors text-left cursor-pointer"
                >
                  El Crew // Gilberto (18 años)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs uppercase text-white tracking-widest font-black">
              Contacto Directo
            </span>

            <div className="space-y-2 text-xs text-[#cdc7aa]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fde400] shrink-0" />
                <span>Villa de Tezontepec, Hidalgo</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Entregas en campus universitario</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {BUSINESS_CONFIG.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Mandar WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#cdc7aa] gap-4">
          <p>© {new Date().getFullYear()} GOMILOKAS • Emprendimiento universitario de Gilberto en Villa de Tezontepec, Hgo.</p>
          <div className="flex items-center gap-1 text-[#fde400]">
            <Heart className="w-3.5 h-3.5 text-[#d20402]" />
            <span>Aros de manzana hechos con cariño</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
