import React from 'react';
import { BUSINESS_CONFIG, DELIVERY_POINTS, TECHNICAL_FAQS } from '../data/mockData';
import { 
  MapPin, 
  GraduationCap, 
  PhoneCall, 
  Clock, 
  Package, 
  CheckCircle2, 
  Coins,
  ShieldCheck,
  Sparkles,
  Flame,
  Scale,
  Maximize2,
  FileText,
  AlertCircle
} from 'lucide-react';

export const SpecsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 selection:bg-[#fde400] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER // TACTICAL DOSSIER */}
        <div className="border-b border-[#2a2a2d] pb-8 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/30">
              <FileText className="w-3.5 h-3.5 text-[#25D366]" />
              FICHA TÉCNICA // ESPECIFICACIONES TÁCTICAS
            </div>
            <div className="text-xs font-mono text-[#cdc7aa]">
              BOLSA 10.5 x 15 CM • <span className="text-[#fde400] font-bold">100G NETOS = $15 MXN</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            ANATOMÍA DEL PRODUCTO & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde400] via-[#ffe066] to-[#25D366]">
              RUTAS DE ENTREGA EN CAMPUS
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#cdc7aa] max-w-3xl leading-relaxed">
            La verdad sin adornos: cada detalle de la bolsa de 100g de Gomilokas está pensado para ser práctico, limpio y resistente a la vida de mochila universitaria.
          </p>
        </div>

        {/* BLUEPRINT PACKAGING DIAGRAM */}
        <div className="bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-[#2a2a2c] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#fde400] font-bold block mb-1">
                DIAGRAMA ESTRUCTURAL DE EMPAQUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-headline">
                FORMATO OFICIAL: BOLSA 10.5 X 15 CM (100G)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#25D366] bg-[#201f21] px-3 py-1.5 rounded-lg border border-[#353437] self-start md:self-auto font-bold">
              CONTROL ANTI-DERRAMES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Schematic Box */}
            <div className="lg:col-span-5 bg-[#131315] border-2 border-dashed border-[#fde400]/40 rounded-2xl p-6 text-center space-y-4 relative">
              <div className="inline-block border-2 border-[#fde400] bg-[#1b1b1d] rounded-xl p-6 shadow-inner w-56 mx-auto relative">
                
                {/* Dimensions indicators */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fde400] text-black font-mono font-black text-[10px] px-2 py-0.5 rounded">
                  ANCHO: 10.5 CM
                </div>

                <div className="absolute -right-7 top-1/2 -translate-y-1/2 bg-[#fde400] text-black font-mono font-black text-[10px] px-1.5 py-0.5 rounded rotate-90">
                  ALTO: 15 CM
                </div>

                <div className="space-y-2 py-4">
                  <span className="text-xs font-mono text-[#ff4d4d] font-bold block">
                    GOMILOKAS
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#fde400]/20 border border-[#fde400] mx-auto flex items-center justify-center text-white font-black text-sm">
                    100g
                  </div>
                  <span className="text-[11px] text-white font-bold block">
                    Aros de Manzana
                  </span>
                  <span className="text-[10px] font-mono text-[#25D366] block">
                    Sellado Térmico Hermético
                  </span>
                </div>

                <div className="border-t border-[#353437] pt-2 text-[10px] font-mono text-[#fde400]">
                  $15.00 MXN
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#cdc7aa]">
                Dimensiones ideales para caber en bolsas de chamarras y bolsillos de mochila.
              </div>
            </div>

            {/* Tactical Technical Specs Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-[#131315] p-4 rounded-xl border border-[#2a2a2c] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#fde400] font-bold">
                    <Scale className="w-4 h-4" />
                    <span>PESO NETO</span>
                  </div>
                  <span className="text-xl font-black text-white font-mono">100 Gramos</span>
                  <span className="text-[11px] text-[#cdc7aa] block">Despachadas con báscula individual.</span>
                </div>

                <div className="bg-[#131315] p-4 rounded-xl border border-[#2a2a2c] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#25D366] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>TIPO DE SELLADO</span>
                  </div>
                  <span className="text-xl font-black text-white font-mono">Termosellado</span>
                  <span className="text-[11px] text-[#cdc7aa] block">Hermético al calor, cero fugas.</span>
                </div>

                <div className="bg-[#131315] p-4 rounded-xl border border-[#2a2a2c] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ff4d4d] font-bold">
                    <Flame className="w-4 h-4" />
                    <span>RECETA CHAMOY</span>
                  </div>
                  <span className="text-xl font-black text-white font-mono">No-Drip Denso</span>
                  <span className="text-[11px] text-[#cdc7aa] block">Se adhiere a la gomita sin gotear.</span>
                </div>

                <div className="bg-[#131315] p-4 rounded-xl border border-[#2a2a2c] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#fde400] font-bold">
                    <Coins className="w-4 h-4" />
                    <span>PRECIO POR BOLSA</span>
                  </div>
                  <span className="text-xl font-black text-[#fde400] font-mono">$15.00 MXN</span>
                  <span className="text-[11px] text-[#cdc7aa] block">Precio parejo y accesible para estudiantes.</span>
                </div>

              </div>

              {/* Backpack Stress Test */}
              <div className="bg-[#131315] p-4 rounded-xl border border-[#353437] space-y-2">
                <span className="text-xs font-mono uppercase text-[#fde400] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  PRUEBA DE MOCHILA UNIVERSITARIA (BACKPACK APPROVED)
                </span>
                <p className="text-xs text-[#cdc7aa] leading-relaxed">
                  Probado dentro de mochilas con libros, cuadernos y calculadoras: el termosellado evita que la presión reviente la bolsa y el chamoy espeso evita que escurra líquido sobre tus apuntes.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* LOGISTICS & DELIVERY HUBS */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] font-bold block mb-1">
              LOGÍSTICA DE ENTREGA LOCAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-headline">
              PUNTOS DE ENCUENTRO Y ENTREGAS DIRECTAS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-3xl p-6 sm:p-8 space-y-4 hover:border-[#fde400]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400]">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono uppercase bg-[#201f21] text-[#fde400] px-2.5 py-1 rounded-full border border-[#353437] font-bold inline-block">
                CAMPUS UNIVERSITARIO
              </span>

              <h3 className="text-xl font-black uppercase text-white tracking-tight">
                Entregas en la Uni
              </h3>

              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Te las entrego en mano en tu facultad: en el descanso, cafetería, pasillos o cambio de clase. Solo me mandas un WhatsApp 10 minutos antes y nos vemos.
              </p>

              <div className="pt-2 text-xs font-mono text-[#fde400] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Lunes a Viernes (Horario escolar)</span>
              </div>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-3xl p-6 sm:p-8 space-y-4 hover:border-[#25D366]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#25D366]">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono uppercase bg-[#201f21] text-[#25D366] px-2.5 py-1 rounded-full border border-[#353437] font-bold inline-block">
                LOCAL HQ
              </span>

              <h3 className="text-xl font-black uppercase text-white tracking-tight">
                Villa de Tezontepec, Hgo
              </h3>

              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Para la gente del municipio: acordamos por WhatsApp un punto céntrico conocido (parque, centro, tienda) para entregarte tus bolsas de aros frescas.
              </p>

              <div className="pt-2 text-xs font-mono text-[#25D366] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Toda la semana (Previa coordinación)</span>
              </div>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-3xl p-6 sm:p-8 space-y-4 hover:border-[#fde400]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400]">
                <Coins className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono uppercase bg-[#201f21] text-[#fde400] px-2.5 py-1 rounded-full border border-[#353437] font-bold inline-block">
                PAGO DIRECTO
              </span>

              <h3 className="text-xl font-black uppercase text-white tracking-tight">
                Efectivo & Transferencia
              </h3>

              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Sin comisiones de pasarelas ni tarjetas registradas:
              </p>
              
              <ul className="text-xs text-[#cdc7aa] space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span><strong>Efectivo</strong> en mano al momento de entrega.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span><strong>Transferencia SPEI</strong> rápida desde tu cel.</span>
                </li>
              </ul>

              <div className="pt-2 text-xs font-mono text-[#cdc7aa]">
                Transparente, rápido y sin vueltas.
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM WHATSAPP RADAR CTA */}
        <div className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-black uppercase text-white tracking-tight font-headline">
            ¿QUIERES APARTAR TUS BOLSAS PARA HOY?
          </h3>
          <p className="text-xs sm:text-sm text-[#cdc7aa] max-w-lg mx-auto">
            Mándame un mensaje al WhatsApp con la cantidad que necesitas y coordinamos la entrega en tu salón o en Villa de Tezontepec.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gilberto! Vi la ficha técnica y quiero pedir unas bolsas de Aros de Manzana de 100g'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Pedir por WhatsApp ({BUSINESS_CONFIG.phone})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
