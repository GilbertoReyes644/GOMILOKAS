import React, { useState } from 'react';
import { ATHLETES_DATA, LIFESTYLE_GALLERY } from '../data/mockData';
import { 
  Flame, 
  Trophy, 
  MapPin, 
  Zap, 
  Send, 
  Check, 
  Share2, 
  Instagram, 
  Activity, 
  ShieldCheck,
  Award,
  ChevronRight
} from 'lucide-react';

export const TeamFuegoView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [athleteName, setAthleteName] = useState('');
  const [sport, setSport] = useState('');
  const [instagram, setInstagram] = useState('');
  const [city, setCity] = useState('');
  const [favoriteFlavor, setFavoriteFlavor] = useState('Mango Habanero Nitro');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Hero Section */}
        <div className="border-b border-[#2a2a2d] pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fcba28] bg-[#fcba28]/10 px-3 py-1 rounded-sm border border-[#fcba28]/30 mb-4">
            <Flame className="w-3.5 h-3.5 text-[#ff4d00]" />
            ROSTER OFICIAL // ATLETAS DE ALTO OCTANAJE
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            NO COMEMOS AZÚCAR VACÍA. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcba28] via-[#ff7828] to-[#ff4d00]">
              COMBO PICANTE, SODIO Y SODIO DE COLIMA.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#b1b0b5] max-w-3xl leading-relaxed">
            Conoce a los corredores de ultra-trail, coaches de crossfit y pilotos de descenso que usan Fuego Dulce como su arma secreta para resetear la concentración y activar glucógeno sublingual en momentos críticos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#atletas"
              className="px-6 py-3 bg-[#fcba28] hover:bg-[#ffd05b] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl transition-all flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              <span>Ver Roster de Atletas</span>
            </a>
            <a
              href="#postular"
              className="px-6 py-3 bg-[#1e1d22] hover:bg-[#28272c] text-white border border-[#3e3d43] font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#fcba28]" />
              <span>Postular a Patrocinio</span>
            </a>
          </div>
        </div>

        {/* Athletes Grid */}
        <div id="atletas" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#242327] pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
                TEMPORADA 2026 // EMBAJADORES PRO
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white mt-1">
                Atletas que desafían los límites térmicos
              </h2>
            </div>
            <div className="text-xs font-mono text-[#8b8a8e]">
              4 Disciplinas Extremas // 100% Hecho en México
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ATHLETES_DATA.map((athlete) => (
              <div
                key={athlete.id}
                className="bg-[#18181b] border border-[#2c2b30] rounded-sm overflow-hidden hover:border-[#fcba28]/60 transition-all duration-300 group flex flex-col sm:flex-row shadow-xl"
              >
                {/* Athlete Photo */}
                <div className="relative sm:w-1/2 aspect-[4/5] sm:aspect-auto overflow-hidden bg-[#0c0c0e]">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-[#fcba28] px-2 py-0.5 rounded-sm font-mono text-[10px] font-bold border border-[#fcba28]/30 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#ff4d00]" />
                    {athlete.location}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white px-2 py-0.5 rounded-sm font-mono text-[10px] font-bold border border-white/20 uppercase">
                    {athlete.category}
                  </div>
                </div>

                {/* Athlete Bio & Gummy */}
                <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#fcba28] uppercase font-bold tracking-widest">
                      {athlete.title}
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white mt-1 group-hover:text-[#fcba28] transition-colors">
                      {athlete.name}
                    </h3>
                    <p className="mt-3 text-xs text-[#a2a1a6] leading-relaxed">
                      {athlete.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#262529] space-y-2">
                    <div className="text-[10px] font-mono text-[#8b8a8e] uppercase">
                      Gomita de Combate / Protocolo:
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#121214] border border-[#2e2d31] rounded-sm text-xs font-mono font-bold text-white">
                      <Flame className="w-4 h-4 text-[#ff4d00]" />
                      <span>{athlete.attackGummy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery / Field Photography */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
              FOTOGRAFÍA DE CAMPO // EXPEDICIONES REALES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-headline uppercase text-white">
              Sometidas al calor, la nieve y el polvo
            </h2>
            <p className="text-xs sm:text-sm text-[#8b8a8e]">
              El glaseado seco de chamoy y la formulación termorresistente no se derriten a 42°C en el desierto ni se endurecen como piedra a -5°C en cumbre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
            {LIFESTYLE_GALLERY.map((item, idx) => (
              <div
                key={idx}
                className={`${item.span} ${item.height} relative rounded-sm overflow-hidden border border-[#2a292e] group`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase font-bold bg-black/80 text-[#fcba28] px-2.5 py-1 rounded-sm border border-[#fcba28]/30">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#fcba28]">
                    <MapPin className="w-3 h-3 text-[#ff4d00]" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black font-headline uppercase text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#c2c1c6] max-w-xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Application Form */}
        <div id="postular" className="bg-[#18181b] border border-[#2e2d31] rounded-sm p-6 sm:p-10 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
                PROGRAMA DE EMBAJADORES Y SPONSORSHIP
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                ¿Compites a nivel élite? Únete a Team Fuego
              </h2>
              <p className="text-xs sm:text-sm text-[#8b8a8e]">
                Buscamos deportistas comprometidos con el rendimiento implacable. Apoyamos con abastecimiento mensual de producto, uniforme técnico y viáticos de competencia.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#121114] border border-[#4ade80]/40 p-8 rounded-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 text-[#4ade80] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold uppercase font-headline text-white">
                  ¡Perfil de Atleta Enviado!
                </h3>
                <p className="text-xs text-[#b1b0b5] max-w-md mx-auto">
                  Hemos recibido tu postulación, <strong className="text-white">{athleteName}</strong>. Nuestro director de equipo revisará tu perfil de <strong className="text-[#fcba28]">{sport}</strong> y tus marcas para coordinar un paquete de prueba a <strong className="text-white">{city}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-[#222126] text-white border border-[#3e3d43] font-mono text-xs uppercase rounded-sm"
                  >
                    Postular a otro atleta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Mateo Alcocer"
                      value={athleteName}
                      onChange={(e) => setAthleteName(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Disciplina Deportiva *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ultra Trail 80K, CrossFit Open, MTB Downhill"
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Usuario de Instagram / Strava *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="@tu_usuario_deportista"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                      Ciudad y Estado *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Monterrey, Nuevo León"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8b8a8e] mb-1">
                    Gomita Preferida para Pruebas de Esfuerzo
                  </label>
                  <select
                    value={favoriteFlavor}
                    onChange={(e) => setFavoriteFlavor(e.target.value)}
                    className="w-full bg-[#131315] border border-[#343339] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28] uppercase font-mono"
                  >
                    <option value="Mango Habanero Nitro">Mango Habanero Nitro (Potencia Extrema 15,000 SHU)</option>
                    <option value="Aros Fuego Tamarindo & Miguelito">Aros Fuego Tamarindo & Miguelito (8,500 SHU)</option>
                    <option value="Ositos Tamarindo Bravo">Ositos Glaseados Tamarindo Bravo (4,500 SHU)</option>
                    <option value="Sandía Nitro Chamoy Jamaica">Sandía Nitro Chamoy Jamaica (6,000 SHU)</option>
                    <option value="Mix Bestia 500g">Mix Bestia 500g (Surtido Completo)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#fcba28] hover:bg-[#ffd05b] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Enviar Postulación para Evaluación</span>
                    <Send className="w-4 h-4" />
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
