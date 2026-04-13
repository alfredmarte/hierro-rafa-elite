import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Hammer, Target, Activity, MapPin, Search, Phone, Zap, Hexagon, MessageCircle, Wrench, Layers, Box, Mail, Shield, CircleDot, Drill, Warehouse, Flame, Grid3x3, Lock, Columns3, X, RectangleHorizontal } from 'lucide-react';
import Lenis from 'lenis';
import MagneticButton from './components/MagneticButton';

const InstagramIcon = ({ size = 24, className, strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FlatSheetIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="3" width="14" height="18" rx="1" />
  </svg>
);
import brandData from './data/brand.json';

const EMAIL_SUBJECT = encodeURIComponent("Solicitud de Cotización Corporativa - [Nombre de tu Empresa/Proyecto]");
const EMAIL_BODY = encodeURIComponent(`Hola equipo de ventas de Hierro Rafa,

Por favor cotizarme los siguientes materiales:
(Puede borrar este ejemplo y escribir su lista aquí, o simplemente adjuntar su archivo):

Ejemplo:
1) 10 Perfiles galvanizados 2x1 grueso.
2) 20 Planchas aluzinc 20 pies
3) 2 Disco corte 4 1/2" Rhodius
4) 
5) 

Lista los materiales uno por línea:

1) 
2) 
3) 
4) 
5) 
6) 
7) 
8) 
9) 
10) 

📍 Sucursal de entrega preferida: [ Escriba: Santiago, Puerto Plata o San Francisco ]
👤 Mi nombre / Nombre de la empresa: 
📞 Mi teléfono de contacto: `);

const MAILTO_LINK = `mailto:ventas@centrohierrorafa.com?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`;

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────
// Typography & Colors Match
// ─────────────────────────────────────────────────────────────────────
// Brand Orange: #E05A20
// Brand Teal: #2AABB5
// Dark: #111111

// Logo Component
const Logo = ({ inverted = false, className = '' }) => (
  <div className={`flex items-center gap-2 ${className} relative overflow-hidden group`}>
    <img src="/images/hierro_rafa_logo_insignia.png" alt="Hierro Rafa Logo" className={`w-8 h-8 md:w-12 md:h-12 object-contain shrink-0 ${inverted ? 'invert hue-rotate-180 brightness-110 contrast-[1.2] mix-blend-screen' : 'contrast-125 mix-blend-multiply'}`} />
    <img src="/images/hierro_rafa_logo_text.png" alt="Hierro Rafa Logo" className={`h-4 md:h-6 object-contain shrink-0 ${inverted ? 'invert hue-rotate-180 brightness-110 contrast-[1.2] mix-blend-screen' : 'contrast-125 mix-blend-multiply'}`} />
  </div>
);

// ─────────────────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────────────────
// Branch Router Modal
// ─────────────────────────────────────────────────────────────────────
const BranchRouterModal = ({ isOpen, onClose, onBranchSelect }) => {
  if (!isOpen) return null;
  // Eliminado arreglo local. Los datos ahora provienen del JSON maestro (brandData.locations)
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl relative overflow-hidden animate-in slide-in-from-bottom-4 duration-300" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors focus:outline-none z-20"><X size={24} /></button>
        
        {/* Título Original Restaurado */}
        {/* Título Optimizado (Elite Copy) */}
        <div className="p-10 pb-6 text-center bg-white relative z-10">
          <h3 className="font-heading font-black text-3xl mb-3 leading-tight text-dark">¿Hacia dónde va<br/> <span className="text-orange">tu pedido?</span></h3>
          <p className="font-data text-xs text-grayDark leading-relaxed mx-auto max-w-sm">Selecciona el centro logístico más cercano a tu obra para garantizar el menor tiempo de traslado.</p>
        </div>

        <div className="bg-white px-6 lg:px-10 pb-8 flex flex-col gap-3">
          
          {/* BLOQUE CORPORATIVO VIP (Dark Mode Anchor) */}
          <a href={MAILTO_LINK} className="w-full text-left flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all group outline-none focus-visible:ring-2 focus-visible:ring-orange bg-dark border border-black/10 hover:shadow-2xl hover:-translate-y-0.5 duration-300 relative overflow-hidden">
             
             {/* Textura súper sutil iluminada */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: "url('/images/texture.webp')"}} />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg flex-shrink-0 bg-orange text-white group-hover:scale-110 duration-300">
                <Mail size={20} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-heading font-bold text-base sm:text-lg text-white leading-tight transition-colors mb-1">
                  Compras corporativas o para proyectos
                </div>
                <div className="font-data text-[10.5px] sm:text-[11.5px] text-white/60">
                  Envíanos tu lista de compras o cálculos estructurales.
                </div>
              </div>
            </div>
            
            <div className="text-orange group-hover:translate-x-1 transition-all relative z-10">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Separador Elegante (Legible) */}
          <div className="flex items-center gap-4 py-3 mt-3 px-2">
             <div className="h-[1px] bg-orange/20 flex-1"></div>
             <span className="font-data text-[10px] text-grayDark uppercase tracking-widest font-bold">O inicia tu cotización vía WhatsApp</span>
             <div className="h-[1px] bg-orange/20 flex-1"></div>
          </div>
          {brandData.locations.map(b => (
            <button 
              key={b.name} 
              onClick={() => onBranchSelect(b)} 
              className="w-full text-left flex items-center justify-between p-4 rounded-xl transition-all group outline-none focus-visible:ring-2 focus-visible:ring-orange bg-white border-2 border-transparent hover:bg-white hover:border-orange/30 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-inner bg-black/5 text-black/40 group-hover:bg-orange/10 group-hover:text-orange">
                  <MapPin size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-heading font-bold text-lg text-dark leading-none group-hover:text-orange transition-colors">{b.name}</div>
                    {b.isHQ && <span className="px-2 py-0.5 rounded-[4px] bg-orange/10 text-orange border border-orange/20 text-[9px] font-bold tracking-widest uppercase">Matriz</span>}
                  </div>
                  {/* Copywriter: Logística Explícita */}
                  <div className="font-data text-[11px] text-grayDark mt-0.5">
                    <span className="font-bold text-dark">Despachos:</span> {b.coverage}
                  </div>
                </div>
              </div>
              
              {/* Micro-interacción: Manejo de Expectativas (WhatsApp) */}
              <div className="flex items-center gap-1.5 transition-all group-hover:translate-x-1 text-[#25D366]">
                <span className="font-data text-[10px] font-bold uppercase tracking-widest opacity-0 lg:opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">WhatsApp</span>
                <MessageCircle size={20} strokeWidth={2.5} className="opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────────────────
const Navbar = ({ onOpenRouter, onChangeBranch, selectedBranch }) => {
  const [showGridCTA, setShowGridCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400px es el umbral seguro cuando el botón del Hero sale de la vista superior
      setShowGridCTA(window.scrollY > 400);
    };
    // Revisar el estado inicial y añadir listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-3 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-between w-[95%] md:w-[92%] max-w-5xl bg-white shadow-sm border border-black/5 transition-all duration-500">
      {/* 1. Izquierda (Pilar Flex): Logo */}
      <div className="flex-1 flex justify-start relative z-10 min-w-[120px]">
        <Logo />
      </div>

      {/* 2. Centro: Enlaces protegidos de colisión */}
      <div className="hidden lg:flex shrink-0 gap-6 font-data text-[11px] uppercase tracking-widest text-grayDark font-bold px-4">
        <a href="#productos" className="hover:text-orange transition-colors">Productos</a>
        <a href="#nosotros" className="hover:text-orange transition-colors">Nosotros</a>
        <a href="#ubicaciones" className="hover:text-orange transition-colors">Ubicaciones</a>
      </div>

      {/* 3. Derecha (Pilar Flex): Controles */}
      <div className="flex-1 flex items-center justify-end gap-2 md:gap-4 relative z-10">
        <button 
          onClick={onChangeBranch}
          className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[11px] font-data font-bold uppercase tracking-widest text-dark hover:text-orange transition-colors px-2"
        >
          <MapPin size={16} className="text-orange" />
          <div className="flex flex-col items-start leading-tight text-left mt-[1px]">
             <span className="text-[8.5px] md:text-[9.5px] text-black/70 font-black leading-none mb-[2px]">{selectedBranch ? 'Sucursal' : 'Zona de envío'}</span>
             <span className="font-black">{selectedBranch ? selectedBranch.name : 'Elegir'}</span>
          </div>
        </button>

        <button
          onClick={onOpenRouter}
          className={`shrink-0 bg-orange text-white py-2 md:py-2.5 rounded-full font-heading font-bold tracking-tight text-[11px] md:text-sm flex items-center gap-1.5 md:gap-2 outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all duration-300 origin-right hover:scale-105 hover:shadow-md ${showGridCTA ? 'opacity-100 scale-100 pointer-events-auto px-4 md:px-6 w-auto' : 'opacity-0 scale-95 pointer-events-none w-0 px-0 md:w-auto md:px-6 border-0 overflow-hidden md:overflow-visible'}`}
        >
          <span className="relative z-10 hidden sm:inline-block">Cotizar Materiales</span>
          <span className="relative z-10 sm:hidden">Cotizar</span>
          <ArrowRight size={14} className="relative z-10 md:w-4 md:h-4" />
        </button>
      </div>
    </nav>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────────
const Hero = ({ onOpenRouter }) => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-center md:justify-end pb-0 pt-16 md:pt-0 md:pb-[15vh] px-6 md:px-16 overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.webp"
          alt="Perfiles de acero"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="flex flex-col mb-6">
            <span className="font-heading font-medium tracking-tight text-white/90 text-3xl md:text-5xl mb-2">
              El hogar de los artesanos del hierro.
            </span>
            <span className="font-heading font-black tracking-tighter text-orange text-7xl md:text-[9rem] leading-[0.85]">
              Desde 1984.
            </span>
          </h1>
          <p className="font-data text-white/60 text-sm md:text-base max-w-md md:max-w-xl leading-relaxed tracking-wide mb-8 md:mb-10 text-pretty">
            El Hub Logístico de acero estructural más completo del Cibao. Garantizamos el volumen e inventario necesario para que tu obra nunca se detenga.
          </p>
          <button
            onClick={onOpenRouter}
            className="bg-orange text-white px-8 py-3.5 md:py-4 md:px-10 rounded-full font-heading font-black tracking-tight text-base md:text-lg flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(224,90,32,0.6)]"
          >
            <span className="relative z-10">Cotizar Materiales</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Products Section
// ─────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { name: 'Vigas', desc: 'Vigas H, vigas I, canales C', Icon: Columns3 },
  { name: 'Techado', desc: 'Aluzinc, tejas, policarbonato, drenajes', Icon: Warehouse },
  { name: 'Soldadura', desc: 'Máquinas de soldar, electrodos, alambre MIG', Icon: Flame },
  { name: 'Láminas planas', desc: 'Tolas negras, galvanizadas, corrugadas', Icon: FlatSheetIcon },
  { name: 'Perfiles estructurales', desc: 'Negros, galvanizados, angulares, planchuelas', Icon: RectangleHorizontal },
  { name: 'Herrajes y accesorios', desc: 'Cerraduras, bisagras, rodamientos', Icon: Lock },
  { name: 'Mallas de seguridad y decorativas', desc: 'Ciclónica, rejacero, dientes de tiburón', Icon: Grid3x3 },
  { name: 'Insumos industriales', desc: 'Herramientas, discos, esmaltes, selladores', Icon: Drill },
];

// ─────────────────────────────────────────────────────────────────────
// Products & SV Spotlights
// ─────────────────────────────────────────────────────────────────────
const SpotlightCard = ({ prod }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="product-card group relative bg-white flex flex-col gap-4 min-h-[180px] rounded-[1.25rem] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 transition-all hover:border-orange/20 hover:-translate-y-1 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(224,90,32,0.06), transparent 40%)`,
        }}
      />
      <prod.Icon className="w-6 h-6 text-orange relative z-10" />
      <div className="mt-auto relative z-10">
        <h3 className="font-heading font-bold text-dark text-lg leading-tight mb-2 group-hover:text-orange transition-colors">
          {prod.name}
        </h3>
        <p className="font-data text-grayDark text-[11px] leading-relaxed">
          {prod.desc}
        </p>
      </div>
    </div>
  );
};

const Products = ({ onOpenRouter }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="productos" ref={sectionRef} className="pt-16 pb-12 md:pb-16 px-6 md:px-16 bg-transparent flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header con Tipografía Fluida (SV Elite Feature 4) */}
        <div className="mb-12">
          <p className="font-data text-[10px] tracking-[0.25em] text-orange font-bold uppercase mb-4 text-balance">
            Productos
          </p>
          <h2 className="font-heading font-black tracking-tight leading-[1.1] max-w-[20ch] text-dark text-[clamp(2.5rem,5vw,3rem)]">
            Acero estructural para la <span className="text-orange">industria</span> y la construcción civil.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {PRODUCTS.map((prod) => (
            <SpotlightCard key={prod.name} prod={prod} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-dark rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-heading font-bold text-white text-[clamp(1.25rem,3vw,1.5rem)] mb-2">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="font-data text-white/50 text-xs md:text-sm max-w-md">
              Nuestro equipo está disponible para revisar el catálogo contigo y cotizar exactamente lo que tu obra necesita.
            </p>
          </div>
          <MagneticButton
            onClick={onOpenRouter}
            className="group flex-shrink-0 bg-orange hover:bg-[#25D366] transition-colors duration-500 text-white px-8 py-4 rounded-full font-heading font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#25D366]/20"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-300" /> Asesoría en WA
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Philosophy Banner
// ─────────────────────────────────────────────────────────────────────
const Philosophy = () => {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-16 flex justify-center items-center overflow-hidden" style={{ backgroundColor: '#18181A' }}>
      <div className="absolute inset-0 opacity-5">
        <img src="/images/texture.webp" alt="Textura" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center">
        {/* Kicker Editorial */}
        <p className="font-data text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-orange mb-10 text-balance">
          EST. 1984 — SANTIAGO, REPÚBLICA DOMINICANA
        </p>
        
        {/* Manifiesto Título */}
        <h2 className="font-heading font-black tracking-tight text-white text-5xl md:text-7xl lg:text-[5rem] leading-[1.05]">
          Vender acero es fácil.<br />
          Forjar confianza toma <span className="text-orange drop-shadow-md">40 años.</span>
        </h2>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Nuestra Esencia (Stacking Cards)
// ─────────────────────────────────────────────────────────────────────
const Esencia = () => {
  const essenceRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.essence-card');
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${120 + (i * 30)}`, 
          endTrigger: essenceRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false, // Ensures next sections roll over smoothly without padding explosion
          scrub: true
        });
      });
    }, essenceRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="nosotros" className="pt-16 md:pt-20 pb-12 px-6 md:px-16 bg-transparent flex justify-center overflow-visible">
      <div className="max-w-4xl w-full" ref={essenceRef}>
        <div className="mb-16 relative z-0">
          <h2 className="font-heading font-black tracking-tight text-4xl md:text-5xl text-dark">
            Nuestra <span className="text-orange">esencia.</span>
          </h2>
        </div>

        {/* 
          Restaurado el GSAP Timeline original (Stacking Cards Nivel Élite).
          El padding inferior se reduce brutalmente (Ritmo SV Elite) para evitar el Falso Fondo.
        */}
        <div className="flex flex-col gap-10 md:gap-14 relative pb-6 md:pb-12">
          
          <div className="essence-card bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_5px_30px_rgba(0,0,0,0.06)] border border-black/5 flex items-center justify-between z-10 relative">
            <div className="max-w-sm">
              <div className="font-data text-[10px] tracking-widest text-orange font-bold uppercase mb-3 text-balance">Orígenes</div>
              <h3 className="font-heading font-bold text-3xl text-dark mb-3 text-balance">Forjados en el Cibao</h3>
              <p className="font-data text-xs md:text-sm text-grayDark leading-relaxed">
                Fundada por Rafael "Rafa" Hernández con un propósito inquebrantable: ser el bastión logístico que no le falla al herrero ni al ingeniero.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end justify-center relative opacity-20">
              <Hammer size={100} className="text-dark" strokeWidth={1} />
            </div>
          </div>

          <div className="essence-card bg-[#18181A] rounded-[3rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex items-center justify-between z-20 relative">
            <div className="max-w-sm">
              <div className="font-data text-[10px] tracking-widest text-white/30 uppercase mb-3">Escala</div>
              <h3 className="font-heading font-bold text-3xl text-white mb-3">Inventario de Alto Tonelaje</h3>
              <p className="font-data text-xs text-white/60 leading-relaxed">
                Mantenemos la mayor reserva operativa de acero del Cibao. Nuestro músculo logístico despacha volúmenes industriales de forma directa, garantizando que tu proyecto jamás se detenga por falta de material.
              </p>
            </div>
            <div className="hidden md:flex opacity-90"><Target size={100} className="text-[#2AABB5]" strokeWidth={1} /></div>
          </div>

          <div className="essence-card bg-orange rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(224,90,32,0.3)] flex items-center justify-between z-30 relative">
            <div className="max-w-sm">
              <div className="font-data text-[10px] tracking-widest text-white/40 uppercase mb-3">Logística</div>
              <h3 className="font-heading font-bold text-3xl text-white mb-3">Entrega Directa</h3>
              <p className="font-data text-xs md:text-sm text-white/80 leading-relaxed">
                Una red de transporte en constante movimiento, capaz de movilizar altos volúmenes hacia cualquier rincón del Cibao de manera ininterrumpida.
              </p>
            </div>
            <div className="hidden md:flex"><Activity size={100} className="text-white" strokeWidth={1} /></div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Locations
// ─────────────────────────────────────────────────────────────────────
// Eliminado arreglo local. Los datos ahora provienen del JSON maestro (brandData.locations)

const Locations = ({ onBranchSelect, selectedBranch }) => {
  return (
    <section id="ubicaciones" className="pt-8 md:pt-12 pb-20 md:pb-24 px-6 md:px-16 bg-transparent flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Aumentamos el margen inferior en desktop para que la tarjeta no pise el texto */}
        <div className="mb-16 md:mb-14 max-w-sm relative z-20">
          <h2 className="font-heading font-black tracking-tight text-4xl md:text-5xl text-dark mb-4 drop-shadow-sm">
            Cobertura total,<br />
            <span className="text-orange">en todo el Cibao.</span>
          </h2>
          <p className="font-data text-sm md:text-base text-grayDark leading-relaxed max-w-md">
            Tres centros logísticos interconectados para responder con inmediatez y despachar el volumen exacto que exigen tus obras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start mt-6 md:mt-2">
          {brandData.locations.map((branch, i) => {
            const isOrange = branch.theme === 'orange';
            const orderClass = isOrange ? 'order-1 md:order-2' : (i === 1 ? 'order-2 md:order-1' : 'order-3');
            return (
              <div
                key={i}
                className={`rounded-3xl p-8 flex flex-col transition-transform hover:-translate-y-2 relative ${orderClass}
                  ${isOrange 
                    ? 'bg-orange text-white shadow-[0_20px_50px_rgba(224,90,32,0.4)] min-h-[380px] z-20 md:-mt-10' 
                    : 'bg-white text-dark border border-black/10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] min-h-[340px] z-10 md:mt-10'}`}
              >
                {branch.subtitle && (
                  <div className={`font-data text-[10px] tracking-widest font-bold mb-4 ${isOrange ? 'text-white/60' : 'text-black/40'}`}>
                    {branch.subtitle}
                  </div>
                )}
                
                <h3 className={`font-heading font-black text-2xl whitespace-pre-line mb-8 ${isOrange ? 'text-white' : 'text-dark'}`}>
                  {branch.name}
                </h3>
                
                <div className={`flex items-start gap-3 text-xs font-data mb-4 ${isOrange ? 'text-white/80' : 'text-grayDark'}`}>
                  <MapPin size={14} className={isOrange ? 'text-white/50 mt-[2px]' : 'text-orange mt-[2px]'} />
                  <span className="whitespace-pre-line leading-relaxed">{branch.address}</span>
                </div>
                
                <div className={`flex items-center gap-3 text-xs font-data mb-10 ${isOrange ? 'text-white/80' : 'text-grayDark'}`}>
                  <Phone size={14} className={isOrange ? 'text-white/50' : 'text-orange'} />
                  {branch.phone}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => onBranchSelect(branch)}
                    className={`group relative overflow-hidden w-full px-6 py-4 rounded-2xl font-heading font-bold text-sm flex items-center justify-between transition-all outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 duration-300 hover:-translate-y-1 hover:shadow-xl
                      ${isOrange 
                        ? 'bg-white text-orange hover:bg-white/95' 
                        : 'bg-dark text-white hover:bg-black'}`}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#25D366]">Pedir Cotización</span>
                    
                    <div className="relative z-10 flex items-center justify-end h-5">
                      {/* Default Arrow */}
                      <ArrowRight size={16} className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4 absolute right-0" />
                      
                      {/* WhatsApp Hover Mode */}
                      <div className="flex items-center gap-1.5 transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-[#25D366]">
                        <span className="font-data text-[10px] font-bold uppercase tracking-widest mt-[1px] hidden sm:block drop-shadow-sm">WhatsApp</span>
                        <MessageCircle size={18} strokeWidth={2.5} className="drop-shadow-sm" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-28 px-6 md:px-16 w-full flex flex-col items-center rounded-t-[4rem] relative overflow-hidden">
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-b border-white/10 pb-12">
          <div className="md:pr-4">
            <Logo inverted />
            <p className="font-data text-[11px] text-white/60 mt-5 leading-relaxed">
              Hogar de artesanos del hierro. Distribuidores de acero estructural en el Cibao desde 1984.
            </p>
          </div>
          
          <div>
            <h4 className="font-data text-[10px] tracking-widest uppercase text-white/50 mb-5">Navegación</h4>
            <ul className="space-y-4 font-data text-xs text-white/70">
              <li><a href="#productos" className="flex items-center gap-2 hover:text-orange transition-colors group"><ArrowRight size={12} className="text-white/20 group-hover:text-orange group-hover:translate-x-1 transition-all" /> PRODUCTOS</a></li>
              <li><a href="#nosotros" className="flex items-center gap-2 hover:text-orange transition-colors group"><ArrowRight size={12} className="text-white/20 group-hover:text-orange group-hover:translate-x-1 transition-all" /> NUESTRA ESENCIA</a></li>
              <li><a href="#ubicaciones" className="flex items-center gap-2 hover:text-orange transition-colors group"><ArrowRight size={12} className="text-white/20 group-hover:text-orange group-hover:translate-x-1 transition-all" /> UBICACIONES</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-data text-[10px] tracking-widest uppercase text-white/50 mb-5">Ventas Corporativas</h4>
            <p className="font-data text-[11px] text-white/60 leading-relaxed mb-6">
              Suministro ininterrumpido y cotizaciones directas para proyectos de alto tonelaje.
            </p>
            <ul className="space-y-4 font-data text-xs text-white/70">
              <li>
                <a href={MAILTO_LINK} className="inline-flex gap-3 items-center text-orange bg-orange/5 font-bold hover:text-white transition-all group outline-none border border-orange/30 hover:bg-orange px-3.5 py-2 rounded-lg shadow-sm">
                  <Mail size={16} className="text-orange group-hover:text-white transition-colors" /> Solicitar presupuesto
                </a>
              </li>
              <li className="pt-2">
                <a href={brandData.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:text-white transition-colors group outline-none">
                  <InstagramIcon size={14} className="text-white/40 group-hover:text-orange transition-colors" /> {brandData.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-6">
          <p className="font-data text-[10px] text-white/40 mb-1">
            © {new Date().getFullYear()} Hierro Rafa. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity select-none md:pr-12">
            <span className="font-heading font-black text-3xl text-white leading-none tracking-tighter">40</span>
            <div className="flex flex-col items-start border-l border-white/20 pl-2.5">
              <span className="font-data text-[9px] tracking-[0.3em] text-white font-bold uppercase mb-0.5" style={{ lineHeight: '1' }}>Aniversario</span>
              <span className="font-data text-[8px] tracking-widest text-orange uppercase leading-none">1984 — 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────
// Animated Grain (Cine-Dynamic Noise - SV Elite Feature 5)
// ─────────────────────────────────────────────────────────────────────
const GlobalTexture = () => (
  <>
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes noise-animation {
        0% { transform: translate(0, 0); }
        10% { transform: translate(-5%, -5%); }
        20% { transform: translate(-10%, 5%); }
        30% { transform: translate(5%, -10%); }
        40% { transform: translate(-5%, 15%); }
        50% { transform: translate(-10%, 5%); }
        60% { transform: translate(15%, 0); }
        70% { transform: translate(0, 10%); }
        80% { transform: translate(-15%, 0); }
        90% { transform: translate(10%, 5%); }
        100% { transform: translate(5%, 0); }
      }
      .anim-noise {
        animation: noise-animation 0.5s steps(3) infinite;
        background-size: 200px;
        width: 200vw;
        height: 200vh;
        left: -50vw;
        top: -50vh;
      }
    `}} />
    <div className="fixed pointer-events-none z-[999] opacity-[0.03] mix-blend-multiply anim-noise" style={{backgroundImage: "url('/images/texture.webp')"}} />
  </>
);

export default function App() {
  const [isRouterOpen, setRouterOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  // SV Elite Feature 1: Smooth Scrolling nativo con Lenis + Sincronización precisa con GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem('hierro_rafa_branch');
    if (saved) {
      try {
        setSelectedBranch(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const WA_MSG = encodeURIComponent("Hola, estoy visitando su página web y me gustaría solicitar una cotización de materiales.");

  const handleBranchSelect = (branch) => {
    if (!branch) {
      setSelectedBranch(null);
      sessionStorage.removeItem('hierro_rafa_branch');
      return;
    }

    setSelectedBranch(branch);
    sessionStorage.setItem('hierro_rafa_branch', JSON.stringify(branch));
    setRouterOpen(false);
    window.open(`https://wa.me/${branch.whatsapp}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer');
  };

  const handleSmartRouting = () => {
    if (selectedBranch) {
      window.open(`https://wa.me/${selectedBranch.whatsapp}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer');
    } else {
      setRouterOpen(true);
    }
  };

  return (
    <div className="relative bg-[#F8F7F5] text-dark overflow-hidden selection:bg-orange selection:text-white">
      <GlobalTexture />
      <Navbar onOpenRouter={handleSmartRouting} onChangeBranch={() => setRouterOpen(true)} selectedBranch={selectedBranch} />
      <Hero onOpenRouter={handleSmartRouting} />
      
      {/* 
        El "Micro-Tension Contrast": 
        Fondo general Ostra/Hueso para que las tarjetas de componentes floten sobre él impecablemente.
      */}
      <div className="relative w-full bg-[#f8f7f5] rounded-t-[3rem] md:rounded-t-[4rem] z-20 pt-8 mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-black/5">
        <Products onOpenRouter={handleSmartRouting} />
      </div>

      <Philosophy />
      
      {/* 
        Curva inferior de regreso a Blanco Hueso.
      */}
      <div className="relative w-full bg-[#f8f7f5] rounded-[3rem] md:rounded-[4rem] z-20 pb-4 shadow-[0_-5px_30px_rgba(0,0,0,0.02)]">
        <Esencia />
        <Locations onBranchSelect={handleBranchSelect} selectedBranch={selectedBranch} />
      </div>
      
      <Footer />
      
      {/* Floating WhatsApp */}
      <button
        onClick={handleSmartRouting}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform bg-[#25D366] outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>

      <BranchRouterModal isOpen={isRouterOpen} onClose={() => setRouterOpen(false)} onBranchSelect={handleBranchSelect} />
    </div>
  );
}
