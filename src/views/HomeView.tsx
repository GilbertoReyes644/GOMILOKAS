import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { PRODUCTS_DATA } from '../data/mockData';
import { 
  Flame, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Star, 
  ShieldCheck, 
  PhoneCall, 
  Activity, 
  Package, 
  Award,
  Sparkles
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product, size: '150g' | '250g' | '500g' | '2.5kg', quantity: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProductModal,
  onAddToCart,
}) => {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'mas-vendidos' | 'clasicos' | 'extrema'>('todos');

  // Interactive Profit Simulator Mini-state for Home View
  const [bagsCount, setBagsCount] = useState(100);

  const calculateMiniProfit = (bags: number) => {
    let cost = 60;
    if (bags >= 500) cost = 54;
    else if (bags >= 250) cost = 56;
    else if (bags >= 100) cost = 60;
    else if (bags >= 50) cost = 65;
    else cost = 70;

    const pvp = 120;
    const investment = bags * cost;
    const revenue = bags * pvp;
    const profit = revenue - investment;
    const margin = Math.round((profit / revenue) * 100);

    return { cost, investment, revenue, profit, margin };
  };

  const currentStats = calculateMiniProfit(bagsCount);

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (filterCategory === 'todos') return true;
    if (filterCategory === 'mas-vendidos') return p.isBestSeller || p.badge;
    if (filterCategory === 'clasicos') return p.heatLevel === 'bravo' || p.heatLevel === 'agil';
    if (filterCategory === 'extrema') return p.heatLevel === 'fuego';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Image 9 style) */}
      <section className="relative w-full bg-[#0e0e10] overflow-hidden border-b border-[#2a2a2c]">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#2a2a2c_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute -top-24 -left-20 w-[32rem] h-[32rem] rounded-full bg-[#d20402]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[36rem] h-[36rem] rounded-full bg-[#fde400]/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Kinetic Headlines & Pitch */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1b1b1d] border border-[#fde400]/40 rounded-full shadow-[0_0_15px_rgba(253,228,0,0.15)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fde400] animate-ping" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#fde400] font-black font-mono">
                  ADRENALINA & ALTO IMPACTO ENERGÉTICO
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-white tracking-tight uppercase font-black">
                EL COMBUSTIBLE DE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde400] via-[#fff066] to-white drop-shadow-[0_0_25px_rgba(253,228,0,0.5)]">
                  PICOR
                </span>{' '}
                Y{' '}
                <span className="text-[#d20402] drop-shadow-[0_0_20px_rgba(210,4,2,0.6)]">
                  DULZURA EXTREMA.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#cdc7aa] max-w-2xl font-normal">
                Despierta tu adrenalina con gomitas bañadas en chamoy espeso, miguelito auténtico y un toque balanceador ultra secreto que potencia cada mordida sin escurrir. Creadas para desafiar tus límites y reventar la rutina.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
                <a
                  href="https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20hacer%20un%20pedido%20de%20combustible%20extremo%20ahora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#fde400] text-black rounded-xl font-black text-sm tracking-wider uppercase hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(253,228,0,0.4)]"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Pedir por WhatsApp Ahora</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('catalogo');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#201f21] border border-[#353437] text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:border-[#fde400] hover:text-[#fde400] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>Ver Sabores Extremos</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>

              {/* Micro Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 w-full">
                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#201f21] flex items-center justify-center text-[#d20402] shrink-0 border border-[#353437]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Chamoy Artesanal Espeso
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">Receta de adherencia pura</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#201f21] flex items-center justify-center text-[#fde400] shrink-0 border border-[#353437]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Miguelito & Chiles
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">Toque sutil balanceador</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#201f21] flex items-center justify-center text-white shrink-0 border border-[#353437]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Energía & Sabor Puro
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">Combustible on-the-go</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset with Overlays */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#d20402] via-[#fde400] to-[#d20402] rounded-3xl opacity-75 blur-md" />
                <div className="relative bg-[#0e0e10] border border-[#353437] rounded-2xl overflow-hidden shadow-2xl p-2">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1UB6CJcR6s5v2RV6L-z1pYMKsqLSMBJhqBEelDXPpFqEWI3rpyTq4NCgWd4STeLguW2FGyj5QPwwhXY54IWbBiEhbkTVE_ae33IFMoWjN23Gqt2AD_UY30YF8-UZQYVP0emzr2fHz8Fj4ZNtAevcS8w6zDJShv5mM0blSXtHFX5snuSzJ1acQNueYcSDsDl6ekB22m-4ASOgFekz7lpRbbeU7BtOWAv6ZCpEjcM3C4rLhY26nHT5x0tx0W6"
                    alt="Atleta en cumbre disfrutando gomitas Fuego Dulce"
                    className="w-full h-[460px] object-cover rounded-xl"
                  />

                  {/* Overlays */}
                  <div className="absolute top-5 left-5 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#fde400]/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#fde400] animate-pulse" />
                    <span className="text-[11px] font-black uppercase text-[#fde400] tracking-widest font-mono">
                      NIVEL DE ENERGÍA: MÁXIMO
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 w-18 h-18 bg-[#d20402] text-white rounded-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center p-1 text-center -rotate-6">
                    <Zap className="w-5 h-5 text-[#fde400]" />
                    <span className="text-[9px] leading-tight uppercase font-black tracking-tighter">
                      POTENCIA PURA
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 bg-black/90 backdrop-blur-md p-3.5 rounded-xl border border-[#353437] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex text-[#d20402]">
                        <Flame className="w-4 h-4 fill-current" />
                        <Flame className="w-4 h-4 fill-current" />
                        <Flame className="w-4 h-4 fill-current" />
                      </span>
                      <div>
                        <span className="text-[10px] uppercase text-[#fde400] font-black tracking-widest block">
                          PICOR ESTIMADO
                        </span>
                        <span className="text-xs font-black text-white uppercase">
                          IMPACTO TOTAL
                        </span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-[#353437]" />
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-[#cdc7aa] font-black tracking-widest block">
                        ESTILO DE VIDA
                      </span>
                      <span className="text-xs font-black text-[#fde400] uppercase">
                        DESAFÍA LA RUTINA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS DYNAMIC MARQUEE TICKER */}
      <div className="w-full bg-[#18181b] border-y-2 border-[#fde400] overflow-hidden py-3 select-none shadow-[0_0_20px_rgba(253,228,0,0.2)]">
        <div className="animate-marquee text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-white flex items-center gap-6">
          <span className="flex items-center gap-2 text-[#fde400]">
            <Zap className="w-4 h-4 text-[#d20402]" /> 100% ARTESANAL MEXICANO
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#d20402]" /> CHAMOY ESPESO & MIGUELITO
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2 text-[#fde400]">
            <ShieldCheck className="w-4 h-4 text-[#fde400]" /> FÓRMULA DE ADHERENCIA CERO RESIDUOS
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#d20402]" /> COMBUSTIBLE PARA ENTRENAMIENTOS EXTREMOS
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2 text-[#fde400]">
            <PhoneCall className="w-4 h-4 text-[#fde400]" /> PEDIDOS DIRECTOS POR WHATSAPP
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2">
            <Package className="w-4 h-4 text-[#d20402]" /> MARGEN MAYORISTA HASTA 55%
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2 text-[#fde400]">
            <Zap className="w-4 h-4 text-[#d20402]" /> 100% ARTESANAL MEXICANO
          </span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#d20402]" /> CHAMOY ESPESO & MIGUELITO
          </span>
          <span className="text-white/40">•</span>
        </div>
      </div>

      {/* 3. ARSENAL DE ALTO OCTANAJE (FEATURED CATALOG) */}
      <section className="w-full bg-[#131315] py-16 border-b border-[#2a2a2c]" id="catalogo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#fde400] font-black uppercase tracking-[0.2em] text-xs mb-1">
                <Flame className="w-4 h-4 text-[#d20402]" />
                <span>ARSENAL DE ALTO OCTANAJE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-white uppercase font-black tracking-tight">
                SABORES EXTREMOS FUEGO DULCE
              </h2>
              <p className="text-xs sm:text-sm text-[#cdc7aa] mt-1 max-w-xl">
                Glaseado ultra-denso de chamoy espeso con miguelito gourmet y la fórmula secreta de toque sutil balanceador.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#0e0e10] border border-[#2a2a2c] rounded-xl">
              {(['todos', 'mas-vendidos', 'clasicos', 'extrema'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs uppercase font-black transition-all cursor-pointer ${
                    filterCategory === cat
                      ? 'bg-[#fde400] text-black shadow-sm'
                      : 'text-[#cdc7aa] hover:text-white'
                  }`}
                >
                  {cat === 'todos' && 'Todos'}
                  {cat === 'mas-vendidos' && 'Más Vendidos'}
                  {cat === 'clasicos' && 'Clásicos'}
                  {cat === 'extrema' && 'Línea Nitro'}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#1b1b1d] border border-[#2a2a2c] hover:border-[#fde400] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative aspect-square bg-[#0e0e10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-[#fde400]/80 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#d20402]" />
                    <span className="text-[10px] font-black text-[#fde400] uppercase font-mono">
                      {p.heatTag.split('//')[0]}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 bg-[#d20402] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                    {p.availableSizes[0]}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#fde400] font-black uppercase tracking-wider">
                        {p.category}
                      </span>
                      <span className="text-xl font-black text-white font-mono">
                        ${p.price} <span className="text-xs text-[#cdc7aa]">MXN</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white uppercase leading-snug group-hover:text-[#fde400] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#cdc7aa] mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-[#2a2a2c]">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenProductModal(p)}
                        className="py-2.5 bg-[#201f21] hover:bg-[#2a2a2c] border border-[#353437] text-white text-xs uppercase font-bold rounded-lg transition-all text-center cursor-pointer"
                      >
                        Ver Ficha
                      </button>
                      <button
                        onClick={() => onAddToCart(p, p.availableSizes[0], 1)}
                        className="py-2.5 bg-[#353437] hover:bg-white hover:text-black text-white text-xs uppercase font-bold rounded-lg transition-all text-center cursor-pointer"
                      >
                        + A la Bolsa
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20pedir%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000000]"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Pedir por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('productos')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#201f21] hover:bg-[#fde400] hover:text-black border border-[#353437] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              <span>Ver Todo el Despliegue Táctico (7 Productos + Cubeta Bulk)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ESPECIFICACIONES & CALIDAD SUMMARY */}
      <section className="w-full bg-[#0e0e10] py-16 border-b border-[#2a2a2c]" id="especificaciones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 text-[#fde400] font-black uppercase tracking-[0.2em] text-xs mb-1">
              <ShieldCheck className="w-4 h-4 text-[#fde400]" />
              <span>INGENIERÍA DEL SABOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-white uppercase font-black">
              Especificaciones & Calidad
            </h2>
            <p className="text-sm text-[#cdc7aa] mt-1">
              Confeccionadas con rigor artesanal para resistir el calor, los entrenamientos y las aventuras más exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#201f21] text-[#d20402] flex items-center justify-center mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white uppercase mb-1">
                  Glaseado en Cobre
                </h3>
                <p className="text-xs text-[#cdc7aa] leading-relaxed">
                  Reducción a fuego lento de tamarindo y jamaica. Cero escurrimiento, no se encharca en la bolsa.
                </p>
              </div>
              <span className="text-[10px] text-[#fde400] font-bold uppercase mt-4 block">
                ✓ Cero Escurrimiento
              </span>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#201f21] text-[#fde400] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white uppercase mb-1">
                  4 Chiles & Miguelito
                </h3>
                <p className="text-xs text-[#cdc7aa] leading-relaxed">
                  Molienda volcánica de ancho, guajillo, pasilla y piquín. Tostado de ataque al comal tradicional.
                </p>
              </div>
              <span className="text-[10px] text-[#fde400] font-bold uppercase mt-4 block">
                ✓ Tostado al Comal
              </span>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#201f21] text-white flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white uppercase mb-1">
                  Textura Anti-Goo
                </h3>
                <p className="text-xs text-[#cdc7aa] leading-relaxed">
                  Fórmula secreta que sella la humedad exterior y crea una sensación crujiente sin dejar dedos pegajosos.
                </p>
              </div>
              <span className="text-[10px] text-[#fde400] font-bold uppercase mt-4 block">
                ✓ Grip Limpio
              </span>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#201f21] text-[#fde400] flex items-center justify-center mb-3">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white uppercase mb-1">
                  Sellado UV 180 Días
                </h3>
                <p className="text-xs text-[#cdc7aa] leading-relaxed">
                  Bolsa tricapa hermética. Resiste 38°C en ruta y conserva el picante intacto por 6 meses.
                </p>
              </div>
              <span className="text-[10px] text-[#fde400] font-bold uppercase mt-4 block">
                ✓ Grado Expedición
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('especificaciones')}
              className="text-xs uppercase font-extrabold text-[#fde400] hover:underline cursor-pointer"
            >
              Ver Documento Técnico Completo y Tabla Comparativa &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. LIFESTYLE: DE LA MONTAÑA AL GYM */}
      <section className="w-full bg-[#131315] py-16 border-b border-[#2a2a2c]" id="lifestyle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a2c] bg-black">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XGhXWQEusgWfNlw0Id1KJ3q6JJIoukT7oa2OA6qsqSqMNZg4EB2V5kRakqxsDTMoTKA90GFCEM5Sb1fJlDjBLIWB0QvMtYPmHB_6UbfvkH2tz-wLvy_hO6aUOactKauZD8JJQnfTYNT5gS-9rXXfWRdRdU6WrYtOHVrdP_guVZj06rylvxu3r4D5R7Zkgj4jJttbK26f88tVNTU4sFI9IUzSEZylAJbba55vka41NAiNt4seBeNu8SAZU"
                    alt="Crossfit gym lifestyle"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-4 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl">
                  <span className="text-xl font-black text-[#fde400] uppercase block">EN EL GYM</span>
                  <p className="text-xs text-[#cdc7aa] mt-1">
                    El golpe de glucosa y sal que despierta los sentidos antes del PR en la barra olímpica.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-gradient-to-br from-[#d20402] to-[#930000] text-white rounded-2xl">
                  <Zap className="w-6 h-6 text-[#fde400] mb-1" />
                  <span className="text-sm font-black uppercase block">EN LA CUMBRE</span>
                  <p className="text-[11px] text-white/90 mt-1">
                    Hiking y trail running outdoor sin derrames ni congelamiento bajo cero.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#2a2a2c] bg-black">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1UB6CJcR6s5v2RV6L-z1pYMKsqLSMBJhqBEelDXPpFqEWI3rpyTq4NCgWd4STeLguW2FGyj5QPwwhXY54IWbBiEhbkTVE_ae33IFMoWjN23Gqt2AD_UY30YF8-UZQYVP0emzr2fHz8Fj4ZNtAevcS8w6zDJShv5mM0blSXtHFX5snuSzJ1acQNueYcSDsDl6ekB22m-4ASOgFekz7lpRbbeU7BtOWAv6ZCpEjcM3C4rLhY26nHT5x0tx0W6"
                    alt="Summit action shot"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col space-y-4" id="quienes-somos">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#fde400]">
                EL COMBUSTIBLE DE TU DÍA
              </span>
              <h2 className="text-3xl sm:text-4xl text-white uppercase font-black leading-tight">
                De la Montaña al Gimnasio: El Snack Que Rompe lo Ordinario
              </h2>
              <p className="text-sm text-[#cdc7aa] leading-relaxed">
                Nacimos cansados de las botanas aburridas, los polvos desabridos y las gomitas aguadas que se convierten en sopa caliente en la mochila. Desarrollamos un proceso de adherencia térmica donde cada gomita retiene su firmeza, su acidez y su picor crujiente estés donde estés.
              </p>

              <div className="p-4 bg-[#1b1b1d] border-l-4 border-[#d20402] rounded-xl text-xs space-y-2">
                <p className="font-bold text-white uppercase">
                  "NO HACEMOS DULCES PARA PASAR EL RATO. CONSTRUIMOS EL SHOCK DE ADRENALINA MÁS INTENSO DE TU ENTRENAMIENTO."
                </p>
                <span className="text-[#fde400] font-black uppercase block">
                  Equipo Fuego Dulce Lab — Guadalajara / CDMX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM FUEGO SUMMARY & ATHLETES TEASER */}
      <section className="w-full bg-[#0a0a0c] py-16 border-b border-[#2a2a2c]" id="team-fuego">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1b1b1d] via-[#131315] to-[#0e0e10] border-2 border-[#2a2a2c] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] border border-[#fde400]/40 rounded-full w-fit">
                  <Award className="w-3.5 h-3.5 text-[#fde400]" />
                  <span className="text-[10px] font-black uppercase text-[#fde400] tracking-widest">
                    PATROCINIO DEPORTIVO ÉLITE
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl text-white font-black uppercase tracking-tight">
                  TEAM FUEGO // <span className="text-[#fde400]">PROGRAMA DE ATLETAS</span> & EMBAJADORES
                </h2>

                <p className="text-sm text-[#cdc7aa] leading-relaxed">
                  Buscamos atletas de CrossFit, Trail Running, Ciclismo MTB, Box y Deportes de Aventura que desafíen los límites. Recibe dotación mensual de combustible Fuego Dulce, códigos de comisión y apoyo para tus competencias oficiales.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl text-xs">
                    <span className="font-bold text-white uppercase block">Dotación Mensual</span>
                    <span className="text-[11px] text-[#cdc7aa]">30 paquetes directos</span>
                  </div>
                  <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl text-xs">
                    <span className="font-bold text-[#fde400] uppercase block">15% Comisión</span>
                    <span className="text-[11px] text-[#cdc7aa]">En tu código propio</span>
                  </div>
                  <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl text-xs">
                    <span className="font-bold text-white uppercase block">Kit Pro Exclusivo</span>
                    <span className="text-[11px] text-[#cdc7aa]">Jerseys & termos</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-center">
                <div className="w-full bg-[#131315] border-2 border-[#fde400] p-6 rounded-2xl text-center space-y-4 shadow-xl">
                  <span className="text-[10px] uppercase tracking-widest text-[#d20402] font-black block">
                    CONVOCATORIA ABIERTA 2025
                  </span>
                  <h3 className="text-xl font-black uppercase text-white">¿TIENES EL FUEGO?</h3>
                  <p className="text-xs text-[#cdc7aa]">
                    Postula tus métricas deportivas y redes sociales. Respondemos en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => onNavigate('team-fuego', 'convocatoria')}
                    className="w-full py-3 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-[2px_2px_0px_#000000] cursor-pointer"
                  >
                    Postular al Team Fuego
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE MARGIN SIMULATOR TEASER (MAYOREO) */}
      <section className="w-full bg-[#0e0e10] py-16 border-b border-[#2a2a2c]" id="mayoreo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#fde400] block mb-1">
              OPORTUNIDAD COMERCIAL DE ALTA ROTACIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl text-white uppercase font-black">
              Ventas por Mayor & Distribuidores
            </h2>
            <p className="text-xs sm:text-sm text-[#cdc7aa] mt-1">
              Monetiza el mostrador de tu gimnasio, box o tienda deportiva con márgenes de hasta 55% neto.
            </p>
          </div>

          {/* Interactive Calculator Component */}
          <div className="bg-[#1b1b1d] border-2 border-[#fde400] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#2a2a2c]">
              <div>
                <div className="inline-flex items-center gap-2 text-[#fde400] font-black uppercase tracking-wider text-xs mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>SIMULADOR DE RENTABILIDAD MAYORISTA EN TIEMPO REAL</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Calcula Tu Margen y Ganancia Neta</h3>
              </div>
              <span className="text-xs bg-[#201f21] border border-[#353437] text-white px-3 py-1.5 rounded-lg font-mono">
                Cálculo dinámico en MXN
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase font-black text-white tracking-wider">
                      Volumen del Pedido:
                    </label>
                    <span className="text-2xl font-black text-[#fde400] font-mono">
                      {bagsCount} Bolsas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={bagsCount}
                    onChange={(e) => setBagsCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-[#201f21] rounded-lg appearance-none cursor-pointer accent-[#fde400]"
                  />
                  <div className="flex justify-between text-[11px] text-[#cdc7aa] font-bold mt-1">
                    <span>20 (Min)</span>
                    <span>100 (Recomendado)</span>
                    <span>250</span>
                    <span>500 (Máster)</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-black tracking-widest text-[#cdc7aa] mb-2">
                    PRESETS RÁPIDOS:
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {[20, 50, 100, 250, 500].map((num) => (
                      <button
                        key={num}
                        onClick={() => setBagsCount(num)}
                        className={`py-2 rounded-lg text-xs font-black uppercase border transition-all cursor-pointer ${
                          bagsCount === num
                            ? 'bg-[#fde400] text-black border-[#fde400] shadow-sm'
                            : 'bg-[#201f21] text-white border-[#353437] hover:border-[#fde400]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl flex items-center justify-between text-xs">
                  <span className="text-[#cdc7aa]">Costo unitario mayorista:</span>
                  <span className="font-black text-white font-mono text-sm">
                    ${currentStats.cost} MXN / bolsa
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-[#131315] border border-[#2a2a2c] rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-[#cdc7aa] block">Inversión Estimada</span>
                    <span className="text-2xl font-black text-white font-mono">
                      ${currentStats.investment.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  <div className="p-4 bg-[#131315] border border-[#2a2a2c] rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-[#cdc7aa] block">Venta Sugerida Total</span>
                    <span className="text-2xl font-black text-white font-mono">
                      ${currentStats.revenue.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  <div className="p-4 bg-[#131315] border-2 border-emerald-500/60 rounded-2xl bg-emerald-950/20">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">Ganancia Neta</span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">
                      +${currentStats.profit.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  <div className="p-4 bg-[#131315] border-2 border-[#fde400]/70 rounded-2xl bg-yellow-950/20">
                    <span className="text-[10px] uppercase font-bold text-[#fde400] block">Margen de Utilidad</span>
                    <span className="text-2xl font-black text-[#fde400] font-mono">
                      {currentStats.margin}%
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20cotizar%20un%20pedido%20mayorista%20de%20${bagsCount}%20bolsas`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-[2px_2px_0px_#000000] flex items-center justify-center gap-2 text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Cotizar {bagsCount} Bolsas por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIOS ATLETAS */}
      <section className="w-full bg-[#131315] py-16 border-b border-[#2a2a2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#fde400] block mb-1">
              COMUNIDAD & IMPACTO
            </span>
            <h2 className="text-3xl sm:text-4xl text-white uppercase font-black">
              Testimonios de Atletas & Clientes Reales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-[#fde400] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-white italic leading-relaxed">
                  "Las llevo a mis rodadas de montaña. No se baten con el sol de mediodía y el golpe de chamoy espeso con miguelito me revive el ritmo cardíaco al instante."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2a2a2c] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white uppercase block">Sofía Méndez</span>
                  <span className="text-[10px] text-[#cdc7aa] uppercase">Trail Runner — Guadalajara</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#fde400]" />
              </div>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-[#fde400] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-white italic leading-relaxed">
                  "Pedimos 100 bolsas para los atletas de nuestra competencia de crossfit y volaron. La textura crujiente de su receta balanceadora no deja las manos pegajosas en la barra."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2a2a2c] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white uppercase block">Rodrigo Villaseñor</span>
                  <span className="text-[10px] text-[#cdc7aa] uppercase">Head Coach — Box Zapopan</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#fde400]" />
              </div>
            </div>

            <div className="bg-[#1b1b1d] border border-[#2a2a2c] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-[#fde400] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-white italic leading-relaxed">
                  "Las de Mango Habanero Nitro tienen un nivel de picor salvaje pero adictivo. Nada que ver con las gomitas artificiales del súper. El sabor es 100% adrenalina pura."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2a2a2c] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white uppercase block">Mateo Alcocer</span>
                  <span className="text-[10px] text-[#cdc7aa] uppercase">Deportista de Aventura — CDMX</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#fde400]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA WHATSAPP BANNER */}
      <section className="w-full bg-[#0e0e10] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#d20402] via-[#b80000] to-black text-white rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-[#d20402]/50 overflow-hidden">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-widest text-black bg-[#fde400] px-3 py-1 rounded-md inline-block mb-3 font-black">
                DESPACHO INMEDIATO Y PERSONALIZADO
              </span>
              <h3 className="text-3xl sm:text-4xl text-white uppercase font-black leading-tight">
                ¿LISTO PARA EL CHOQUE DE ADRENALINA?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-2">
                Haz tu pedido directo, ajusta tu nivel de picor favorito o gestiona lotes de mayoreo con nuestro equipo en tiempo real.
              </p>
            </div>

            <a
              href="https://wa.me/5215500000000?text=Hola%20Fuego%20Dulce,%20quiero%20hacer%20un%20pedido%20extremo%20ahora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fde400] text-black rounded-2xl font-black text-sm uppercase hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(253,228,0,0.5)] shrink-0"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
