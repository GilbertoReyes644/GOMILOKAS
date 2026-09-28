import React, { useState } from 'react';
import { WHOLESALE_TIERS, BUSINESS_CONFIG } from '../data/mockData';
import { 
  Calculator, 
  TrendingUp, 
  Package, 
  Check, 
  PhoneCall, 
  Sparkles, 
  GraduationCap, 
  MapPin,
  Coins
} from 'lucide-react';

export const WholesaleView: React.FC = () => {
  const [units, setUnits] = useState<number>(25);

  const getCostPerUnit = (qty: number) => {
    if (qty >= 50) return 10.00;
    if (qty >= 25) return 11.00;
    return 13.00;
  };

  const costPerUnit = getCostPerUnit(units);
  const pvpSuggested = 15.00;
  const totalInvestment = units * costPerUnit;
  const totalRevenue = units * pvpSuggested;
  const netProfit = totalRevenue - totalInvestment;

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#2a2a2d] pb-8 pt-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fde400] bg-[#fde400]/10 px-3 py-1 rounded-full border border-[#fde400]/30 mb-4">
            <Coins className="w-3.5 h-3.5 text-[#fde400]" />
            PAQUETES DE MAYOREO & REVENTA ENTRE AMIGOS
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            Gana dinero extra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde400] via-[#ffe066] to-white">
              vendiendo aros en la uni
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#cdc7aa] max-w-2xl leading-relaxed">
            Varios compañeros de la uni y amigos de Villa de Tezontepec compran por paquete para revender en su salón o tener en fiestas. Las compras a precio de mayoreo (desde $10 a $13 por bolsa) y las vendes al precio normal de $15.
          </p>
        </div>

        {/* Wholesale Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHOLESALE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                tier.recommended
                  ? 'bg-gradient-to-b from-[#1f1e24] to-[#161618] border-[#fde400] shadow-[0_0_30px_rgba(253,228,0,0.15)] relative'
                  : 'bg-[#1b1b1d] border-[#2a2a2c] hover:border-[#3a393e]'
              }`}
            >
              <div>
                {tier.recommended && (
                  <span className="inline-block bg-[#fde400] text-black font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow">
                    RECOMENDADO PARA ESTUDIANTES
                  </span>
                )}
                <div className="text-xs font-mono uppercase text-[#cdc7aa] font-bold">
                  {tier.name}
                </div>

                <div className="mt-4 mb-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    ${tier.costPerUnit.toFixed(2)}
                  </span>
                  <span className="text-xs text-[#cdc7aa]">MXN / bolsa</span>
                </div>

                <p className="text-xs text-[#cdc7aa] mb-6">
                  {tier.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#2a2a2c]">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#e5e1e4]">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hola Gilberto! Me interesa pedir el ${tier.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    tier.recommended
                      ? 'bg-[#fde400] text-black hover:bg-white shadow-lg'
                      : 'bg-[#201f21] hover:bg-[#25D366] hover:text-black text-white border border-[#353437]'
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Pedir este paquete</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Profit Simulator */}
        <div className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#fde400] font-bold block mb-1">
              CALCULADORA DE GANANCIAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              ¿Cuánto puedes ganar vendiendo en tu salón?
            </h2>
            <p className="text-xs text-[#cdc7aa] mt-1">
              Mueve la cantidad de bolsas para calcular cuánto inviertes y cuánto te queda de ganancia limpia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Slider */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-[#cdc7aa]">
                    Cantidad de bolsas de 100g:
                  </span>
                  <span className="text-2xl font-black text-[#fde400] font-mono">
                    {units} bolsas
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full h-2 bg-[#201f21] rounded-lg appearance-none cursor-pointer accent-[#fde400]"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#cdc7aa] mt-2">
                  <span>10 bolsas</span>
                  <span>25 bolsas</span>
                  <span>50 bolsas</span>
                  <span>100 bolsas</span>
                </div>
              </div>

              {/* Quick preset buttons */}
              <div className="flex gap-2">
                {[10, 25, 50, 100].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setUnits(preset)}
                    className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${
                      units === preset
                        ? 'bg-[#fde400] text-black border-[#fde400]'
                        : 'bg-[#201f21] text-[#cdc7aa] border-[#353437] hover:border-white'
                    }`}
                  >
                    {preset} pzas
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Results Card */}
            <div className="lg:col-span-6 bg-[#131315] border border-[#2a2a2c] rounded-2xl p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#1b1b1d] rounded-xl border border-[#2a2a2c]">
                  <span className="text-[11px] text-[#cdc7aa] block">Costo por bolsa:</span>
                  <span className="text-xl font-bold font-mono text-white">
                    ${costPerUnit.toFixed(2)} MXN
                  </span>
                </div>

                <div className="p-3 bg-[#1b1b1d] rounded-xl border border-[#2a2a2c]">
                  <span className="text-[11px] text-[#cdc7aa] block">Venta recomendada:</span>
                  <span className="text-xl font-bold font-mono text-white">
                    $15.00 MXN
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#201f21] to-[#1b1b1d] rounded-xl border border-[#353437] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#cdc7aa] block">Tu ganancia limpia:</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#25D366]">
                    +${netProfit.toFixed(2)} MXN
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#cdc7aa] block">Inversión inicial:</span>
                  <span className="text-sm font-bold font-mono text-white">
                    ${totalInvestment.toFixed(2)} MXN
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  `Hola Gilberto! Me gustaría pedir un paquete de ${units} bolsas de Aros de Manzana (Mayoreo)`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Pedir este paquete de {units} bolsas por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
