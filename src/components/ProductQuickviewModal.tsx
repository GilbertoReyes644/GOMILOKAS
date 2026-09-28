import React, { useState } from 'react';
import { Product } from '../types';
import { X, Flame, ShieldCheck, Zap, Thermometer, Check, ShoppingBag } from 'lucide-react';

interface ProductQuickviewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: '150g' | '250g' | '500g' | '2.5kg', quantity: number) => void;
}

export const ProductQuickviewModal: React.FC<ProductQuickviewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<'150g' | '250g' | '500g' | '2.5kg'>(
    product.availableSizes[0] || '250g'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  // Price adjustment based on size
  let computedPrice = product.price;
  if (selectedSize === '150g') computedPrice = Math.round(product.price * 0.7);
  if (selectedSize === '500g') computedPrice = 220;
  if (selectedSize === '2.5kg') computedPrice = 890;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const waMessage = encodeURIComponent(
    `Hola Fuego Dulce, me interesa ordenar: ${product.name} (${selectedSize}) x ${quantity} uds. Total estimado: $${computedPrice * quantity} MXN.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#1b1b1d] border-2 border-[#2a2a2c] hover:border-[#fde400]/80 transition-colors w-full max-w-2xl rounded-2xl p-6 md:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#201f21] border border-[#353437] text-white hover:text-[#fde400] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-[#fde400] text-black font-black text-[10px] uppercase tracking-wider rounded">
            FICHA TÉCNICA OFICIAL
          </span>
          <span className="text-[11px] font-mono text-[#cdc7aa] uppercase">
            SKU: {product.sku}
          </span>
          <span className="text-[11px] text-[#ffb4a8] font-bold uppercase flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-[#d20402]" />
            {product.scoville}
          </span>
        </div>

        {/* Header Grid: Image + Main details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          <div className="sm:col-span-5 relative rounded-xl overflow-hidden bg-black border border-[#353437]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-[#0e0e10]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#cdc7aa] font-mono">
              {product.gripNote}
            </div>
          </div>

          <div className="sm:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#fde400]">
                {product.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mt-0.5 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-[#cdc7aa] mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#2a2a2c] flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-black text-white">
                  ${computedPrice}{' '}
                  <span className="text-xs font-mono text-[#cdc7aa]">MXN</span>
                </span>
                <span className="block text-[11px] text-[#fde400] font-bold">
                  {product.nutrition.carbs} Carbs • {product.nutrition.calories}
                </span>
              </div>
              <span className="text-[10px] text-[#cdc7aa] uppercase flex items-center gap-1 bg-[#201f21] px-2 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fde400]" />
                Sellado UV Hermético
              </span>
            </div>
          </div>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mt-6">
          <div className="p-2.5 bg-[#201f21] border border-[#2a2a2c] rounded-xl">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Sodio Activo</span>
            <span className="text-base font-black text-[#fde400]">
              {product.nutrition.sodium}
            </span>
          </div>
          <div className="p-2.5 bg-[#201f21] border border-[#2a2a2c] rounded-xl">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Carbohidratos</span>
            <span className="text-base font-black text-white">
              {product.nutrition.carbs}
            </span>
          </div>
          <div className="p-2.5 bg-[#201f21] border border-[#2a2a2c] rounded-xl">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Calorías</span>
            <span className="text-base font-black text-white">
              {product.nutrition.calories}
            </span>
          </div>
          <div className="p-2.5 bg-[#201f21] border border-[#2a2a2c] rounded-xl">
            <span className="text-[10px] text-[#cdc7aa] uppercase block">Picor Escala</span>
            <span className="text-base font-black text-[#d20402]">
              {product.heatScore}/5
            </span>
          </div>
        </div>

        {/* Ingredients & Protocol */}
        <div className="space-y-3 mt-4 text-xs">
          <div className="p-3 bg-[#201f21] rounded-xl border border-[#2a2a2c]">
            <span className="text-[10px] font-bold uppercase text-[#fde400] block mb-1">
              Ingredientes Funcionales de Comal:
            </span>
            <p className="text-[#cdc7aa] leading-relaxed">{product.ingredients}</p>
          </div>

          <div className="p-3 bg-[#201f21] rounded-xl border border-[#2a2a2c]">
            <span className="text-[10px] font-bold uppercase text-[#fde400] block mb-1">
              Modo de Empleo en Entrenamiento:
            </span>
            <p className="text-[#cdc7aa] leading-relaxed">{product.usageProtocol}</p>
          </div>
        </div>

        {/* Size Selection & Quantity */}
        <div className="mt-5 pt-4 border-t border-[#2a2a2c] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold text-[#cdc7aa]">Formato:</span>
            <div className="flex gap-1.5">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 text-xs font-black uppercase rounded-lg border transition-all ${
                    selectedSize === size
                      ? 'bg-[#fde400] text-black border-[#fde400] shadow-sm'
                      : 'bg-[#201f21] text-[#cdc7aa] border-[#353437] hover:border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold text-[#cdc7aa]">Cantidad:</span>
            <div className="flex items-center bg-[#201f21] border border-[#353437] rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2.5 py-1 text-white hover:text-[#fde400] font-bold"
              >
                -
              </button>
              <span className="px-2 font-mono text-xs font-bold text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2.5 py-1 text-white hover:text-[#fde400] font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-[#201f21] hover:bg-[#2a2a2c] border-2 border-[#353437] hover:border-[#fde400] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            {addedNotice ? (
              <>
                <Check className="w-4 h-4 text-[#fde400]" />
                <span className="text-[#fde400]">¡Agregado a la Bolsa!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar a Bolsa Táctica</span>
              </>
            )}
          </button>

          <a
            href={`https://wa.me/5215500000000?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-[2px_2px_0px_#000000] flex items-center justify-center gap-2 text-center"
          >
            <Zap className="w-4 h-4" />
            <span>Pedir Directo por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
