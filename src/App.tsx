import React, { useState } from 'react';
import { PageId, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { WholesaleView } from './views/WholesaleView';
import { TeamFuegoView } from './views/TeamFuegoView';
import { SpecsView } from './views/SpecsView';
import { ProductQuickviewModal } from './components/ProductQuickviewModal';
import { CartDrawer } from './components/CartDrawer';
import { BatchStatusModal } from './components/BatchStatusModal';
import { ShareModal } from './components/ShareModal';
import { Check, MessageCircle } from 'lucide-react';
import { PRODUCTS_DATA, BUSINESS_CONFIG } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS_DATA[0],
      size: '100g',
      quantity: 2,
      price: PRODUCTS_DATA[0].price,
    }
  ]);

  // Modal and drawer controls
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBatchStatusOpen, setIsBatchStatusOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [quickviewProduct, setQuickviewProduct] = useState<Product | null>(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleNavigate = (page: PageId, anchorId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleAddToCart = (
    product: Product,
    size: '100g' | '150g' | '250g' | '500g' | '2.5kg' = '100g',
    quantity: number = 1
  ) => {
    const unitPrice = product.price;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            size,
            quantity,
            price: unitPrice,
          },
        ];
      }
    });

    triggerToast(`Agregado a tu pedido: ${product.name} x${quantity}`);
  };

  const handleUpdateCartQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
    triggerToast('Producto retirado de tu pedido');
  };

  const handleClearCart = () => {
    setCartItems([]);
    triggerToast('Pedido vaciado');
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] flex flex-col font-sans selection:bg-[#fde400] selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1c1b20] border border-[#fde400] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-5 h-5 rounded-full bg-[#fde400] text-black flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wide">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-[#8b8a8e] hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Responsive Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBatchStatus={() => setIsBatchStatusOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenProductModal={(p) => setQuickviewProduct(p)}
      />

      {/* Active Page View */}
      <main className="flex-1 pt-28">
        {currentPage === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenProductModal={(p) => setQuickviewProduct(p)}
            onAddToCart={(product, size, qty) => handleAddToCart(product, size, qty)}
          />
        )}

        {currentPage === 'productos' && (
          <ProductsView
            onQuickview={(p) => setQuickviewProduct(p)}
            onAddToCart={(product, size) => handleAddToCart(product, size || '100g', 1)}
            onNavigateToWholesale={() => handleNavigate('mayoristas')}
          />
        )}

        {currentPage === 'mayoristas' && <WholesaleView />}

        {currentPage === 'team-fuego' && <TeamFuegoView />}

        {currentPage === 'especificaciones' && <SpecsView />}
      </main>

      {/* Floating Fast WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
            'Hola Gilberto! Quiero pedir unas bolsas de Aros de Manzana de 100g'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          title={`Pedir por WhatsApp (${BUSINESS_CONFIG.phone})`}
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-black text-[#25D366]" />
          
          {/* Tooltip badge */}
          <span className="absolute right-16 bg-[#18181b] border border-[#2e2d31] text-white text-[11px] font-mono px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Pide tus aros por WhatsApp
          </span>
        </a>
      </div>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Drawers */}
      <BatchStatusModal
        isOpen={isBatchStatusOpen}
        onClose={() => setIsBatchStatusOpen(false)}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      <ProductQuickviewModal
        product={quickviewProduct}
        onClose={() => setQuickviewProduct(null)}
        onAddToCart={(product, size, qty) => {
          handleAddToCart(product, size, qty);
          setQuickviewProduct(null);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
