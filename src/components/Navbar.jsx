import { MapPin } from 'lucide-react';

export function Navbar() {
  return (
    <div className="absolute top-6 left-0 w-full px-6 z-50">
      <nav className="max-w-7xl mx-auto bg-ostra rounded-full px-8 py-4 flex flex-row items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Logo (asumimos que existe el SVG o PNG) */}
          <img src="/images/hierro_rafa_logo_text.png" alt="Hierro Rafa" className="h-6 object-contain" />
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <MapPin className="w-5 h-5 text-[#E05A20]" strokeWidth={2} />
          <div className="flex flex-col items-start leading-[1.1]">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#E05A20] uppercase font-data">Zona de envío</span>
            <span className="text-xs font-bold tracking-[0.1em] text-dark uppercase font-data">Elegir</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
