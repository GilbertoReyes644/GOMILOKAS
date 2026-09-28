import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { 
  PRODUCTS_DATA, 
  BUSINESS_CONFIG, 
  CAMPUS_REVIEWS, 
  TECHNICAL_FAQS, 
  AROS_IMAGE, 
  CAMPUS_DROP_STATUS 
} from '../data/mockData';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  PhoneCall, 
  Package, 
  Flame,
  ChevronDown,
  ShoppingBag,
  Clock,
  ShieldCheck,
  Zap,
  Radio,
  Star,
  Users
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product, size: '100g' | '150g' | '250g' | '500g' | '2.5kg', quantity: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProductModal,
  onAddToCart,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [flavorMode, setFlavorMode] = useState<'balanceado' | 'extra-chile'>('balanceado');
  const [quickQty, setQuickQty] = useState<number>(3);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const starProduct = PRODUCTS_DATA[0];

  // Quick order calculator
  const getPackPrice = (qty: number) => {
    if (qty >= 10) return qty * 13;
    if (qty >= 5) return 70 + (qty - 5) * 14;
    return qty * 15;
  };

  const calculatedTotal = getPackPrice(quickQty);

  return (
    <div className="flex flex-col w-full selection:bg-[#fde400] selection:text-black">
      
      {/* 1. HERO SECTION // HIGH-OCTANE STREETWEAR ENERGY */}
      <section className="relative w-full bg-[#0e0e10] overflow-hidden border-b border-[#2a2a2c]">
        {/* Subtle grid and ambient neon flares */}
        <div className="absolute inset-0 bg-[radial-gradient(#2a2a2c_1px,transparent_1px)] [background-size:20px_20px] opacity-35" />
        <div className="absolute -top-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-[#fde400]/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#ff2a2a]/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-[#25D366]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Bold Typography & Brand Pitch */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Tactical Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#1b1b1d] border border-[#fde400]/50 rounded-full shadow-[0_0_20px_rgba(253,228,0,0.18)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider text-[#fde400] font-bold font-mono">
                  DROP REAL • VILLA DE TEZONTEPEC & CAMPUS UNIVERSITARIO
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#cdc7aa] font-bold flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#ff4d4d]" />
                  <span>EL ANTOJO UNIVERSITARIO QUE NO TIENE RIVAL</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-white tracking-tight uppercase font-black font-headline">
                  AROS DE MANZANA{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde400] via-[#ffe066] to-[#ff2a2a] drop-shadow-[0_0_25px_rgba(253,228,0,0.45)]">
                    ENCHILADOS
                  </span>
                </h1>
              </div>

              {/* Subheading with truthful punch */}
              <p className="text-base sm:text-lg leading-relaxed text-[#cdc7aa] max-w-xl font-medium">
                Gomitas suaves de manzana verde con chamoy casero acidito y mezcla de chilitos secos. 
                <strong className="text-white"> Viscosidad perfecta que no escurre en tu mochila</strong> ni deja pegajosos tus apuntes en clase. Bolsa de 10.5 x 15 cm (100g) a solo <strong className="text-[#fde400] font-mono">$15 MXN</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full pt-1">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g para entrega en la Uni / Villa de Tezontepec'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-black rounded-xl font-black text-sm tracking-wider uppercase hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(37,211,102,0.35)] cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Pedir por WhatsApp (${BUSINESS_CONFIG.singlePrice} c/u)</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('paquetes');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#201f21] border border-[#353437] text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:border-[#fde400] hover:text-[#fde400] transition-all cursor-pointer"
                >
                  <span>Ver Paquetes de Mayoreo</span>
                  <Package className="w-4 h-4" />
                </button>
              </div>

              {/* Tactical Badges Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 w-full">
                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl hover:border-[#25D366]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#201f21] flex items-center justify-center text-[#25D366] shrink-0 border border-[#353437]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Entrega en Campus
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">En descansos y clases</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl hover:border-[#fde400]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#201f21] flex items-center justify-center text-[#fde400] shrink-0 border border-[#353437]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Villa de Tezontepec
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">Punto local acordado</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#1b1b1d] border border-[#2a2a2c] rounded-xl hover:border-[#ff4d4d]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#201f21] flex items-center justify-center text-[#ff4d4d] shrink-0 border border-[#353437]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-extrabold uppercase block leading-tight">
                      Bolsa 100g = $15
                    </span>
                    <span className="text-[11px] text-[#cdc7aa]">Hermética 10.5x15 cm</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Product Showcase with Brutalist Accents */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-3xl p-6 shadow-2xl overflow-hidden group hover:border-[#fde400] transition-all duration-300">
                
                {/* Diagonal Tape Badge */}
                <div className="absolute top-4 right-4 z-20 bg-[#fde400] text-black font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-black" />
                  <span>$15 MXN // 100G</span>
                </div>

                {/* Product Image Frame */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#131315] mb-5 border border-[#353437]">
                  <img
                    src={AROS_IMAGE}
                    alt="Aros de Manzana Gomilokas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Overlay Specs */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 text-[11px]">
                      Bolsa 10.5 x 15 cm • 100g
                    </span>
                    <span className="text-[#25D366] font-mono font-bold flex items-center gap-1 bg-black/70 px-2.5 py-1 rounded-md border border-[#25D366]/30 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      LOTE FRESCO
                    </span>
                  </div>
                </div>

                {/* Flavor Profile Badges */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#fde400] uppercase font-bold tracking-wider block">
                        RECETA CASERA // HECHO A MANO
                      </span>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">
                        Aros Gomilokas 100g
                      </h3>
                    </div>
                    <span className="text-2xl font-black text-[#fde400] font-mono">
                      $15.00
                    </span>
                  </div>

                  <p className="text-xs text-[#cdc7aa] leading-relaxed">
                    Aros de gomita de manzana verde tierna cubiertos con chamoy casero de consistencia densa y chilito en polvo. Cero derrames, puro sabor.
                  </p>

                  {/* Sensory Bar Preview */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] font-mono">
                    <div className="bg-[#131315] p-2 rounded-lg border border-[#2a2a2c] text-center">
                      <span className="text-[#cdc7aa] block">ACIDITO</span>
                      <span className="font-bold text-[#fde400]">8.5 / 10</span>
                    </div>
                    <div className="bg-[#131315] p-2 rounded-lg border border-[#2a2a2c] text-center">
                      <span className="text-[#cdc7aa] block">PICOR</span>
                      <span className="font-bold text-[#ff4d4d]">7.0 / 10</span>
                    </div>
                    <div className="bg-[#131315] p-2 rounded-lg border border-[#2a2a2c] text-center">
                      <span className="text-[#cdc7aa] block">SUAVIDAD</span>
                      <span className="font-bold text-[#25D366]">10 / 10</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onAddToCart(starProduct, '100g', 1)}
                      className="flex-1 py-3 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar al Pedido</span>
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                        'Hola Gilberto! Quiero pedir una bolsa de Aros de Manzana de 100g ($15 MXN)'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#25D366] hover:bg-white text-black rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-md"
                      title="Pedir directo por WhatsApp"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SENSOR DE SABOR & ANATOMÍA TÁCTICA */}
      <section className="py-16 bg-[#131315] border-b border-[#2a2a2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b1b1d] border border-[#fde400]/40 rounded-full text-xs font-mono text-[#fde400] uppercase font-bold mb-2">
                <Flame className="w-3.5 h-3.5 text-[#ff4d4d]" />
                FORMULACIÓN REAL DEL ANTOJO
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-headline">
                ¿POR QUÉ ESTÁN TAN BUENAS ESTAS GOMITAS?
              </h2>
            </div>
            <p className="text-xs text-[#cdc7aa] max-w-md">
              No es magia ni receta industrial de fábrica. Es el balance exacto de ingredientes preparados para aguantar la mochila y calmar el hambre entre clases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl hover:border-[#fde400]/50 transition-all relative overflow-hidden group">
              <span className="text-3xl font-black font-mono text-[#2a2a2c] absolute top-3 right-4 group-hover:text-[#fde400]/20 transition-colors">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Manzana Verde Fresca
              </h3>
              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Gomita masticable y suave con un centro ácido refrescante. No está tiesa ni reseca; se prepara semana a semana en lotes pequeños.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl hover:border-[#25D366]/50 transition-all relative overflow-hidden group">
              <span className="text-3xl font-black font-mono text-[#2a2a2c] absolute top-3 right-4 group-hover:text-[#25D366]/20 transition-colors">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#25D366] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Chamoy No-Drip
              </h3>
              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Consistencia densa que abraza cada aro de gomita sin escurrir. Puedes comerlas en el pupitre mientras anotas sin manchar hojas ni dedos.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl hover:border-[#ff4d4d]/50 transition-all relative overflow-hidden group">
              <span className="text-3xl font-black font-mono text-[#2a2a2c] absolute top-3 right-4 group-hover:text-[#ff4d4d]/20 transition-colors">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#ff4d4d] mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Mezcla de Chiles
              </h3>
              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                Piquín seleccionado, toque de limón y sal marina. Pica sabroso para despertar el antojo sin quemarte el estómago durante el examen.
              </p>
            </div>

            <div className="p-6 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl hover:border-[#fde400]/50 transition-all relative overflow-hidden group">
              <span className="text-3xl font-black font-mono text-[#2a2a2c] absolute top-3 right-4 group-hover:text-[#fde400]/20 transition-colors">
                04
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#201f21] border border-[#353437] flex items-center justify-center text-[#fde400] mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Bolsa 10.5 x 15 cm
              </h3>
              <p className="text-xs text-[#cdc7aa] leading-relaxed">
                100 gramos netos bien despachados con sellado térmico hermético. Resistente a la presión dentro de mochilas llenas de libros.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIMULADOR INTERACTIVO DE PEDIDO RÁPIDO // "CUÁNTAS BOLSAS TE LLEVAS HOY" */}
      <section className="py-16 bg-[#0e0e10] border-b border-[#2a2a2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1b1b1d] to-[#161618] border-2 border-[#fde400]/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] border border-[#fde400]/40 rounded-full text-xs font-mono text-[#fde400] uppercase font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#fde400]" />
                  CONFIGURA TU ANTOJO EN VIVO
                </div>

                <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight font-headline">
                  ¿CUÁNTAS BOLSAS DE AROS OCUPAS?
                </h2>

                <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                  Ya sea para calmar tu propio antojo en clase, compartir con tus compas o armar un paquete para revender en tu facultad. Selecciona la cantidad:
                </p>

                {/* Quick Presets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  <button
                    onClick={() => setQuickQty(1)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      quickQty === 1
                        ? 'bg-[#fde400] text-black border-[#fde400] font-black'
                        : 'bg-[#201f21] text-white border-[#353437] hover:border-white'
                    }`}
                  >
                    <span className="text-xs font-mono block">1 BOLSA</span>
                    <span className="text-base font-black">$15 MXN</span>
                    <span className="text-[10px] block opacity-80">Antojo solo</span>
                  </button>

                  <button
                    onClick={() => setQuickQty(3)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      quickQty === 3
                        ? 'bg-[#fde400] text-black border-[#fde400] font-black'
                        : 'bg-[#201f21] text-white border-[#353437] hover:border-white'
                    }`}
                  >
                    <span className="text-xs font-mono block">3 BOLSAS</span>
                    <span className="text-base font-black">$45 MXN</span>
                    <span className="text-[10px] block opacity-80">Con amigos</span>
                  </button>

                  <button
                    onClick={() => setQuickQty(5)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      quickQty === 5
                        ? 'bg-[#fde400] text-black border-[#fde400] font-black'
                        : 'bg-[#201f21] text-white border-[#353437] hover:border-white'
                    }`}
                  >
                    <span className="text-xs font-mono block">5 BOLSAS</span>
                    <span className="text-base font-black">$70 MXN</span>
                    <span className="text-[10px] block opacity-80">Ahorras $5</span>
                  </button>

                  <button
                    onClick={() => setQuickQty(10)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      quickQty === 10
                        ? 'bg-[#ff4d4d] text-white border-[#ff4d4d] font-black'
                        : 'bg-[#201f21] text-white border-[#353437] hover:border-white'
                    }`}
                  >
                    <span className="text-xs font-mono block">10 BOLSAS</span>
                    <span className="text-base font-black">$130 MXN</span>
                    <span className="text-[10px] block text-[#fde400] font-bold">Mayoreo ($13 c/u)</span>
                  </button>
                </div>

                {/* Counter Stepper */}
                <div className="flex items-center gap-4 pt-3">
                  <span className="text-xs font-mono text-[#cdc7aa] uppercase">
                    O ajusta cantidad exacta:
                  </span>
                  <div className="flex items-center gap-2 bg-[#201f21] border border-[#353437] rounded-xl p-1">
                    <button
                      onClick={() => setQuickQty(Math.max(1, quickQty - 1))}
                      className="w-8 h-8 rounded-lg bg-[#131315] text-white font-bold flex items-center justify-center hover:bg-[#353437] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-white font-mono">
                      {quickQty}
                    </span>
                    <button
                      onClick={() => setQuickQty(quickQty + 1)}
                      className="w-8 h-8 rounded-lg bg-[#131315] text-white font-bold flex items-center justify-center hover:bg-[#353437] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs font-mono text-[#fde400]">
                    {quickQty * 100}g totales
                  </span>
                </div>
              </div>

              {/* Live Order Card */}
              <div className="lg:col-span-5 bg-[#131315] border border-[#2a2a2c] rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex justify-between items-baseline border-b border-[#2a2a2c] pb-3">
                  <span className="text-xs font-mono uppercase text-[#cdc7aa]">
                    Resumen de Selección:
                  </span>
                  <span className="text-xs font-mono text-[#25D366] font-bold">
                    Entrega Directa
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white font-bold">
                      {quickQty}x Bolsa 10.5x15 cm (100g)
                    </span>
                    <span className="font-mono text-[#fde400] font-bold">
                      ${calculatedTotal} MXN
                    </span>
                  </div>

                  <p className="text-xs text-[#cdc7aa]">
                    {quickQty >= 10
                      ? '¡Aprovechando precio de mayoreo a $13 c/u! Ideal para revender a $15.'
                      : quickQty >= 5
                      ? 'Paquete semanal con descuento especial ($14 c/u).'
                      : 'Bolsas selladas de 100g listas para entrega en mano.'}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                      `Hola Gilberto! Quiero pedir ${quickQty} bolsa(s) de Aros de Manzana (Total: $${calculatedTotal} MXN) para entrega en la Uni / Villa de Tezontepec`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#25D366] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Pedir este paquete por WhatsApp (${calculatedTotal} MXN)</span>
                  </a>

                  <button
                    onClick={() => onAddToCart(starProduct, '100g', quickQty)}
                    className="w-full py-2.5 bg-[#201f21] hover:bg-[#353437] text-white border border-[#353437] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#fde400]" />
                    <span>Agregar al Carrito de la Web</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. PAQUETES & OPCIONES DE COMPRA (ID: paquetes) */}
      <section id="paquetes" className="py-16 bg-[#131315] border-b border-[#2a2a2c] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#fde400] font-bold block mb-1">
                DROPS & COMBOS FORMALES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-headline">
                CATÁLOGO DE PAQUETES GOMILOKAS
              </h2>
            </div>
            <p className="text-xs text-[#cdc7aa] max-w-sm">
              Desde 1 bolsa individual hasta paquetes de 10 bolsas para reuniones o venta entre compas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl p-5 flex flex-col justify-between hover:border-[#fde400] transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#201f21] text-[#fde400] font-bold border border-[#353437]">
                      {product.badge || 'GOMILOKAS'}
                    </span>
                    <span className="text-xs font-mono text-[#cdc7aa]">100g c/u</span>
                  </div>

                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#131315] mb-4 border border-[#353437] relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-black/85 px-2.5 py-1 rounded-lg text-xs font-black font-mono text-[#fde400] border border-white/10 shadow">
                      ${product.price} MXN
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-white uppercase tracking-tight mb-1.5 group-hover:text-[#fde400] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#cdc7aa] leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#2a2a2c]">
                  <button
                    onClick={() => onAddToCart(product, '100g', 1)}
                    className="w-full py-2.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Agregar al Pedido</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                      `Hola Gilberto! Me interesa pedir el ${product.name} ($${product.price} MXN)`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-[#201f21] hover:bg-[#25D366] hover:text-black border border-[#353437] text-[#cdc7aa] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LO QUE DICE LA RAZA EN EL SALÓN // RESEÑAS REALES DE CAMPUS */}
      <section className="py-16 bg-[#0e0e10] border-b border-[#2a2a2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b1b1d] border border-[#fde400]/40 rounded-full text-xs font-mono text-[#fde400] uppercase font-bold mb-2">
              <Users className="w-3.5 h-3.5 text-[#fde400]" />
              FEEDBACK REAL DE LOS COMPAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-headline">
              LO QUE DICE LA RAZA EN LA UNI
            </h2>
            <p className="text-xs sm:text-sm text-[#cdc7aa] mt-2">
              Sin reseñas pagadas ni bots: las opiniones de los que compran bolsa tras bolsa en los descansos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUS_REVIEWS.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl p-5 flex flex-col justify-between hover:border-[#fde400]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#fde400]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fde400]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#cdc7aa]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs text-[#e5e1e4] leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-[#2a2a2c]">
                  <div className="w-8 h-8 rounded-full bg-[#201f21] border border-[#353437] text-white font-mono font-bold text-xs flex items-center justify-center text-[#fde400]">
                    {rev.avatarText}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">
                      {rev.name}
                    </span>
                    <span className="text-[10px] text-[#cdc7aa] block">
                      {rev.faculty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. EL FUNDADOR // GILBERTO (18 AÑOS) // STREETWEAR PROFILE CARD */}
      <section className="py-16 bg-[#131315] border-b border-[#2a2a2c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#1b1b1d] border-2 border-[#2a2a2c] rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Background cyber accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fde400]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Founder Avatar & Badges */}
              <div className="md:col-span-5 flex flex-col items-center text-center space-y-3">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-[#fde400] via-[#ff4d4d] to-[#25D366] p-1 shadow-xl">
                    <div className="w-full h-full bg-[#131315] rounded-[22px] flex items-center justify-center flex-col">
                      <span className="text-4xl sm:text-5xl font-black text-[#fde400] font-headline">
                        G
                      </span>
                      <span className="text-[10px] font-mono text-[#cdc7aa] tracking-widest mt-1">
                        GILBERTO
                      </span>
                    </div>
                  </div>

                  <span className="absolute -bottom-2 bg-[#fde400] text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    18 AÑOS // ESTUDIANTE
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono text-[#cdc7aa] block">
                    Villa de Tezontepec, Hidalgo
                  </span>
                  <span className="text-sm font-black text-white uppercase tracking-tight block">
                    Creador de Gomilokas
                  </span>
                </div>
              </div>

              {/* Gritty, Honest Bio */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] rounded-full text-xs text-[#fde400] font-mono border border-[#353437]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#fde400]" />
                  <span>HUSTLE 100% UNIVERSITARIO & REAL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-headline">
                  "SIN MULTINACIONALES NI CUENTOS: SOLO GANAS DE SALIR ADELANTE"
                </h3>

                <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                  Tengo 18 años y voy a la universidad. Empecé Gomilokas preparando aros de manzana verde con chamoy casero para mis descansos y para mis compas. Al ver que les fascinó el sabor y que <strong className="text-white">la bolsa no mancha las libretas ni escurre en la mochila</strong>, decidí formalizarlo para pagar mis estudios y pasajes.
                </p>

                <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                  Cada bolsa de $15 pesos se prepara a mano, con insumos limpios y frescos. Si me ves en la uni o estás en Villa de Tezontepec, mándame Whats con confianza.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                      'Hola Gilberto! Vi tu historia en la página de Gomilokas y quiero hacerte un pedido para la uni / Villa de Tezontepec'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-md cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Mandar Whats a Gilberto (+52 5547285702)</span>
                  </a>

                  <button
                    onClick={() => onNavigate('team-fuego')}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-[#201f21] hover:bg-[#353437] text-[#cdc7aa] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-[#353437] transition-all cursor-pointer"
                  >
                    <span>Conocer al Crew de la Uni</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (ACCORDION) */}
      <section className="py-16 bg-[#0e0e10] border-b border-[#2a2a2c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#fde400] font-bold block mb-1">
              DUDAS FRECUENTES
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight font-headline">
              TODO CLARO ANTES DE PEDIR
            </h2>
          </div>

          <div className="space-y-3">
            {TECHNICAL_FAQS.map((faq) => (
              <div
                key={faq.id}
                className="border border-[#2a2a2c] bg-[#1b1b1d] rounded-2xl overflow-hidden transition-all hover:border-[#353437]"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 cursor-pointer hover:text-[#fde400]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#cdc7aa] shrink-0 transition-transform duration-200 ${
                      openFaq === faq.id ? 'rotate-180 text-[#fde400]' : ''
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#cdc7aa] leading-relaxed border-t border-[#2a2a2c]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. WHATSAPP CTA FINAL CON PUNCH */}
      <section className="py-16 bg-gradient-to-b from-[#131315] to-[#0e0e10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b1b1d] border border-[#25D366]/40 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[11px] font-mono uppercase text-[#25D366] font-bold">
              ¿SE TE ANTOJARON PARA EL DESCANSO?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-headline">
            PIDE TUS GOMILOKAS HOY MISMO
          </h2>

          <p className="text-sm text-[#cdc7aa] max-w-lg mx-auto">
            Mándame un WhatsApp al <strong className="text-white">{BUSINESS_CONFIG.phone}</strong> y te las entrego frescas en la Uni o en Villa de Tezontepec.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g para entrega en la Uni / Villa de Tezontepec'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-black font-black text-sm uppercase tracking-wider rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Mandar WhatsApp al {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
