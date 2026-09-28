import React, { useState, useMemo } from 'react';
import { Product, HeatLevel } from '../types';
import { PRODUCTS_DATA } from '../data/mockData';
import { 
  Flame, 
  Search, 
  SlidersHorizontal, 
  ShoppingBag, 
  Eye, 
  Check, 
  Zap, 
  Sparkles, 
  ShieldAlert, 
  Package, 
  Scale, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface ProductsViewProps {
  onQuickview: (product: Product) => void;
  onAddToCart: (product: Product, size?: '150g' | '250g' | '500g' | '2.5kg') => void;
  onNavigateToWholesale: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onQuickview,
  onAddToCart,
  onNavigateToWholesale,
}) => {
  const [selectedHeat, setSelectedHeat] = useState<HeatLevel>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS_DATA.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      const matchesHeat = selectedHeat === 'all' || product.heatLevel === selectedHeat;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scoville.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesHeat && matchesCategory && matchesSearch;
    });
  }, [selectedHeat, selectedCategory, searchQuery]);

  const handleAdd = (product: Product) => {
    onAddToCart(product, product.selectedSize);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1600);
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] pb-24 pt-8">
      {/* Top Banner & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Title */}
        <div className="border-b border-[#2a2a2d] pb-8 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#fcba28] uppercase bg-[#fcba28]/10 px-3 py-1 rounded-sm border border-[#fcba28]/30">
              <Flame className="w-3.5 h-3.5 text-[#ff4d00] animate-pulse" />
              Catálogo de Fuego Artesanal // Lote #08
            </div>
            <div className="text-xs font-mono text-[#8b8a8e]">
              Mostrando <span className="text-[#fcba28] font-bold">{filteredProducts.length}</span> formulaciones activas
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase text-white mb-3">
            Gomitas de Alto Rendimiento & Chiles Puros
          </h1>
          <p className="text-sm sm:text-base text-[#b1b0b5] max-w-3xl leading-relaxed">
            Formuladas con pulpa natural de tamarindo, chile morita tatemado, habanero yucateco y sal de grano de Colima. Diseñadas para deportistas de fondo, adictos al picante real y negocios de alto flujo.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-8 bg-[#1a191c] border border-[#2e2d31] p-4 sm:p-5 rounded-sm shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search */}
            <div className="relative md:col-span-4">
              <Search className="w-4 h-4 text-[#8b8a8e] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por sabor, chile, scoville o ingrediente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#131315] border border-[#343338] text-white text-xs pl-9 pr-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28] transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8b8a8e] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Heat Level Pills */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono uppercase text-[#8b8a8e] mr-1 hidden sm:inline">
                Picor:
              </span>
              <button
                onClick={() => setSelectedHeat('all')}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded-sm border transition-all ${
                  selectedHeat === 'all'
                    ? 'bg-[#fcba28] text-black font-bold border-[#fcba28]'
                    : 'bg-[#131315] text-[#b1b0b5] border-[#2e2d31] hover:border-[#fcba28]/40'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedHeat('bravo')}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded-sm border transition-all flex items-center gap-1 ${
                  selectedHeat === 'bravo'
                    ? 'bg-[#4ade80] text-black font-bold border-[#4ade80]'
                    : 'bg-[#131315] text-[#4ade80] border-[#2e2d31] hover:border-[#4ade80]/40'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"></span>
                Bravo (Medio)
              </button>
              <button
                onClick={() => setSelectedHeat('agil')}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded-sm border transition-all flex items-center gap-1 ${
                  selectedHeat === 'agil'
                    ? 'bg-[#fcba28] text-black font-bold border-[#fcba28]'
                    : 'bg-[#131315] text-[#fcba28] border-[#2e2d31] hover:border-[#fcba28]/40'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#fcba28]"></span>
                Ágil (Intenso)
              </button>
              <button
                onClick={() => setSelectedHeat('fuego')}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded-sm border transition-all flex items-center gap-1 ${
                  selectedHeat === 'fuego'
                    ? 'bg-[#ff4d00] text-white font-bold border-[#ff4d00]'
                    : 'bg-[#131315] text-[#ff4d00] border-[#2e2d31] hover:border-[#ff4d00]/40'
                }`}
              >
                <Flame className="w-3 h-3 text-[#ff4d00]" />
                Fuego Nitro
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3 flex items-center justify-end">
              <div className="w-full relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#131315] border border-[#343338] text-white text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#fcba28] transition-colors uppercase font-mono"
                >
                  <option value="all">Todas las Categorías</option>
                  {categories.filter(c => c !== 'all').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Wholesale Banner Teaser */}
        <div className="mt-6 bg-gradient-to-r from-[#201c10] via-[#1a1714] to-[#131315] border-l-4 border-l-[#fcba28] border border-[#383325] p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#fcba28]/20 flex items-center justify-center shrink-0 border border-[#fcba28]/40 text-[#fcba28]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#fcba28] uppercase font-bold tracking-wider">
                ¿Tienes tienda, box de CrossFit o vendes a granel?
              </div>
              <div className="text-sm font-semibold text-white">
                Precios de mayoreo desde 20 unidades con márgenes del 40% al 55% de reventa directa.
              </div>
            </div>
          </div>
          <button
            onClick={onNavigateToWholesale}
            className="self-start sm:self-auto px-4 py-2 bg-[#fcba28] text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-[#ffd05b] transition-colors rounded-sm flex items-center gap-2 whitespace-nowrap"
          >
            <span>Ver Tarifas B2B</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className="bg-[#18181b] border border-[#2a292e] rounded-sm overflow-hidden flex flex-col hover:border-[#fcba28]/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-[#fcba28]/5"
              >
                {/* Image and Badges */}
                <div className="relative aspect-[4/3] bg-[#0c0c0e] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.badge && (
                      <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-sm tracking-wider shadow-md ${
                        product.badgeType === 'yellow'
                          ? 'bg-[#fcba28] text-black'
                          : product.badgeType === 'red'
                          ? 'bg-[#ff4d00] text-white'
                          : 'bg-[#222126] text-white border border-[#3e3d43]'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    <span className="text-[9px] font-mono bg-black/80 backdrop-blur-xs text-[#fcba28] px-2 py-0.5 rounded-sm border border-[#fcba28]/30">
                      {product.scoville}
                    </span>
                  </div>

                  {/* Grip Note */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#b1b0b5]">
                    <span className="bg-black/70 px-2 py-0.5 rounded-sm border border-[#2e2d31]">
                      {product.gripNote}
                    </span>
                    <button
                      onClick={() => onQuickview(product)}
                      className="bg-black/80 hover:bg-[#fcba28] hover:text-black text-white px-2.5 py-1 rounded-sm border border-white/20 transition-colors flex items-center gap-1.5 font-bold"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Ficha Técnica</span>
                    </button>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono tracking-widest text-[#fcba28] uppercase font-bold">
                        {product.category}
                      </span>
                      {/* Heat visual dots */}
                      <div className="flex items-center gap-1" title={`Potencia de calor: ${product.heatScore}/5`}>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < product.heatScore
                                ? product.heatLevel === 'fuego'
                                  ? 'bg-[#ff4d00]'
                                  : product.heatLevel === 'agil'
                                  ? 'bg-[#fcba28]'
                                  : 'bg-[#4ade80]'
                                : 'bg-[#2e2d31]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg font-black font-headline uppercase tracking-tight text-white group-hover:text-[#fcba28] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#a2a1a6] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Nutrition specs chips */}
                    <div className="mt-3 grid grid-cols-3 gap-1.5 bg-[#121214] p-2 rounded-sm border border-[#262529] text-[10px] font-mono text-center">
                      <div>
                        <div className="text-[#737278]">SODIO</div>
                        <div className="text-white font-bold">{product.nutrition.sodium}</div>
                      </div>
                      <div>
                        <div className="text-[#737278]">CARBS</div>
                        <div className="text-white font-bold">{product.nutrition.carbs}</div>
                      </div>
                      <div>
                        <div className="text-[#737278]">KCAL</div>
                        <div className="text-[#fcba28] font-bold">{product.nutrition.calories}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Price */}
                  <div className="pt-3 border-t border-[#262529] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono text-[#737278] uppercase">
                        Presentación: {product.selectedSize}
                      </div>
                      <div className="text-2xl font-black font-headline text-white tracking-tight">
                        ${product.price} <span className="text-xs font-mono font-normal text-[#fcba28]">MXN</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAdd(product)}
                        className={`px-4 py-2.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg ${
                          isJustAdded
                            ? 'bg-[#22c55e] text-black'
                            : 'bg-[#fcba28] text-black hover:bg-[#ffd05b]'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Agregado</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Agregar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filtered to 0 */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 bg-[#18181b] border border-[#2e2d31] p-12 text-center rounded-sm">
            <ShieldAlert className="w-12 h-12 text-[#fcba28] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold uppercase font-headline text-white">
              No encontramos gomitas con esos criterios
            </h3>
            <p className="text-xs text-[#8b8a8e] mt-1 max-w-md mx-auto">
              Intenta cambiar los filtros de picor o restablecer la búsqueda por texto.
            </p>
            <button
              onClick={() => {
                setSelectedHeat('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#fcba28] text-black font-bold font-mono text-xs uppercase rounded-sm"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

        {/* Direct WhatsApp Ordering Help Footer */}
        <div className="mt-16 bg-[#161619] border border-[#2e2d31] p-6 sm:p-8 rounded-sm text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 text-[#25D366] text-xs font-mono font-bold rounded-sm border border-[#25D366]/30">
              <PhoneCall className="w-3.5 h-3.5" />
              Atención Personalizada en Vivo
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-headline uppercase text-white tracking-tight">
              ¿Quieres armar un pedido personalizado o combinar cubetas?
            </h3>
            <p className="text-xs sm:text-sm text-[#a2a1a6] leading-relaxed">
              Escríbenos directamente a WhatsApp y cotizamos tu envío inmediato o configuramos la mezcla exacta de chiles y gramajes para tu gimnasio o evento deportivo.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/525500000000?text=Hola%20Team%20Fuego,%20quiero%20hacer%20un%20pedido%20especial%20del%20catálogo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hablar con un Especialista de Fuego</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
