import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero-paper relative isolate overflow-hidden px-0 py-0">
      <div className="section-reveal relative h-[72vh] min-h-[560px] w-full overflow-hidden lg:h-[78vh]">
        <figure className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
            alt="Ambiente cálido con mobiliario antiguo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </figure>

        <div className="absolute inset-0 gradient-hero opacity-85" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-[560px] space-y-5 text-[#232323] lg:ml-[7%] lg:translate-y-[-4%]">
              <p
                className="animate-fade-in-up text-[0.7rem] tracking-[0.32em] text-[#8f646d] uppercase"
                style={{ animationDelay: "0s" }}
              >
                Tienda de Antigüedades · Uruguay
              </p>
              <h1
                className="animate-fade-in-up font-serif text-[3.75rem] leading-[0.92] text-[#232323] sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]"
                style={{ animationDelay: "0.15s" }}
              >
                Ofelia
                <br />
                Antigüedades
              </h1>
              <h2
                className="animate-fade-in-up max-w-[420px] text-sm leading-7 text-[#5f5554] sm:text-base"
                style={{ animationDelay: "0.3s" }}
              >
                Mobiliario y Objetos con Historia en Uruguay.
              </h2>
              <div className="pt-2">
                <a
                  href="#coleccion"
                  className="animate-fade-in-up inline-flex items-center justify-center rounded-full bg-[#b87682] px-7 py-3 text-[0.72rem] font-semibold tracking-[0.22em] text-[#f8e6c8] transition hover:bg-[#a66773]"
                  style={{ animationDelay: "0.45s" }}
                >
                  Explorar Colección
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-7 rounded-full border border-[#f8e6c8]/70 bg-[#232323]/40 px-4 py-2 text-[0.68rem] tracking-[0.26em] text-[#f8e6c8] uppercase backdrop-blur-sm">
          Selección exclusiva
        </div>

        {/* Gradiente inferior estético */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8e6c8] via-[#f8e6c8]/60 to-transparent" />
      </div>
    </section>
  );
}
