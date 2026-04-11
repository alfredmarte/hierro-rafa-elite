import { ArrowRight } from 'lucide-react';

export function BlockHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
      
      {/* Fondo Fotográfico Oscurecido */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div className="absolute inset-0 bg-[#111] opacity-75 z-0 mix-blend-multiply" />
      
      {/* Light Noise for richness */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/images/texture.png')" }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto pt-32 pb-24">
        
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* H1 Primary */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-1">
            El hogar de los artesanos del hierro.
          </h1>
          
          {/* Massive Orange Subheading */}
          <h2 className="font-heading text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-[#E05A20] mb-10">
            Desde 1984.
          </h2>
          
          {/* Monospace Paragraph */}
          <p className="text-sm md:text-base text-grayMid max-w-xl font-data leading-relaxed mb-12">
            El Hub Logístico de acero estructural más completo del Cibao, garantizando que tu obra nunca se detenga. Despachos directos desde Santiago, Puerto Plata y San Francisco de Macorís.
          </p>

          {/* CTA Pill */}
          <button className="rounded-full bg-[#E05A20] hover:bg-[#c44916] transition-colors py-4 px-8 text-white flex items-center justify-center gap-3 w-fit group">
            <span className="font-heading font-bold text-lg tracking-wide">Cotizar Materiales</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
