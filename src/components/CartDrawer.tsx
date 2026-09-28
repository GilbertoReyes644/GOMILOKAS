import React from 'react';
import { CartItem } from '../types';
import { BUSINESS_CONFIG } from '../data/mockData';
import { X, Trash2, ShoppingBag, PhoneCall, Sparkles, MapPin } from 'lucide-react';

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
  const totalBolsas = items.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppOrder = () => {
    if (items.length === 0) return;

    let text = `*PEDIDO GOMILOKAS (AROS DE MANZANA)*%0A%0A`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${encodeURIComponent(item.product.name)}*%0A`;
      text += `   Cantidad: ${item.quantity} | Precio: $${item.price * item.quantity} MXN%0A`;
    });
    text += `%0A*TOTAL ESTIMADO:* $${total} MXN%0A`;
    text += `*ENTREGA EN:* La Uni / Villa de Tezontepec%0A%0A`;
    text += `Hola Gilberto! Quiero confirmar este pedido de Gomilokas para entrega personal.`;

    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${text}`;
    window.open(url, '_blank');
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
                  Tu Pedido ({totalBolsas} {totalBolsas === 1 ? 'bolsa' : 'bolsas'})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#201f21] border border-[#353437] text-[#cdc7aa] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery note */}
            <div className="mt-3 p-3 bg-[#201f21] border border-[#353437] rounded-xl text-xs flex items-center gap-2 text-[#cdc7aa]">
              <MapPin className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Entregas en mano en la Uni o en Villa de Tezontepec, Hgo.</span>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center text-[#cdc7aa] space-y-2">
                <ShoppingBag className="w-12 h-12 text-[#353437] animate-pulse" />
                <p className="text-sm font-bold uppercase text-white">Tu pedido está vacío</p>
                <p className="text-xs max-w-xs">
                  Agrega una bolsa individual de aros de manzana a $15 o un paquete con descuento.
                </p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${index}`}
                  className="p-3 bg-[#201f21] border border-[#353437] rounded-xl flex items-center gap-3 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-lg bg-black border border-[#2a2a2c] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#fde400] uppercase block">
                      Bolsa 100g
                    </span>
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#25D366]">
                      ${item.price * item.quantity} MXN
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1.5 bg-[#131315] border border-[#353437] rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-[#201f21] hover:bg-[#353437] text-white flex items-center justify-center text-xs font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono font-bold w-6 text-center text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-[#201f21] hover:bg-[#353437] text-white flex items-center justify-center text-xs font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-1.5 text-[#cdc7aa] hover:text-[#d20402] transition-colors cursor-pointer"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Bottom Total & Checkout via WhatsApp */}
          <div className="border-t border-[#2a2a2c] pt-4 space-y-3">
            <div className="space-y-1.5 text-xs text-[#cdc7aa]">
              <div className="flex items-center justify-between text-base font-black text-white pt-1">
                <span>Total a pagar:</span>
                <span className="text-xl font-mono text-[#fde400]">${total} MXN</span>
              </div>
              <p className="text-[11px] text-[#cdc7aa]">
                Pagas en efectivo al momento de la entrega o por transferencia SPEI.
              </p>
            </div>

            <button
              onClick={generateWhatsAppOrder}
              disabled={items.length === 0}
              className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl ${
                items.length > 0
                  ? 'bg-[#25D366] text-black hover:bg-white hover:scale-[1.01] cursor-pointer'
                  : 'bg-[#2a2a2c] text-[#cdc7aa] cursor-not-allowed'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Confirmar Pedido por WhatsApp</span>
            </button>

            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="w-full py-1 text-center text-[11px] text-[#cdc7aa] hover:text-white transition-colors cursor-pointer"
              >
                Vaciar pedido
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
