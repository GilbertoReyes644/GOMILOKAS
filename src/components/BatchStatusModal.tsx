import React from 'react';
import { X, ShieldAlert, Truck, Thermometer, CheckCircle2, MapPin, Radio } from 'lucide-react';

interface BatchStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BatchStatusModal: React.FC<BatchStatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1b1b1d] border-2 border-[#fde400] w-full max-w-lg rounded-2xl p-6 relative shadow-[0_20px_50px_rgba(253,228,0,0.2)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#201f21] border border-[#353437] text-white hover:text-[#fde400] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d20402] animate-ping" />
          <span className="text-[11px] font-mono text-[#fde400] font-black uppercase tracking-widest">
            TELEMETRÍA EN VIVO DE PRODUCCIÓN
          </span>
        </div>

        <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-none mb-1">
          LOTE N° 08-2025 // EN RUTA ACTIVA
        </h3>
        <p className="text-xs text-[#cdc7aa] mb-4">
          Monitoreo térmico e inocuidad en tiempo real para centros de despacho DHL Express y Estafeta.
        </p>

        {/* Telemetry Status Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-4">
          <div className="p-3 bg-[#201f21] rounded-xl border border-[#2a2a2c]">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Control Térmico</span>
            <div className="text-base font-black text-[#fde400] flex items-center gap-1 mt-0.5">
              <Thermometer className="w-4 h-4 text-[#d20402]" />
              21.8°C ESTABLE
            </div>
            <span className="text-[10px] text-[#cdc7aa]">Límite crítico: 38.4°C</span>
          </div>

          <div className="p-3 bg-[#201f21] rounded-xl border border-[#2a2a2c]">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Humedad en Sala</span>
            <div className="text-base font-black text-white flex items-center gap-1 mt-0.5">
              <Radio className="w-4 h-4 text-[#fde400]" />
              28.4% RH
            </div>
            <span className="text-[10px] text-[#cdc7aa]">Norma: &lt; 35% RH</span>
          </div>
        </div>

        {/* Route Milestones */}
        <div className="bg-[#201f21] p-3.5 rounded-xl border border-[#2a2a2c] space-y-3 mb-4 text-xs">
          <span className="text-[10px] font-black uppercase text-[#fde400] tracking-wider block">
            Ruta Logística Metropolitana & Regional:
          </span>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#fde400] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block">06:00 AM — Laboratorio Central CDMX</span>
              <span className="text-[11px] text-[#cdc7aa]">Inspección de brix, acidez y sellado UV 100% aprobado.</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#fde400] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block">11:30 AM — HUB Vallejo Express</span>
              <span className="text-[11px] text-[#cdc7aa]">Embalaje isotérmico con aislamiento de foil reflectante.</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Truck className="w-4 h-4 text-[#ffb4a8] shrink-0 mt-0.5 animate-pulse" />
            <div>
              <span className="text-[#fde400] font-bold block">15:45 PM — En Tránsito a GDL & Monterrey</span>
              <span className="text-[11px] text-[#cdc7aa]">Despacho en flota prioritaria con garantía de reposición.</span>
            </div>
          </div>
        </div>

        {/* Regulatory Seal */}
        <div className="p-3 bg-[#131315] rounded-xl border border-[#353437] flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Certificación Sanitaria</span>
            <span className="font-bold text-white uppercase">COFEPRIS REG. 223300516X</span>
          </div>
          <span className="text-[10px] bg-[#fde400] text-black font-black px-2 py-1 rounded uppercase">
            VERIFICADO
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-[2px_2px_0px_#000000]"
        >
          Entendido / Cerrar Telemetría
        </button>
      </div>
    </div>
  );
};
