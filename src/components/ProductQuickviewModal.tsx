import React, { useState } from 'react';
import { Product } from '../types';
import { BUSINESS_CONFIG } from '../data/mockData';
import { X, Sparkles, Check, ShoppingBag, PhoneCall, Package } from 'lucide-react';

interface ProductQuickviewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: '100g' | '150g' | '250g' | '500g' | '2.5kg', quantity: number) => void;
}

export const ProductQuickviewModal: React.FC<ProductQuickviewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const computedPrice = product.price;

  const handleAddToCart = () => {
    onAddToCart(product, '100g', quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  const waMessage = encodeURIComponent(
    `Hola Gilberto! Me interesa pedir: ${product.name} x ${quantity} piezas. Total: $${computedPrice * quantity} MXN.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#1b1b1d] border-2 border-[#2a2a2c] w-full max-w-lg rounded-3xl p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#201f21] border border-[#353437] text-white hover:text-[#fde400] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-[#fde400] text-black font-black text-[10px] uppercase tracking-wider rounded-full">
            {product.badge || 'GOMILOKAS'}
          </span>
          <span className="text-[11px] font-mono text-[#cdc7aa]">
            Bolsa 10.5 x 15 cm (100g)
          </span>
        </div>

        {/* Image & Header */}
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-black border border-[#353437] aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              {product.name}
            </h2>
            <p className="text-xs text-[#cdc7aa] mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-baseline justify-between pt-2 border-t border-[#2a2a2c]">
            <div>
              <span className="text-2xl font-black text-[#fde400] font-mono">
                ${computedPrice * quantity} MXN
              </span>
              <span className="block text-[11px] text-[#cdc7aa]">
                ${computedPrice} MXN cada bolsa de 100g
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-[#201f21] border border-[#353437] rounded-xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-lg bg-[#131315] text-white font-bold flex items-center justify-center hover:bg-[#353437] cursor-pointer"
              >
                -
              </button>
              <span className="w-6 text-center font-bold text-sm text-white font-mono">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-lg bg-[#131315] text-white font-bold flex items-center justify-center hover:bg-[#353437] cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-[#fde400] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>¡Agregado al pedido!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Agregar al Pedido ({quantity} {quantity === 1 ? 'bolsa' : 'bolsas'})</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Pedir directo por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
