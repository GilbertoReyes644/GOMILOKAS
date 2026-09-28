import React, { useState } from 'react';
import { WHOLESALE_TIERS } from '../data/mockData';
import { 
  Calculator, 
  TrendingUp, 
  Package, 
  ShieldCheck, 
  Truck, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  Flame, 
  Building2, 
  Dumbbell, 
  Store,
  Layers,
  HelpCircle
} from 'lucide-react';

export const WholesaleView: React.FC = () => {
  const [units, setUnits] = useState<number>(100);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [businessType, setBusinessType] = useState('box_crossfit');

  // Calculation logic based on tiered volume
  const getCostPerUnit = (qty: number) => {
    if (qty >= 250) return 29.25;
    if (qty >= 100) return 32.50;
    if (qty >= 50) return 35.75;
    return 39.00;
  };

  const costPerUnit = getCostPerUnit(units);
  const pvpSuggested = 65.00;
  const totalInvestment = units * costPerUnit;
  const totalRevenue = units * pvpSuggested;
  const netProfit = totalRevenue - totalInvestment;
  const profitMargin = Math.round((netProfit / totalRevenue) * 100);

  const handlePreset = (val: number) => {
    setUnits(val);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/525500000000?text=${encodeURIComponent(
    `Hola Team Fuego B2B, me interesa una cotización de mayoreo para ${businessName || 'mi negocio'}: ` +
    `${units} unidades estimadas. Tipo de negocio: ${businessType}, en ${city || 'México'}.`
  )}`;

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="relative border-b border-[#2a2a2d] pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fcba28] bg-[#fcba28]/10 px-3 py-1 rounded-sm border border-[#fcba28]/30 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#fcba28]" />
            PROGRAMA OFICIAL DE MAYOREO Y DISTRIBUCIÓN
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            ALTO MARGEN PARA GIMNASIOS, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcba28] via-[#ff7828] to-[#ff4d00]">
              BOXES DE CROSSFIT & TIENDAS
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#b1b0b5] max-w-3xl leading-relaxed">
            Fuego Dulce es el snack funcional y gomita de alto octanaje con mayor rotación en mostrador deportivo en México. Sin productos perecederos de corta vida, empaque sellado que no ensucia y márgenes reales del 40% al 55%.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#simulador"
              className="px-6 py-3 bg-[#fcba28] hover:bg-[#ffd05b] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Simular Ganancia Neta</span>
            </a>
            <a
              href="#paquetes"
              className="px-6 py-3 bg-[#1e1d22] hover:bg-[#28272c] text-white border border-[#3e3d43] font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
            >
              <Package className="w-4 h-4 text-[#fcba28]" />
              <span>Ver Paquetes Pre-armados</span>
            </a>
          </div>

          {/* Quick stats pills */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#18181b] border border-[#262529] p-4 rounded-sm">
              <div className="text-2xl sm:text-3xl font-black font-headline text-[#fcba28]">40% - 55%</div>
              <div className="text-xs font-mono text-[#8b8a8e] uppercase mt-1">Margen Bruto de Reventa</div>
            </div>
            <div className="bg-[#18181b] border border-[#262529] p-4 rounded-sm">
              <div className="text-2xl sm:text-3xl font-black font-headline text-white">4.8 Días</div>
              <div className="text-xs font-mono text-[#8b8a8e] uppercase mt-1">Rotación promedio de 50 u.</div>
            </div>
            <div className="bg-[#18181b] border border-[#262529] p-4 rounded-sm">
              <div className="text-2xl sm:text-3xl font-black font-headline text-white">0% Mermas</div>
              <div className="text-xs font-mono text-[#8b8a8e] uppercase mt-1">Vida de anaquel 6 meses</div>
            </div>
            <div className="bg-[#18181b] border border-[#262529] p-4 rounded-sm">
              <div className="text-2xl sm:text-3xl font-black font-headline text-[#4ade80]">24 - 48h</div>
              <div className="text-xs font-mono text-[#8b8a8e] uppercase mt-1">Despacho Express Nacional</div>
            </div>
          </div>
        </div>

        {/* Interactive Profit Simulator */}
        <div id="simulador" className="scroll-mt-24">
          <div className="bg-gradient-to-b from-[#1c1a1e] to-[#151417] border-2 border-[#fcba28]/40 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#fcba28]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2e2d31] pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#fcba28] font-bold">
                  <Calculator className="w-4 h-4" />
                  Calculadora Dinámica de Rentabilidad
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white mt-1">
                  Simula tu Ganancia Mensual
                </h2>
              </div>
              <div className="text-xs font-mono text-[#a2a1a6]">
                Precio de venta sugerido al público: <span className="text-[#fcba28] font-bold">$65.00 MXN / bolsa</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Slider & Presets */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#a2a1a6]">
                      Volumen de compra:
                    </label>
                    <span className="text-2xl sm:text-3xl font-black font-headline text-[#fcba28]">
                      {units} <span className="text-sm font-mono font-normal text-white">bolsas</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full h-3 bg-[#2a292f] rounded-lg appearance-none cursor-pointer accent-[#fcba28]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#737278] mt-1.5">
                    <span>20 u. (Emprendedor)</span>
                    <span>100 u. (Box/Gym)</span>
                    <span>250 u. (Pro)</span>
                    <span>500 u. (Distribuidor)</span>
                  </div>
                </div>

                {/* Quick preset buttons */}
                <div>
                  <div className="text-xs font-mono text-[#8b8a8e] mb-2 uppercase">Accesos rápidos:</div>
                  <div className="flex flex-wrap gap-2">
                    {[20, 50, 100, 250, 500].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handlePreset(preset)}
                        className={`px-3 py-1.5 text-xs font-mono font-bold rounded-sm border transition-all ${
                          units === preset
                            ? 'bg-[#fcba28] text-black border-[#fcba28]'
                            : 'bg-[#18181b] text-[#b1b0b5] border-[#343339] hover:border-[#fcba28]'
                        }`}
                      >
                        {preset} Bolsas
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefits active for this volume */}
                <div className="bg-[#121114] border border-[#2a292e] p-4 rounded-sm space-y-2 text-xs font-mono">
                  <div className="text-[#fcba28] font-bold flex items-center gap-1.5 uppercase text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Beneficios desbloqueados con {units} piezas:
                  </div>
                  <ul className="space-y-1.5 text-[#b1b0b5]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                      Costo unitario preferencial: <span className="text-white font-bold">${costPerUnit.toFixed(2)} MXN</span>
                    </li>
                    {units >= 100 && (
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                        Exhibidor acrílico oficial de mostrador sin costo ($450 MXN de valor)
                      </li>
                    )}
                    {units >= 100 && (
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                        Envío terrestre express gratis a toda la República Mexicana
                      </li>
                    )}
                    {units >= 250 && (
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                        Sticker Co-Branded con logo de tu gimnasio o evento impreso
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Profit Output Card */}
              <div className="lg:col-span-5 bg-[#121214] border border-[#fcba28]/30 p-6 rounded-sm space-y-6">
                <div className="text-center pb-4 border-b border-[#242327]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#8b8a8e]">
                    Ganancia Neta Estimada
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-headline text-[#4ade80] tracking-tight mt-1">
                    ${netProfit.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <span className="text-xs font-mono text-[#8b8a8e] ml-1">MXN</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#4ade80]/10 text-[#4ade80] text-xs font-mono font-bold rounded-sm border border-[#4ade80]/30">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Margen de Ganancia: {profitMargin}%
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between items-center text-[#b1b0b5]">
                    <span>Inversión Total requerida:</span>
                    <span className="text-white font-bold text-sm">
                      ${totalInvestment.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#b1b0b5]">
                    <span>Ingresos brutos proyectados (PVP):</span>
                    <span className="text-white font-bold text-sm">
                      ${totalRevenue.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#b1b0b5]">
                    <span>Costo unitario por bolsa:</span>
                    <span className="text-[#fcba28] font-bold text-sm">${costPerUnit.toFixed(2)} MXN</span>
                  </div>
                  <div className="flex justify-between items-center text-[#b1b0b5]">
                    <span>Ganancia libre por cada bolsa:</span>
                    <span className="text-[#4ade80] font-bold text-sm">${(pvpSuggested - costPerUnit).toFixed(2)} MXN</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Bloquear Esta Tarifa por WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-center text-[#737278] mt-2 font-mono">
                    Respuesta en &lt; 15 minutos en días hábiles
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Commercial Packages / Tiers */}
        <div id="paquetes" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
              PAQUETES ESTANDARIZADOS LISTOS PARA ENVÍO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-headline uppercase text-white">
              Elige el volumen que mejor se adapte a tu flujo
            </h2>
            <p className="text-xs sm:text-sm text-[#8b8a8e]">
              Todos los paquetes permiten combinar sabores libremente entre Tamarindo Morita, Mango Habanero, Sandía Jamaica y Mezcla Bestia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {WHOLESALE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#18181b] border rounded-sm p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.recommended
                    ? 'border-[#fcba28] shadow-2xl shadow-[#fcba28]/10 ring-1 ring-[#fcba28]/50'
                    : 'border-[#2c2b30] hover:border-[#fcba28]/40'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fcba28] text-black font-mono text-[10px] font-black uppercase px-3 py-0.5 rounded-sm tracking-widest shadow-md">
                    MÁS SOLICITADO POR BOXES
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#fcba28] tracking-widest">
                        {tier.badge}
                      </span>
                      <h3 className="text-xl font-black font-headline uppercase text-white mt-1">
                        {tier.name}
                      </h3>
                    </div>
                    <div className="bg-[#fcba28]/10 border border-[#fcba28]/30 text-[#fcba28] text-xs font-mono font-bold px-2 py-1 rounded-sm">
                      {tier.marginPct}% Margen
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#a2a1a6] leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="my-5 p-3 bg-[#131315] border border-[#262529] rounded-sm space-y-1 font-mono text-xs">
                    <div className="flex justify-between text-[#8b8a8e]">
                      <span>Rango:</span>
                      <span className="text-white font-bold">{tier.unitsRange}</span>
                    </div>
                    <div className="flex justify-between text-[#8b8a8e]">
                      <span>Costo x unidad:</span>
                      <span className="text-[#fcba28] font-bold">${tier.costPerUnit.toFixed(2)} MXN</span>
                    </div>
                    <div className="flex justify-between text-[#8b8a8e]">
                      <span>PVP Sugerido:</span>
                      <span className="text-[#4ade80] font-bold">${tier.pvp.toFixed(2)} MXN</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-[#8b8a8e] uppercase font-bold">
                      Incluye:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#b1b0b5]">
                        <Check className="w-3.5 h-3.5 text-[#fcba28] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#262529] mt-6">
                  <a
                    href={`https://wa.me/525500000000?text=${encodeURIComponent(
                      `Hola, quiero ordenar el paquete de mayoreo ${tier.name} con ${tier.marginPct}% de margen.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 font-mono text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all ${
                      tier.recommended
                        ? 'bg-[#fcba28] hover:bg-[#ffd05b] text-black shadow-lg'
                        : 'bg-[#222126] hover:bg-[#2c2b32] text-white border border-[#3e3d43]'
                    }`}
                  >
                    <span>Ordenar {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Merchandising & Display Kit Section */}
        <div className="bg-[#18181b] border border-[#2a292e] rounded-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#fcba28] bg-[#fcba28]/10 px-3 py-1 rounded-sm border border-[#fcba28]/30">
                <Store className="w-3.5 h-3.5" />
                KIT DE VISIBILIDAD DE MOSTRADOR INCLUIDO
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                Diseñado para llamar la atención en la barra de cobro
              </h2>
              <p className="text-sm text-[#b1b0b5] leading-relaxed">
                El 73% de las ventas de Fuego Dulce en gimnasios son compras por impulso justo después de terminar un entrenamiento intenso, cuando el cuerpo pide sodio, glucógeno y picor para resetear.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-sm bg-[#fcba28]/10 border border-[#fcba28]/30 flex items-center justify-center shrink-0 text-[#fcba28]">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white font-mono">Exhibidor Acrílico de Grado Óptico</h4>
                    <p className="text-xs text-[#8b8a8e]">Ocupa solo 18x18 cm en tu mostrador con capacidad para 24 bolsas en cascada visible.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-sm bg-[#fcba28]/10 border border-[#fcba28]/30 flex items-center justify-center shrink-0 text-[#fcba28]">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white font-mono">Stoppers de Barra y Posters</h4>
                    <p className="text-xs text-[#8b8a8e]">Viniles de alta durabilidad con la escala de Scoville y frases de rendimiento atlético.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-sm bg-[#fcba28]/10 border border-[#fcba28]/30 flex items-center justify-center shrink-0 text-[#fcba28]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white font-mono">Dosis de Degustación para tus Clientes</h4>
                    <p className="text-xs text-[#8b8a8e]">Te enviamos bolsitas de muestra para que tus atletas las prueben antes de comprar su primera bolsa entera.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0f0f11] border border-[#2a292e] p-6 rounded-sm relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByJqgSpkcQwRyFmg6pPvHhM_ouusWrg-dQjGL6HCwgUfCA8iaidM269EkpSZ7xUbSyEXvAy0p5kvAzdswfvioLKyEnn8wI0hXtv_RJ43rqZz2R8Hq7OdJ0vhIiKP6oBrCF2vN5g0eqd6qO_qUTHrGOqvwdFIBVYcO0d2xnoFpmPQ3gAEd-UUk9M9nTeT5MKV75_YfjUCqJEAY4gb8ml1O47j7T9jypEvpoOUj_fTwnZHYaCf6PiqMtTg"
                alt="Display de mostrador Fuego Dulce"
                className="w-full h-72 object-cover rounded-sm border border-[#2e2d31]"
              />
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#8b8a8e]">
                <span>Presentación: Display vertical 24 u.</span>
                <span className="text-[#4ade80] font-bold">100% Gratis a partir de 100 bolsas</span>
              </div>
            </div>

          </div>
        </div>

        {/* B2B Contact Form */}
        <div className="bg-[#1a191c] border border-[#2e2d31] rounded-sm p-6 sm:p-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
                ALTA DE PUNTO DE VENTA OFICIAL
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                Solicita Catálogo Mayorista y Muestras Físicas
              </h2>
              <p className="text-xs sm:text-sm text-[#8b8a8e]">
                Completa tus datos y un asesor B2B de Fuego Dulce se comunicará hoy mismo con la propuesta personalizada para tu zona.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#121114] border border-[#4ade80]/40 p-8 rounded-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 text-[#4ade80] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold uppercase font-headline text-white">
                  ¡Solicitud Registrada con Éxito!
                </h3>
                <p className="text-xs text-[#b1b0b5] max-w-md mx-auto">
                  Gracias <strong className="text-white">{contactName || 'por contactarnos'}</strong>. Nuestro equipo de mayoreo te escribirá al <strong className="text-[#fcba28]">{phone}</strong> con la lista oficial de precios y tiempos de envío a <strong className="text-white">{city}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-[#222126] text-white border border-[#3e3d43] font-mono text-xs uppercase rounded-sm"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Nombre del Negocio / Gimnasio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Iron Box CrossFit"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Tipo de Establecimiento *
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28] uppercase font-mono"
                    >
                      <option value="box_crossfit">Box de CrossFit / Funcional</option>
                      <option value="gimnasio">Gimnasio Comercial / Fitness</option>
                      <option value="tienda_deportiva">Tienda de Suplementos / Deporte</option>
                      <option value="tienda_bici">Taller / Tienda de Ciclismo MTB</option>
                      <option value="escalada">Muro de Escalada</option>
                      <option value="otro">Distribuidor Independiente / Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Persona de Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Vega"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 55 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                    Ciudad y Estado para cálculo de flete *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Guadalajara, Jalisco"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#fcba28] hover:bg-[#ffd05b] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Enviar Solicitud Mayorista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
