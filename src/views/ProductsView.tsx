import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA, BUSINESS_CONFIG, AROS_IMAGE } from '../data/mockData';
import { 
  ShoppingBag, 
  PhoneCall, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Package, 
  Check,
  CheckCircle2
} from 'lucide-react';

interface ProductsViewProps {
  onQuickview: (product: Product) => void;
  onAddToCart: (product: Product, size?: '100g' | '150g' | '250g' | '500g' | '2.5kg') => void;
  onNavigateToWholesale: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onQuickview,
  onAddToCart,
  onNavigateToWholesale,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    onAddToCart(product, '100g');
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1600);
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#2a2a2d] pb-8 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#fde400] uppercase bg-[#fde400]/10 px-3 py-1 rounded-full border border-[#fde400]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#fde400]" />
              Catálogo de Aros de Manzana // GOMILOKAS
            </div>
            <div className="text-xs font-mono text-[#cdc7aa]">
              Bolsa 10.5 x 15 cm • <span className="text-[#fde400] font-bold">$15.00 MXN</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase text-white mb-3">
            Aros de Manzana Enchilados
          </h1>
          <p className="text-sm sm:text-base text-[#cdc7aa] max-w-2xl leading-relaxed">
            Nuestro único y consentido producto: aros de manzana verde frescos con la receta casera de chamoy acidito y chilito en polvo que no escurre. Pide bolsas individuales o aprovecha los paquetes con descuento.
          </p>
        </div>

        {/* Featured Big Card for Single Bag ($15) */}
        <div className="mt-8 bg-gradient-to-r from-[#1b1b1d] to-[#161618] border-2 border-[#fde400]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-[#131315] border border-[#353437] relative">
              <img
                src={AROS_IMAGE}
                alt="Aros de Manzana Gomilokas 100g"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#fde400] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                PRESENTACIÓN ESTÁNDAR
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#25D366] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Disponible para entrega inmediata
                </span>
                <span className="text-3xl font-black text-[#fde400] font-mono">
                  $15.00 MXN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Aros de Manzana Verde (100g)
              </h2>

              <p className="text-xs sm:text-sm text-[#cdc7aa] leading-relaxed">
                Empacadas en bolsa termosellada de 10.5 x 15 cm. Gomitas suaves y frescas con el balance ideal entre lo dulce de la manzana verde, el ácido del chamoy y el picor sabroso del chilito.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-[#cdc7aa] pt-1">
                <span className="flex items-center gap-1.5 bg-[#201f21] px-3 py-1.5 rounded-lg border border-[#353437]">
                  <Package className="w-3.5 h-3.5 text-[#fde400]" />
                  Bolsa 10.5 x 15 cm
                </span>
                <span className="flex items-center gap-1.5 bg-[#201f21] px-3 py-1.5 rounded-lg border border-[#353437]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#25D366]" />
                  Entrega en la Uni
                </span>
                <span className="flex items-center gap-1.5 bg-[#201f21] px-3 py-1.5 rounded-lg border border-[#353437]">
                  <MapPin className="w-3.5 h-3.5 text-[#fde400]" />
                  Villa de Tezontepec
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={() => handleAdd(PRODUCTS_DATA[0])}
                  className="flex-1 py-3.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {addedId === PRODUCTS_DATA[0].id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Agregado al Pedido!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar Bolsa ($15 MXN)</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    'Hola Gilberto! Quiero pedir una bolsa de Aros de Manzana de 100g ($15 MXN)'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-[#25D366] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Pedir directo por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All Packs Grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-black uppercase text-white tracking-tight">
              Opciones de Compra & Paquetes
            </h3>
            <button
              onClick={onNavigateToWholesale}
              className="text-xs font-mono text-[#fde400] hover:underline cursor-pointer"
            >
              Ver Mayoreo Completo →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl p-5 flex flex-col justify-between hover:border-[#fde400]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#201f21] text-[#fde400] font-bold border border-[#353437]">
                      {product.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      ${product.price} MXN
                    </span>
                  </div>

                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#131315] mb-4 border border-[#353437] relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="font-extrabold text-base text-white uppercase tracking-tight mb-1.5 group-hover:text-[#fde400] transition-colors">
                    {product.name}
                  </h4>

                  <p className="text-xs text-[#cdc7aa] leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#2a2a2c]">
                  <button
                    onClick={() => handleAdd(product)}
                    className="w-full py-2.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>¡Agregado!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Agregar al Pedido</span>
                      </>
                    )}
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

        {/* Quick FAQ / Note Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#1b1b1d] border border-[#2a2a2c] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white uppercase">
              ¿Quieres un paquete personalizado para tu fiesta o para tu salón?
            </h4>
            <p className="text-xs text-[#cdc7aa]">
              Mándame un WhatsApp y acordamos la cantidad de bolsas y el punto de entrega en Villa de Tezontepec o en la Uni.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
              'Hola Gilberto! Quiero cotizar un paquete personalizado de Gomilokas'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Escribir al WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
