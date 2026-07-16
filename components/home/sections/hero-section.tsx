import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero-paper relative isolate overflow-hidden px-0 py-0">
      <div className="section-reveal relative h-[72vh] min-h-[560px] w-full overflow-hidden lg:h-[78vh]">
        <figure className="absolute inset-0">
          <Image
            src="/hero-background.webp"
            alt="Ambiente cálido con mobiliario antiguo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </figure>

        <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-black/65 via-black/45 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-[620px] px-6 py-8 text-[#f8e6c8] sm:px-8 lg:translate-y-[-4%] lg:py-10">
              <p
                className="animate-fade-in-up text-[0.7rem] tracking-[0.32em] text-[#e0bac1] uppercase"
                style={{ animationDelay: "0s" }}
              >
                Tienda de Antigüedades · Uruguay
              </p>
              <h1
                className="animate-fade-in-up mt-3 font-serif text-[3.2rem] leading-[0.92] text-[#fff5e8] sm:text-7xl lg:text-[5.2rem] xl:text-[6rem]"
                style={{ animationDelay: "0.15s" }}
              >
                Ofelia
                <br />
                Antigüedades
              </h1>
              <h2
                className="animate-fade-in-up mt-3 max-w-[460px] text-sm leading-7 text-[#f0ddd0] sm:text-base"
                style={{ animationDelay: "0.3s" }}
              >
                Mobiliario y Objetos con Historia en Uruguay.
              </h2>
              <div className="pt-2">
                <a
                  href="#productos"
                  className="animate-fade-in-up inline-flex items-center justify-center rounded-full bg-[#b87682] px-7 py-3 text-[0.72rem] font-semibold tracking-[0.22em] text-[#f8e6c8] transition hover:bg-[#a66773]"
                  style={{ animationDelay: "0.45s" }}
                >
                  Explorar Colección
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8e6c8] via-[#f8e6c8]/25 to-transparent" />

      </div>
    </section>
  );
}
