import { MapPin, Phone, Building2, HardHat } from 'lucide-react';
import { SITE_DATA } from '../data/config';

export function BranchRouter() {
  const { headquarters, branches } = SITE_DATA;

  return (
    <section className="bg-ostra pb-24 relative z-30">
      {/* 
        LEY 1: EL EFECTO CASCADA (Z-INDEX OVERLAP) 
        Se usa -mt-24 para "encallar" este componente sobre el final oscuro del Hero.
      */}
      <div className="max-w-7xl mx-auto px-6 -mt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          
          {/* HEMISFERIO VIP: CORPORATIVO (Dark Mode B2B) */}
          <div className="bg-dark p-12 lg:p-16 relative group flex flex-col justify-between min-h-[450px] overflow-hidden">
             {/* Textura brutalista incrustrada sobre el container negro */}
             <div 
               className="absolute inset-0 opacity-[0.02] mix-blend-overlay z-0 pointer-events-none"
               style={{ backgroundImage: "url('/images/texture.png')" }}
             />
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity z-0">
                <Building2 className="w-32 h-32 text-orange" />
             </div>
             
             <div className="relative z-10">
                <p className="font-data text-orange uppercase tracking-[0.2em] font-bold text-xs mb-6">ALTO TONELAJE</p>
                <h3 className="text-ostra text-4xl lg:text-5xl font-heading font-bold tracking-tighter mb-4 leading-none">{headquarters.name}</h3>
                <p className="text-grayMid text-lg font-light max-w-sm mb-8">{headquarters.specialty}</p>
                
                <div className="flex items-center gap-3 text-grayMid font-data text-xs uppercase tracking-widest mb-2 border-l border-orange/50 pl-4">
                  <MapPin className="w-4 h-4 text-orange" />
                  {headquarters.location} - {headquarters.address}
                </div>
             </div>

             <a 
               href={`https://wa.me/${headquarters.whatsapp}`}
               target="_blank" rel="noreferrer"
               className="relative z-10 mt-12 w-full py-5 border border-orange/30 bg-orange/5 hover:bg-orange hover:border-orange text-orange hover:text-dark transition-all duration-300 ease-out flex justify-between px-6 items-center flex-row group/btn"
             >
               <span className="font-data font-bold tracking-widest uppercase text-sm">CONTACTAR MATRIZ</span>
               <Phone className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
             </a>
          </div>

          {/* HEMISFERIO REGIONAL: SUCURSALES (Light Mode Staggered) */}
          <div className="flex flex-col">
            {branches.map((branch, index) => (
              <div 
                key={branch.id} 
                // LEY 1: STAGGERED LAYOUT. Alternate background to break homogeneity.
                className={`flex-1 p-10 lg:p-14 flex flex-col justify-between group transition-colors ${index === 0 ? 'bg-white border-b border-grayMid/20' : 'bg-[#f0efed]'}`}
              >
                 <div>
                    <h3 className="text-dark text-3xl font-heading font-bold uppercase tracking-tight mb-3">{branch.name}</h3>
                    <p className="text-grayDark font-data text-xs tracking-widest border border-grayDark/20 inline-block px-3 py-1 uppercase">{branch.tagline}</p>
                 </div>
                 
                 <a 
                   href={`https://wa.me/${branch.whatsapp}`}
                   target="_blank" rel="noreferrer"
                   className="mt-8 flex justify-between items-center w-full group/link"
                 >
                    <span className="font-data text-dark font-bold uppercase tracking-widest text-sm border-b-2 border-transparent group-hover/link:border-dark pb-1 transition-all">Despacho Local</span>
                    <div className="w-12 h-12 rounded-none border border-grayDark/20 bg-transparent flex items-center justify-center group-hover/link:bg-dark group-hover/link:border-dark group-hover/link:text-ostra transition-all duration-300 ease-out text-grayDark">
                       <HardHat className="w-5 h-5" />
                    </div>
                 </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
