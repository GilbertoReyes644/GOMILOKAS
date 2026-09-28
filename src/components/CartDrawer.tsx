import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Flame, PhoneCall } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateWhatsAppOrder = () => {
    if (items.length === 0) return;

    let text = `*PEDIDO TÁCTICO // FUEGO DULCE HIGH-OCTANE*%0A%0A`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${encodeURIComponent(item.product.name)}* (${item.size})%0A`;
      text += `   Cantidad: ${item.quantity} | Subtotal: $${item.price * item.quantity} MXN%0A`;
    });
    text += `%0A*TOTAL ESTIMADO:* $${total} MXN%0A%0A`;
    text += `_Solicito confirmación de inventario y datos de envío prioritario en 24h._`;

    window.open(`https://wa.me/5215500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1b1b1d] border-l-2 border-[#2a2a2c] p-6 flex flex-col justify-between shadow-2xl text-white">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#2a2a2c]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#fde400]" />
                <h3 className="text-lg font-black uppercase tracking-tight">
                  Bolsa Táctica ({items.reduce((acc, i) => acc + i.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#201f21] border border-[#353437] text-[#cdc7aa] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free shipping progress badge */}
            <div className="mt-3 p-2.5 bg-[#201f21] border border-[#353437] rounded-xl text-xs flex items-center justify-between">
              <span className="text-[#cdc7aa]">
                {total >= 600 ? (
                  <strong className="text-[#fde400]">¡Envío prioritario express incluido!</strong>
                ) : (
                  <span>Agrega ${(600 - total).toFixed(0)} MXN para envío gratis</span>
                )}
              </span>
              <ShieldCheck className="w-4 h-4 text-[#fde400]" />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center text-[#cdc7aa]">
                <Flame className="w-12 h-12 text-[#353437] mb-2 animate-bounce" />
                <p className="text-sm font-bold uppercase text-white">Tu bolsa está vacía</p>
                <p className="text-xs max-w-xs mt-1">
                  Explora el arsenal de sabores y añade tu dosis de alto octanaje pre-entreno.
                </p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.size}-${index}`}
                  className="p-3 bg-[#201f21] border border-[#353437] rounded-xl flex items-center gap-3 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-lg bg-black border border-[#2a2a2c] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#fde400] uppercase block">
                      {item.size}
                    </span>
                    <h4 className="text-xs font-black text-white uppercase truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-xs text-[#ffb4a8] font-mono font-bold block mt-0.5">
                      ${item.price * item.quantity} MXN{' '}
                      <span className="text-[10px] text-[#cdc7aa] font-normal">
                        (${item.price} c/u)
                      </span>
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center bg-[#131315] border border-[#353437] rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#cdc7aa] hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#cdc7aa] hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-[#ffb4ab] hover:text-red-400 p-1"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          <div className="pt-4 border-t border-[#2a2a2c] space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-[#cdc7aa]">
                <span>Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)} piezas):</span>
                <span className="font-mono text-white">${total} MXN</span>
              </div>
              <div className="flex justify-between text-[#cdc7aa]">
                <span>Garantía térmica 38°C:</span>
                <span className="text-[#fde400] font-bold">100% Cubierta</span>
              </div>
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-[#2a2a2c]">
                <span>Total Estimado:</span>
                <span className="text-[#fde400]">${total} MXN</span>
              </div>
            </div>

            <button
              onClick={generateWhatsAppOrder}
              disabled={items.length === 0}
              className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000] ${
                items.length === 0
                  ? 'bg-[#353437] text-[#cdc7aa] cursor-not-allowed opacity-50'
                  : 'bg-[#fde400] hover:bg-white text-black active:translate-x-0.5 active:translate-y-0.5 cursor-pointer'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Enviar Pedido a WhatsApp</span>
            </button>

            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-[#cdc7aa] hover:text-white uppercase font-bold"
              >
                Vaciar Bolsa Táctica
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
