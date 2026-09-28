import React from 'react';
import { X, MapPin, GraduationCap, CheckCircle2, PhoneCall, Radio, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, CAMPUS_DROP_STATUS } from '../data/mockData';

interface BatchStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BatchStatusModal: React.FC<BatchStatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1b1b1d] border-2 border-[#fde400] w-full max-w-lg rounded-3xl p-6 relative shadow-[0_20px_50px_rgba(253,228,0,0.25)] overflow-hidden">
        
        {/* Background glow & subtle pattern */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#fde400]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#201f21] border border-[#353437] text-white hover:text-[#fde400] transition-colors cursor-pointer z-10"
          aria-label="Cerrar ventana de radar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Radar Indicator */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
          <span className="text-[11px] font-mono text-[#fde400] font-black uppercase tracking-widest flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#25D366]" />
            RADAR DE ENTREGAS EN VIVO // GOMILOKAS
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight mb-2">
          PUNTOS DE CONTACTO & DROP DEL DÍA
        </h3>
        
        <p className="text-xs text-[#cdc7aa] mb-5 leading-relaxed">
          Horarios reales de entrega mano a mano con Gilberto. Sin envíos caros ni paqueterías lentas: directo en tu mano en la universidad o en Villa de Tezontepec.
        </p>

        {/* Status Grid Cards */}
        <div className="grid grid-cols-2 gap-3 text-xs mb-4">
          <div className="p-3.5 bg-[#201f21] rounded-2xl border border-[#2a2a2c] space-y-1">
            <span className="text-[10px] text-[#cdc7aa] uppercase font-mono block">Estatus de Producción</span>
            <div className="text-sm font-black text-[#25D366] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              LOTE RECIÉN PREPARADO
            </div>
            <span className="text-[10px] text-[#cdc7aa] block">Gomitas suaves y frescas</span>
          </div>

          <div className="p-3.5 bg-[#201f21] rounded-2xl border border-[#2a2a2c] space-y-1">
            <span className="text-[10px] text-[#cdc7aa] uppercase font-mono block">Precio & Formato</span>
            <div className="text-sm font-black text-[#fde400] font-mono">
              $15.00 MXN / 100g
            </div>
            <span className="text-[10px] text-[#cdc7aa] block">Bolsa 10.5 x 15 cm</span>
          </div>
        </div>

        {/* Delivery Points Schedule */}
        <div className="bg-[#201f21] p-4 rounded-2xl border border-[#2a2a2c] space-y-3 mb-5 text-xs">
          <span className="text-[10px] font-black uppercase text-[#fde400] tracking-widest block font-mono">
            RUTAS CONFIRMADAS DE ENTREGA:
          </span>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3 bg-[#131315] p-3 rounded-xl border border-[#353437]">
              <div className="w-7 h-7 rounded-lg bg-[#201f21] flex items-center justify-center text-[#fde400] shrink-0 border border-[#353437]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-white uppercase text-xs block">
                  Campus Universitario (Lunes a Viernes)
                </span>
                <span className="text-[11px] text-[#cdc7aa]">
                  Descansos, cambios de hora o cafetería. Mándame Whats y nos vemos en minutos.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#131315] p-3 rounded-xl border border-[#353437]">
              <div className="w-7 h-7 rounded-lg bg-[#201f21] flex items-center justify-center text-[#25D366] shrink-0 border border-[#353437]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-white uppercase text-xs block">
                  Villa de Tezontepec, Hgo (Toda la semana)
                </span>
                <span className="text-[11px] text-[#cdc7aa]">
                  Entregas locales acordadas por WhatsApp en puntos conocidos del municipio.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Call to action */}
        <div className="pt-1">
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
              'Hola Gilberto! Vi el radar de entregas y quiero pedir unas bolsas de aros de manzana'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#25D366] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Confirmar Entrega por WhatsApp ({BUSINESS_CONFIG.phone})</span>
          </a>
        </div>

      </div>
    </div>
  );
};
