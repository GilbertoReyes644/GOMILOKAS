import React from 'react';
import { BUSINESS_CONFIG, CREW_MEMBERS, AROS_IMAGE } from '../data/mockData';
import { 
  Users, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  PhoneCall, 
  Package, 
  ShieldCheck,
  CheckCircle2,
  Flame,
  Award,
  Zap,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export const TeamFuegoView: React.FC = () => {
  const founder = CREW_MEMBERS.find(m => m.isFounder) || CREW_MEMBERS[0];

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 selection:bg-[#fde400] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER // BRUTALIST & AUTHENTIC */}
        <div className="border-b border-[#2a2a2d] pb-8 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fde400] bg-[#fde400]/10 px-3 py-1 rounded-full border border-[#fde400]/30">
              <Users className="w-3.5 h-3.5 text-[#ff4d4d]" />
              ROSTER OFICIAL // EL CREW DE LA UNI & VILLA DE TEZONTEPEC
            </div>
            <div className="text-xs font-mono text-[#cdc7aa]">
              18 AÑOS • <span className="text-[#25D366] font-bold">100% REAL HUSTLE</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            DE LA FACULTAD A LA CALLE: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde400] via-[#ffe066] to-[#ff4d4d]">
              EL CREW DETRÁS DE GOMILOKAS
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#cdc7aa] max-w-3xl leading-relaxed">
            Sin deportistas inventados ni marcas ficticias de laboratorio: el verdadero valor de Gomilokas es un estudiante de 18 años en Villa de Tezontepec y la comunidad universitaria que hace posible este proyecto bolsa a bolsa.
          </p>
        </div>

        {/* FEATURED FOUNDER DOSSIER CARD */}
        <div className="bg-[#1b1b1d] border-2 border-[#fde400]/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Cyber Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#fde400]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff4d4d]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Visual Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#131315] border-2 border-[#353437] relative group shadow-2xl">
                <img
                  src={AROS_IMAGE}
                  alt="GOMILOKAS Aros de Manzana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#fde400] text-black text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded shadow">
                  FOUNDER PROFILE // 01
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white uppercase font-mono">GILBERTO</span>
                    <span className="text-[#fde400] font-mono font-bold">18 AÑOS</span>
                  </div>
                  <span className="text-[11px] text-[#cdc7aa] block">
                    Villa de Tezontepec, Hgo & Entregas en la Uni
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {founder.stats.map((s, idx) => (
                  <div key={idx} className="bg-[#131315] p-2.5 rounded-xl border border-[#2a2a2c]">
                    <span className="text-[10px] text-[#cdc7aa] uppercase block">{s.label}</span>
                    <span className="font-black text-white text-xs">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dossier Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] rounded-full text-xs text-[#25D366] font-mono border border-[#353437]">
                <GraduationCap className="w-4 h-4 text-[#fde400]" />
                <span>ESTUDIANTE UNIVERSITARIO • EMPRENDEDOR LOCAL</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-headline">
                "NO NECESITAMOS INVENTAR NADA: EL ANTOJO Y LAS GANAS SON 100% REALES"
              </h2>

              <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                Hola, soy <strong>Gilberto</strong>. Tengo 18 años y actualmente curso la universidad mientras vivo en <strong>Villa de Tezontepec, Hidalgo</strong>.
              </p>

              <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                Gomilokas nació de forma muy natural: en mis descansos preparaba aros de manzana verde con chamoy casero acidito y chilito seco para calmar el bajón entre clases. Mis compas del salón los probaron y se volvieron adictos porque <strong className="text-white">el chamoy no escurre en la mochila ni deja pegajosos los cuadernos</strong>.
              </p>

              <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                Al ver la demanda, decidí empacarlas formalmente en bolsas termoselladas de 10.5 x 15 cm a un precio accesible de <strong>$15 pesos</strong>. Esto me ayuda directamente a pagar mis pasajes, materiales y estudios.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    'Hola Gilberto! Vi tu historia en la página de Gomilokas y quiero hacerte un pedido para la uni / Villa de Tezontepec'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Mandar Mensaje a Gilberto ({BUSINESS_CONFIG.phone})</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* THE THREE PILLARS OF THE SQUAD */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#fde400] font-bold block mb-1">
              RED DE APOYO & COMUNIDAD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-headline">
              EL SQUAD QUE HACE POSIBLE GOMILOKAS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREW_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl p-6 flex flex-col justify-between hover:border-[#fde400]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-[#201f21] text-[#fde400] px-2.5 py-0.5 rounded-full border border-[#353437] font-bold">
                      {member.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#cdc7aa]">
                      {member.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono text-[#ff4d4d] font-bold uppercase block mb-3">
                    {member.alias}
                  </span>

                  <p className="text-xs text-[#cdc7aa] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2a2a2c] space-y-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-[#cdc7aa]">Paquete Favorito:</span>
                    <span className="text-[#fde400] font-bold">{member.favoritePack}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRAMA DE EMBAJADORES // HUSTLE UNIVERSITARIO */}
        <div className="bg-gradient-to-r from-[#1b1b1d] via-[#1f1e24] to-[#161618] border-2 border-[#fde400]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] border border-[#fde400]/40 rounded-full text-xs font-mono text-[#fde400] uppercase font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-[#fde400]" />
              PROGRAMA DE EMBAJADORES UNIVERSITARIOS
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight font-headline">
              ¿QUIERES VENDER GOMILOKAS EN TU SALÓN O FACULTAD?
            </h2>
            <p className="text-xs sm:text-sm text-[#cdc7aa] mt-2 leading-relaxed">
              Si quieres sacarte un dinero extra para tus pasajes, comidas o gastos de la escuela, puedes ser embajador de Gomilokas en tu salón. Te damos precio mayorista para que tú te quedes con la ganancia vendiendo a $15 pesos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#131315] p-5 rounded-2xl border border-[#2a2a2c] space-y-2">
              <span className="text-[10px] font-mono text-[#fde400] uppercase font-bold block">TIER 01 // SALÓN</span>
              <h4 className="text-lg font-black text-white uppercase">10 Bolsas</h4>
              <p className="text-xs text-[#cdc7aa]">Pagas $13.00 c/u ($130 total). Las vendes a $15 y te ganas <strong className="text-[#25D366] font-mono">+$20 MXN</strong> en un descanso.</p>
            </div>

            <div className="bg-[#131315] p-5 rounded-2xl border border-[#fde400]/50 space-y-2 relative">
              <span className="absolute top-3 right-3 text-[9px] bg-[#fde400] text-black font-black px-2 py-0.5 rounded font-mono">POPULAR</span>
              <span className="text-[10px] font-mono text-[#fde400] uppercase font-bold block">TIER 02 // PISO</span>
              <h4 className="text-lg font-black text-white uppercase">25 Bolsas</h4>
              <p className="text-xs text-[#cdc7aa]">Pagas $11.00 c/u ($275 total). Las vendes a $15 y te ganas <strong className="text-[#25D366] font-mono">+$100 MXN</strong> netos.</p>
            </div>

            <div className="bg-[#131315] p-5 rounded-2xl border border-[#2a2a2c] space-y-2">
              <span className="text-[10px] font-mono text-[#fde400] uppercase font-bold block">TIER 03 // FACULTAD</span>
              <h4 className="text-lg font-black text-white uppercase">50 Bolsas</h4>
              <p className="text-xs text-[#cdc7aa]">Pagas $10.00 c/u ($500 total). Las vendes a $15 y te ganas <strong className="text-[#25D366] font-mono">+$250 MXN</strong> limpios.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2a2a2c]">
            <span className="text-xs text-[#cdc7aa] text-center sm:text-left">
              Coordinamos la entrega directa en tu aula o descanso por WhatsApp.
            </span>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gilberto! Me interesa ser embajador de Gomilokas y vender en mi facultad/salón'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Aplicar como Embajador por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
