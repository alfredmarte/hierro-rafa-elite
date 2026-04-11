export function Products() {
  return (
    <section className="w-full bg-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <p className="font-heading text-[#E05A20] font-black tracking-[0.2em] uppercase text-[10px] mb-6">
          Productos
        </p>
        
        <h2 className="font-heading text-4xl md:text-[3.5rem] font-bold tracking-tighter leading-[1.05] text-[#111] max-w-4xl">
          Acero estructural para la <span className="text-[#E05A20]">industria</span> y la construcción civil.
        </h2>
      </div>

      {/* Floating WhatsApp Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.996 1.995c-5.522 0-9.996 4.475-9.996 9.997 0 1.954.557 3.774 1.536 5.312l-1.503 5.485 5.617-1.472c1.474.887 3.2 1.396 5.034 1.396 5.524 0 10-4.474 10-10C22.684 6.47 18.205 1.995 11.996 1.995zm5.71 14.3c-.237.666-1.398 1.258-1.93 1.304-.533.045-1.258.15-4.045-1.004-3.32-1.378-5.46-4.735-5.626-4.957-.167-.222-1.34-1.785-1.34-3.41s.84-2.42 1.144-2.738c.307-.318.665-.398.887-.398.223 0 .445.006.638.016.2.012.468-.076.73.555.266.635.918 2.235.996 2.392.078.158.128.344.027.545-.102.202-.152.32-.303.498-.152.176-.32.378-.456.52-.146.155-.306.326-.134.623.172.298.766 1.267 1.642 2.047 1.135 1.003 2.08 1.313 2.38 1.46.3.148.475.127.653-.075.176-.202.76-8.86h.916c.304-.32.61-.132.842-.05.234.085 1.487.702 1.743.83.256.128.428.192.49.298.062.106.062.62-.175 1.286z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
