import React, { useState } from 'react';
import { TECHNICAL_FAQS } from '../data/mockData';
import { 
  Flame, 
  Layers, 
  ShieldCheck, 
  Thermometer, 
  Sparkles, 
  Scale, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  Activity,
  Award
} from 'lucide-react';

export const SpecsView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const phases = [
    {
      step: 'FASE 01',
      title: 'Glaseado de Chamoy en Olla de Cobre',
      tag: 'REDUCCIÓN LENTA',
      desc: 'El chamoy se elabora sin espesantes químicos. Cocinamos a fuego lento pulpa natural de tamarindo de Morelos, flor de jamaica deshidratada y piloncillo virgen en pailas de cobre martillado hasta lograr el punto de caramelo elástico.',
      metric: 'BRIX 72° // 105°C TEMP CONTROLADA',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjL2X0u8zB822n-36h00nS61H3J3B7HhW1H86-6-6vFm6A0c-25V8dK-mN-T_Q2Vl4qK--h-k_dG8f-V9l6_1_2Vv62Gq8x9X_P9bV4e8yLqB9aQdE3XwB2YyR5k8_N0b8Qv0u-7v2B_1eWf6-x1_G2w3rM6yWf8uN9bA3B2C7x0Y_E9d-1v-8K7A-9q-F8u0y8X_M7e'
    },
    {
      step: 'FASE 02',
      title: 'Polvo Miguelito & Mezcla 4 Chiles',
      tag: 'MALLA 80 MICRAS',
      desc: 'Nuestra firma térmica: una mezcla balanceada de chile morita tatemado, piquín poblano, chipotle meco y habanero yucateco, molidos a 80 micras con sal de grano de Colima. La micro-molienda crea una costra seca que no resbala ni humedece los dedos.',
      metric: '4 CHILES ORIGINARIOS // 0% COLORANTES ARTIFICIALES',
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1XGhXWQEusgWfNlw0Id1KJ3q6JJIoukT7oa2OA6qsqSqMNZg4EB2V5kRakqxsDTMoTKA90GFCEM5Sb1fJlDjBLIWB0QvMtYPmHB_6UbfvkH2tz-wLvy_hO6aUOactKauZD8JJQnfTYNT5gS-9rXXfWRdRdU6WrYtOHVrdP_guVZj06rylvxu3r4D5R7Zkgj4jJttbK26f88tVNTU4sFI9IUzSEZylAJbba55vka41NAiNt4seBeNu8SAZU'
    },
    {
      step: 'FASE 03',
      title: 'Textura Secreta Masticable Macro',
      tag: 'ESTRUCTURA VISCOELÁSTICA',
      desc: 'A diferencia de las gomitas comerciales de golosina que se licúan a 30°C o se vuelven chiclosas, nuestra base de gelatina de grado farmacéutico tolera el calor corporal y las mochilas de trail sin deformarse, manteniendo un mordisco firme y satisfactorio.',
      metric: 'TOLERANCIA TÉRMICA: -5°C A +42°C',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByJqgSpkcQwRyFmg6pPvHhM_ouusWrg-dQjGL6HCwgUfCA8iaidM269EkpSZ7xUbSyEXvAy0p5kvAzdswfvioLKyEnn8wI0hXtv_RJ43rqZz2R8Hq7OdJ0vhIiKP6oBrCF2vN5g0eqd6qO_qUTHrGOqvwdFIBVYcO0d2xnoFpmPQ3gAEd-UUk9M9nTeT5MKV75_YfjUCqJEAY4gb8ml1O47j7T9jypEvpoOUj_fTwnZHYaCf6PiqMtTg'
    },
    {
      step: 'FASE 04',
      title: 'Sellado con Barrera Tricapa UV',
      tag: 'ATMÓSFERA CONTROLADA',
      desc: 'Cada lote se dosifica y sella herméticamente en bolsas de laminación tricapa mate con zipper reforzado. Esto evita que la humedad ambiental altere la acidez del miguelito y garantiza 180 días de frescura crujiente sin agregar benzoato de sodio.',
      metric: 'LOTE SERIALIZADO & CODIFICADO POR DÍA',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFr1IK7ZaGt9QPvQ9oAWlj0jWk9CMvhsKLCy731ZxRi4CSuSYadoKzxbqNAt2TyQDs-Y_sjuIur6FsQ7wwlS7hUNxj-kpbrexOSrL-Nvka_4FUu_OnZIIKSP9SsVH8LLJbd4gk7SBNwNjWVJ4OZd-4fEqJu6mGfOxkoHYwcLiSXkgH2KGtAOcWHH40_c2RdJGSrQLBH21Es1sW6mHYRPCpnYC0uBbFiwtcttSk1_jyKvby1tXXbYbsZQ'
    }
  ];

  const scovilleTable = [
    { product: 'Ositos Glaseados en Tamarindo', scoville: '4,500 SHU', chile: 'Poblano & Chipotle Meco', feeling: 'Calor agradable que resalta la pulpa frutal' },
    { product: 'Sandía Nitro Chamoy Jamaica', scoville: '6,000 SHU', chile: 'Piquín & Sal de Colima', feeling: 'Equilibrio electrizante entre acidez y frescura' },
    { product: 'Aros Fuego Tamarindo & Miguelito', scoville: '8,500 SHU', chile: 'Morita Tatemado', feeling: 'Impacto sublingual con retrogusto ahumado' },
    { product: 'Mango Habanero Nitro', scoville: '15,000 SHU', chile: 'Habanero Naranja Yucateco', feeling: 'Fuego puro que activa endorfinas y limpia la mente' },
  ];

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Hero Section */}
        <div className="border-b border-[#2a2a2d] pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fcba28] bg-[#fcba28]/10 px-3 py-1 rounded-sm border border-[#fcba28]/30 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#fcba28]" />
            ESTÁNDAR DE MANUFACTURA ARTESANAL
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter uppercase text-white leading-tight">
            EL CÓDIGO DE FABRICACIÓN: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcba28] via-[#ff7828] to-[#ff4d00]">
              CIENCIA TÉRMICA & CHILES REALES
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#b1b0b5] max-w-3xl leading-relaxed">
            No producimos golosinas genéricas. Cada lote de Fuego Dulce se somete a 4 fases termodinámicas que garantizan un picor estable, alta biodisponibilidad de electrolitos y un acabado que no ensucia tus manos durante el entrenamiento.
          </p>
        </div>

        {/* 4 Phases Breakdown */}
        <div className="space-y-12">
          <div className="border-b border-[#242327] pb-4">
            <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
              PROTOCOLO DE 4 ETAPAS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white mt-1">
              De la paila de cobre a tu bolso de hidratación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#18181b] border border-[#2b2a2f] rounded-sm p-6 sm:p-8 space-y-5 flex flex-col justify-between hover:border-[#fcba28]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-[#fcba28] bg-[#fcba28]/10 px-2.5 py-1 rounded-sm border border-[#fcba28]/30">
                      {phase.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#8b8a8e] uppercase">
                      {phase.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#b1b0b5] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242327] flex items-center justify-between text-xs font-mono text-[#fcba28]">
                  <span className="flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-[#ff4d00]" />
                    {phase.metric}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scoville Calibration Comparison Table */}
        <div className="bg-[#18181b] border border-[#2a292e] rounded-sm p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
              CALIBRACIÓN SCOVILLE OFICIAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
              Escala de Sensación Térmica Sublingual
            </h2>
            <p className="text-xs sm:text-sm text-[#8b8a8e]">
              Medición de capsaicinoides activos mediante cromatografía líquida de alta resolución (HPLC).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#121214] text-[#8b8a8e] uppercase border-b border-[#2e2d31]">
                <tr>
                  <th className="py-3 px-4 font-bold">Formulación</th>
                  <th className="py-3 px-4 font-bold text-[#fcba28]">Calificación SHU</th>
                  <th className="py-3 px-4 font-bold">Variedad de Chile</th>
                  <th className="py-3 px-4 font-bold">Sensación Neuromotora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242327]">
                {scovilleTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1f1e24] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white uppercase">{row.product}</td>
                    <td className="py-3.5 px-4 font-bold text-[#fcba28]">{row.scoville}</td>
                    <td className="py-3.5 px-4 text-[#b1b0b5]">{row.chile}</td>
                    <td className="py-3.5 px-4 text-[#8b8a8e]">{row.feeling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Certifications & Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#18181b] border border-[#262529] p-6 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center text-[#4ade80]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase font-headline text-white">
              0% Químicos Industriales
            </h3>
            <p className="text-xs text-[#a2a1a6] leading-relaxed">
              No utilizamos jarabe de maíz de alta fructosa (JMAF), benzoato sódico ni gomas sintéticas. La conservación proviene de la acidez natural del tamarindo y el chile.
            </p>
          </div>

          <div className="bg-[#18181b] border border-[#262529] p-6 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#fcba28]/10 border border-[#fcba28]/30 flex items-center justify-center text-[#fcba28]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase font-headline text-white">
              Sal de Mar Virgen de Colima
            </h3>
            <p className="text-xs text-[#a2a1a6] leading-relaxed">
              Extraída artesanalmente en la laguna de Cuyutlán. Aporta 84 oligoelementos que ayudan al balance electrolítico sin el retrogusto metálico de la sal refinada yodada.
            </p>
          </div>

          <div className="bg-[#18181b] border border-[#262529] p-6 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center text-[#ff4d00]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase font-headline text-white">
              Grip Anti-Adherente Seco
            </h3>
            <p className="text-xs text-[#a2a1a6] leading-relaxed">
              Tratamiento térmico especial que fija la pulpa deshidratada y el polvo de chile a la gomita. Puedes agarrarla con los dedos sudados sin dejar residuos en tu equipo.
            </p>
          </div>
        </div>

        {/* Technical FAQs Accordion */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono uppercase text-[#fcba28] font-bold tracking-widest">
              PREGUNTAS TÉCNICAS FRECUENTES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-headline uppercase text-white">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {TECHNICAL_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#18181b] border border-[#2a292e] rounded-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#1e1d22] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white uppercase font-headline">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#fcba28] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#b1b0b5] leading-relaxed border-t border-[#242327] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
