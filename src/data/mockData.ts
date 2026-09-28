import { Product, WholesaleTier, CrewMember, CampusReview } from '../types';
import arosImg from '../assets/images/aros_manzana_gomilokas_1790574209464.jpg';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VqXvXJj0A4Xd2hed7_dvSD_zpUAcAYmmLmnzBCKsb1cM3iNHkVhZ_r2oWsxZMy_8LZkbivNHsDqBtEe6pCmlMCpH2S4MS3YRBiiTLEQ1cviq8p--OS3si18Ss9RxrpqUNOGKU46zoIdt1-BWApg6RB2QkdVjqy6r1ihUgAGUU9ImGyVi70p8fqoJrwpGLBU-Q-3oGLyxhkqUl0amnLMfUqJuFITBeTe60HlHU3R8JB1uGPm4NSofzT75r7';

export const AROS_IMAGE = arosImg;

export const BUSINESS_CONFIG = {
  name: 'GOMILOKAS',
  tagline: 'Aros de Manzana Enchilados',
  subtagline: 'El Antojo Callejero & Universitario Más Cabrón',
  founder: 'Gilberto (18 años, estudiante universitario)',
  phone: '+52 5547285702',
  whatsappRaw: '525547285702',
  location: 'Villa de Tezontepec, Hgo & Entregas en Campus Universitario',
  singleFormat: 'Bolsa 10.5 x 15 cm (100g)',
  singlePrice: 15,
  batchStatus: 'DROP ACTIVO // PREPARADO FRESCO CADA SEMANA',
};

export const CAMPUS_DROP_STATUS = {
  todayStatus: 'ACTIVO',
  currentBatch: 'LOTE FRESCO DE LA SEMANA',
  campusSpot: 'Edificios principales, descansos y cafetería',
  localSpot: 'Villa de Tezontepec, Hgo (Puntos acordados por WhatsApp)',
  guarantee: '100% Sin derrames • Gomita suave garantizada',
  nextDropTime: 'Entrega entre clases y descansos',
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'aros-manzana-100g',
    name: 'Aros de Manzana Gomilokas (100g)',
    category: 'DROP ESTRELLA',
    heatTag: 'DULCE, ACIDITO & PICOSITO // 100G',
    heatLevel: 'agil',
    heatScore: 3,
    scoville: 'Picor Sabroso de Salón',
    gripNote: 'BOLSA 10.5 x 15 CM (100g)',
    badge: 'MÁS VENDIDO EN LA UNI',
    badgeType: 'yellow',
    image: arosImg,
    description: 'Aros de gomita de manzana verde fresca cubiertos con chamoy casero acidito y chilito en polvo bien adherido que NO escurre en tu mochila ni mancha tus libretas.',
    price: 15,
    availableSizes: ['100g'],
    selectedSize: '100g',
    nutrition: {
      sodium: '160 mg',
      carbs: '22g',
      calories: '95 kcal',
      keyActive: 'Bolsa 10.5x15cm (100g)',
    },
    ingredients: 'Gomita de manzana verde tierna, chamoy casero acidito, mezcla de chiles en polvo con limón deshidratado y sal de mar.',
    usageProtocol: 'El snack definitivo para no dormirte en cálculo, pasar el descanso con los compas o bajarte el estrés de exámenes.',
    sku: 'GM-AROS-100G',
    isBestSeller: true,
  },
  {
    id: 'combo-amigos-3',
    name: 'Combo Amigos (3 Bolsas de 100g)',
    category: 'PARA EL GRUPITO',
    heatTag: '3 BOLSAS DE 100G // $45 MXN',
    heatLevel: 'agil',
    heatScore: 3,
    scoville: 'Picor Sabroso de Salón',
    gripNote: '3 BOLSAS (100g c/u)',
    badge: 'IDEAL PARA EL SALÓN',
    badgeType: 'yellow',
    image: arosImg,
    description: 'Tres bolsas de 100g para compartir con tus compas de clase y que nadie se quede con las ganas. Cero envidia en el pupitre.',
    price: 45,
    availableSizes: ['100g'],
    selectedSize: '100g',
    nutrition: {
      sodium: '160 mg',
      carbs: '22g',
      calories: '95 kcal',
      keyActive: '3x Bolsa 10.5x15cm',
    },
    ingredients: 'Gomita de manzana verde tierna, chamoy casero acidito, mezcla de chiles en polvo y limón.',
    usageProtocol: 'Para el grupo de estudio de 3 compas que necesitan energía durante el proyecto final.',
    sku: 'GM-COMBO-3',
  },
  {
    id: 'paquete-estudio-5',
    name: 'Paquete Semana (5 Bolsas de 100g)',
    category: 'PRECIO ESPECIAL',
    heatTag: '5 BOLSAS DE 100G // $70 MXN',
    heatLevel: 'agil',
    heatScore: 3,
    scoville: 'Picor Sabroso de Salón',
    gripNote: '5 BOLSAS (AHORRAS $5)',
    badge: 'AHORRAS $5 MXN ($14 C/U)',
    badgeType: 'yellow',
    image: arosImg,
    description: '5 bolsas de 100g por solo $70 MXN ($14 cada una). Asegura un antojo diario de lunes a viernes en la universidad o para tu fin de semana.',
    price: 70,
    availableSizes: ['100g'],
    selectedSize: '100g',
    nutrition: {
      sodium: '160 mg',
      carbs: '22g',
      calories: '95 kcal',
      keyActive: '5x Bolsa 10.5x15cm',
    },
    ingredients: 'Gomita de manzana verde tierna, chamoy casero acidito, mezcla de chiles en polvo y limón.',
    usageProtocol: 'Tener siempre una en la mochila listo para cuando entra el hambre a mitad de clase.',
    sku: 'GM-PACK-5',
  },
  {
    id: 'paquete-mayoreo-10',
    name: 'Paquete Mayoreo Uni (10 Bolsas)',
    category: 'REVENTA O FIESTA',
    heatTag: '10 BOLSAS DE 100G // $130 MXN',
    heatLevel: 'agil',
    heatScore: 3,
    scoville: 'Picor Sabroso de Salón',
    gripNote: '10 BOLSAS ($13 C/U)',
    badge: 'PRECIO MAYOREO ($13 C/U)',
    badgeType: 'red',
    image: arosImg,
    description: '10 bolsas de 100g a $13 c/u (Total: $130). Si las revendes a $15 en tu piso o edificio de la facultad, te ganas $20 limpios en un ratito.',
    price: 130,
    availableSizes: ['100g'],
    selectedSize: '100g',
    nutrition: {
      sodium: '160 mg',
      carbs: '22g',
      calories: '95 kcal',
      keyActive: '10x Bolsa 10.5x15cm',
    },
    ingredients: 'Gomita de manzana verde tierna, chamoy casero acidito, mezcla de chiles en polvo y limón.',
    usageProtocol: 'Para reuniones, fiestas caseras o para emprender en tu propio salón de clases.',
    sku: 'GM-PACK-10',
  }
];

export const WHOLESALE_TIERS: WholesaleTier[] = [
  {
    id: 'pack-uni-10',
    name: 'STARTER PACK // 10 BOLSAS',
    badge: 'FÁCIL PARA EMPEZAR',
    marginPct: 15,
    unitsRange: '10 bolsas (10.5x15cm, 100g)',
    costPerUnit: 13.0,
    pvp: 15.0,
    description: 'El paquete de prueba para compas de salón que quieren sacar unos pesos o llevar botana a una fiesta.',
    features: [
      '10 bolsas de 100g de aros de manzana',
      'Precio mayorista: $13.00 c/u (Inversión: $130 MXN)',
      'Vendiéndolas a $15 recuperas $150 (Ganancia: $20 MXN)',
      'Entrega directa en mano en la Uni o Tezontepec',
    ],
  },
  {
    id: 'pack-emprendedor-25',
    name: 'FACULTAD DROP // 25 BOLSAS',
    badge: 'MÁS POPULAR ENTRE ESTUDIANTES',
    marginPct: 27,
    unitsRange: '25 bolsas (10.5x15cm, 100g)',
    costPerUnit: 11.0,
    pvp: 15.0,
    description: 'El favorito de los compas que venden en descansos. Se van en dos días y te deja para pasajes y comidas.',
    features: [
      '25 bolsas de 100g selladas herméticamente',
      'Precio preferencial: $11.00 c/u (Inversión: $275 MXN)',
      'Vendiéndolas a $15 recuperas $375 (Ganancia neta: $100 MXN)',
      'Empaque listo para vender directo de la mochila',
    ],
    recommended: true,
  },
  {
    id: 'pack-mayoreo-50',
    name: 'MASTER DISTRIBUIDOR // 50 BOLSAS',
    badge: 'MÁXIMA GANANCIA (33%)',
    marginPct: 33,
    unitsRange: '50 bolsas (10.5x15cm, 100g)',
    costPerUnit: 10.0,
    pvp: 15.0,
    description: 'Para compas que distribuyen en dos o tres grupos, tienditas escolares o eventos del fin de semana.',
    features: [
      '50 bolsas de 100g de aros de manzana',
      'Precio especial: $10.00 c/u (Inversión: $500 MXN)',
      'Vendiéndolas a $15 recuperas $750 (Ganancia neta: $250 MXN)',
      'Atención prioritaria y entrega programada por WhatsApp',
    ],
  },
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: 'gilberto-founder',
    name: 'Gilberto',
    alias: 'EL FUNDADOR & MASTER CRAFTER',
    role: 'Creador & Productor Artesanal',
    category: 'FUNDADOR // 18 AÑOS',
    location: 'Villa de Tezontepec, Hgo',
    badge: '100% HUSTLE REAL',
    bio: 'Empecé a los 18 años mientras estudio en la uni. Preparaba aros de manzana para mis horas libres y cuando mis compas de salón los probaron me exigieron que les llevara todos los días. Sin socios fantasmas ni recetas de laboratorio: gomita fresca, chamoy que no escurre y ganas de salir adelante.',
    stats: [
      { label: 'EDAD', value: '18 AÑOS' },
      { label: 'STATUS', value: 'ESTUDIANTE ACTIVO' },
      { label: 'ESPECIALIDAD', value: 'AROS ENCHILADOS' },
      { label: 'BASE', value: 'TEZONTEPEC, HGO' },
    ],
    favoritePack: 'Bolsa 100g Recién Sellada',
    isFounder: true,
  },
  {
    id: 'campus-testers',
    name: 'El Squad de la Facultad',
    alias: 'CRÍTICOS & CONSENTIDOS DEL SALÓN',
    role: 'Los Compas del Salón & Beta Testers',
    category: 'RED UNIVERSITARIA',
    location: 'Campus Universitario',
    badge: 'TESTERS DEL CAMPUS',
    bio: 'Los amigos del salón que prueban cada tanda nueva de chamoy antes de salir a la venta. Si un lote no tiene el nivel exacto de acidito y chilito, no se empaca. Son los primeros en acabarse las bolsas en cuanto Gilberto llega con la mochila.',
    stats: [
      { label: 'ZONA', value: 'AULAS & CAFETERÍA' },
      { label: 'TURNO', value: 'MATUTINO / VESPERTINO' },
      { label: 'TIEMPO DE AGOTADO', value: '< 15 MINUTOS' },
      { label: 'RATING', value: '5/5 EN EL SALÓN' },
    ],
    favoritePack: 'Combo Amigos 3x ($45)',
  },
  {
    id: 'comunidad-tezontepec',
    name: 'Comunidad Villa de Tezontepec',
    alias: 'LA BASE DE OPERACIONES',
    role: 'Clientes Locales & Familiares',
    category: 'ORIGEN MUNICIPAL',
    location: 'Villa de Tezontepec, Hidalgo',
    badge: 'LOCAL ROOTS',
    bio: 'Donde nace la receta y se compran los insumos. Amigos, vecinos y conocidos del municipio que piden sus paquetes los fines de semana para reuniones familiares, fiestas o antojo en la tarde.',
    stats: [
      { label: 'ORIGEN', value: 'VILLA DE TEZONTEPEC' },
      { label: 'ENTREGAS', value: 'PUNTOS CÉNTRICOS' },
      { label: 'FRESCURA', value: 'PREPARADO AL DÍA' },
      { label: 'COMERCIO', value: '100% LOCAL' },
    ],
    favoritePack: 'Paquete Mayoreo 10x ($130)',
  },
];

export const CAMPUS_REVIEWS: CampusReview[] = [
  {
    id: 'rev-1',
    name: 'Carlos M.',
    faculty: 'Facultad de Ingeniería',
    avatarText: 'CM',
    rating: 5,
    comment: 'Al chile están con madre. Lo mejor es que el chilito no viene aguado como las gomitas de la tienda, no se te baten los dedos ni manchas los apuntes de la clase.',
    date: 'Esta semana',
    verifiedStudent: true,
  },
  {
    id: 'rev-2',
    name: 'Mariana R.',
    faculty: 'Ciencias Económicas / Admin',
    avatarText: 'MR',
    rating: 5,
    comment: 'Siempre le compro a Gilberto antes de entrar a clase de 2 horas. La combinación de la manzana verde ácida con el chamoy casero es adictiva.',
    date: 'Hace 3 días',
    verifiedStudent: true,
  },
  {
    id: 'rev-3',
    name: 'Kevin L.',
    faculty: 'Estudiante en Campus & Tezontepec',
    avatarText: 'KL',
    rating: 5,
    comment: 'Le pedí el paquete de 10 bolsas para una reunión con mis primos y volaron en 5 minutos. $15 pesos por 100g es una ganga comparado con lo que cobran en los OXXO.',
    date: 'Semana pasada',
    verifiedStudent: true,
  },
  {
    id: 'rev-4',
    name: 'Sofía & Vale',
    faculty: 'Arquitectura / Diseño',
    avatarText: 'SV',
    rating: 5,
    comment: 'La bolsa termosellada aguanta cañón en la mochila. La trajimos todo el día entre maquetas y no se aplastó ni escurrió nada.',
    date: 'Ayer',
    verifiedStudent: true,
  },
];

export const GILBERTO_STORY = {
  name: 'Gilberto',
  age: 18,
  role: 'Estudiante y creador de Gomilokas',
  location: 'Villa de Tezontepec, Hidalgo',
  mission: 'Hacer aros de manzana enchilados de calidad, limpios y a buen precio ($15) para los estudiantes de la uni y la gente de mi municipio.',
  text: 'Tengo 18 años, actualmente estudio en la universidad y empecé Gomilokas preparando aros de manzana enchilados para mis descansos y para mis amigos. A la gente de mi salón les encantó cómo quedaba el chamoy y el chilito (que no escurre en la mochila ni en las libretas). No es una empresa multinacional ni una fórmula secreta de laboratorio: es un antojo bien hecho, con ganas de salir adelante y pagar mis estudios.',
};

export const DELIVERY_POINTS = [
  {
    title: 'En la Universidad (Campus)',
    icon: 'GraduationCap',
    desc: 'Te las entrego en mano en el descanso, entre clases o en puntos comunes del campus.',
    time: 'Lunes a Viernes',
    badge: 'ENTREGA EN PERSONA',
  },
  {
    title: 'Villa de Tezontepec, Hidalgo',
    icon: 'MapPin',
    desc: 'Entregas locales acordadas por WhatsApp en el centro o puntos de referencia conocidos.',
    time: 'Toda la semana',
    badge: 'LOCAL',
  },
  {
    title: 'Pedidos por WhatsApp',
    icon: 'MessageCircle',
    desc: 'Mándame un mensajito al +52 5547285702 diciendo cuántas bolsas quieres y te las llevo frescas.',
    time: 'Respuesta rápida',
    badge: '+52 5547285702',
  },
];

export const TECHNICAL_FAQS = [
  {
    id: 1,
    question: '¿Qué producto manejas exactamente?',
    answer: 'Manejo exclusivamente Aros de Manzana verde enchilados con chamoy artesanal y chilito en polvo. Al enfocarme en un solo producto, me aseguro de que siempre quede fresco, suave y con el toque exacto de acidez y picor.'
  },
  {
    id: 2,
    question: '¿En qué presentación viene y cuánto cuesta?',
    answer: 'Viene en bolsa sellada herméticamente al calor de 10.5 x 15 cm con 100 gramos netos de aros de manzana a solo $15 MXN. Tamaño práctico y resistente para traer en la mochila sin derrames ni pegostes.'
  },
  {
    id: 3,
    question: '¿Dónde y cómo haces las entregas?',
    answer: 'Opero en Villa de Tezontepec, Hidalgo, y realizo entregas en mano en la Universidad (entre clases, descansos o cafetería). Me mandas un WhatsApp al +52 5547285702 y coordinamos el punto exacto.'
  },
  {
    id: 4,
    question: '¿Puedo comprar por mayoreo o para revender en mi salón?',
    answer: '¡Sí, claro! Varios compas de la uni compran paquetes de 10 bolsas ($13 c/u), 25 bolsas ($11 c/u) o 50 bolsas ($10 c/u) para sacar su dinerito de pasajes vendiéndolas a $15 en sus salones.'
  },
  {
    id: 5,
    question: '¿Cómo se paga?',
    answer: 'Acepto pago en efectivo exacto o con cambio al momento de la entrega, o transferencia electrónica rápida (SPEI) si no traes monedas.'
  }
];
