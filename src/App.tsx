import React, { useState, useEffect } from 'react';
import { PageId, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { WholesaleView } from './views/WholesaleView';
import { TeamFuegoView } from './views/TeamFuegoView';
import { SpecsView } from './views/SpecsView';
import { ProductQuickviewModal } from './components/ProductQuickviewModal';
import { BatchStatusModal } from './components/BatchStatusModal';
import { CartDrawer } from './components/CartDrawer';
import { Check, Flame, MessageCircle, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with 1 sample item to show cart functionality immediately
    {
      product: {
        id: 'aros-fuego',
        name: 'Aros Fuego Tamarindo & Miguelito',
        category: 'AROS GOURMET',
        heatTag: 'NIVEL: POTENCIA ÁGIL',
        heatLevel: 'agil',
        heatScore: 3,
        scoville: '8,500 SHU',
        gripNote: 'GRIP: SECO ULTRA-LIMPIO',
        badge: 'MÁS VENDIDO #01',
        badgeType: 'yellow',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByJqgSpkcQwRyFmg6pPvHhM_ouusWrg-dQjGL6HCwgUfCA8iaidM269EkpSZ7xUbSyEXvAy0p5kvAzdswfvioLKyEnn8wI0hXtv_RJ43rqZz2R8Hq7OdJ0vhIiKP6oBrCF2vN5g0eqd6qO_qUTHrGOqvwdFIBVYcO0d2xnoFpmPQ3gAEd-UUk9M9nTeT5MKV75_YfjUCqJEAY4gb8ml1O47j7T9jypEvpoOUj_fTwnZHYaCf6PiqMtTg',
        description: 'Aros de durazno infusionados con reducción espesa de tamarindo criollo y costra triturada de miguelito ácido con sal de mar de Colima.',
        price: 120,
        availableSizes: ['150g', '250g'],
        selectedSize: '250g',
        nutrition: {
          sodium: '210 mg',
          carbs: '48g',
          calories: '190 kcal',
          keyActive: 'Flor de Jamaica Pura',
        },
        ingredients: 'Gomita de durazno, pulpa natural deshidratada de tamarindo, chile morita y piquín poblano, sal de mar de Colima, extracto cítrico y chamoy seco sin fructosa refinada.',
        usageProtocol: 'Consumir 3 piezas 10-15 minutos antes del entrenamiento metabólico. Provee recarga de glucógeno sublingual inmediata sin pesadez estomacal.',
        sku: 'FD-AROS-01',
        isBestSeller: true,
      },
      size: '250g',
      quantity: 2,
      price: 120,
    }
  ]);

  // Modal and drawer controls
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
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
    size: '150g' | '250g' | '500g' | '2.5kg' = '250g',
    quantity: number = 1
  ) => {
    let unitPrice = product.price;
    if (size === '150g') unitPrice = Math.round(product.price * 0.7);
    if (size === '500g') unitPrice = 220;
    if (size === '2.5kg') unitPrice = 890;

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

    triggerToast(`Agregado a la bolsa: ${product.name} (${size}) x${quantity}`);
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
    triggerToast('Producto retirado de la bolsa táctica');
  };

  const handleClearCart = () => {
    setCartItems([]);
    triggerToast('Bolsa vaciada');
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] flex flex-col font-sans selection:bg-[#fcba28] selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1c1b20] border border-[#fcba28] text-white px-5 py-3 rounded-sm shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-5 h-5 rounded-full bg-[#fcba28] text-black flex items-center justify-center font-bold">
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
        onOpenBatchStatus={() => setIsBatchModalOpen(true)}
        onOpenProductModal={(p) => setQuickviewProduct(p)}
      />

      {/* Active Page View */}
      <main className="flex-1">
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
            onAddToCart={(product, size) => handleAddToCart(product, size || '250g', 1)}
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
          href="https://wa.me/525500000000?text=Hola%20Team%20Fuego,%20tengo%20una%20consulta%20sobre%20sus%20productos%20y%20env%C3%ADos"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          title="Atención directa por WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
          </span>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-black text-[#25D366]" />
          
          {/* Tooltip badge */}
          <span className="absolute right-16 bg-[#18181b] border border-[#2e2d31] text-white text-[11px] font-mono px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            ¿Dudas o pedido exprés? Escríbenos
          </span>
        </a>
      </div>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Drawers */}
      <ProductQuickviewModal
        product={quickviewProduct}
        onClose={() => setQuickviewProduct(null)}
        onAddToCart={(product, size, qty) => {
          handleAddToCart(product, size, qty);
          setQuickviewProduct(null);
        }}
      />

      <BatchStatusModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
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
