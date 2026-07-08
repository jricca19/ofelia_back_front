import type { Dispatch, SetStateAction } from "react";

type ContactSectionProps = {
  name: string;
  email: string;
  message: string;
  selectedObject: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setSelectedObject: Dispatch<SetStateAction<string>>;
};

export function ContactSection({
  name,
  email,
  message,
  selectedObject,
  setName,
  setEmail,
  setMessage,
  setSelectedObject,
}: ContactSectionProps) {
  const submitLabel = selectedObject
    ? `Objeto de interés: ${selectedObject}`
    : "Objeto de interés";

  const whatsappText = encodeURIComponent(
    [
      "Hola OFELIA Antiguedades, quisiera hacer una consulta:",
      name ? `Nombre: ${name}` : null,
      email ? `Email: ${email}` : null,
      selectedObject ? `Objeto: ${selectedObject}` : null,
      message ? `Mensaje: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n")
  );
  const whatsappHref = `https://wa.me/59899000000?text=${whatsappText}`;
  const emailHref = "mailto:info@ofeliaantiguedades.com";

  return (
    <section id="contacto" className="bg-[#f7ead8] px-6 py-24 lg:px-12">
      <div className="section-reveal mx-auto w-full max-w-5xl text-center">
        <p className="text-sm tracking-[0.28em] text-[#9b787d] uppercase">Contacto</p>
        <h2 className="mt-3 font-serif text-4xl text-[#232323] md:text-5xl">Hablemos</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#c08b93]" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <form className="space-y-5 text-left">
            <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Su nombre"
              className="w-full border border-[#d6c8bd] bg-[#fdf6ec] px-4 py-3 text-base outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />

            <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Su email"
              className="w-full border border-[#d6c8bd] bg-[#fdf6ec] px-4 py-3 text-base outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />

            <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">
              Objeto de interés
            </label>
            <input
              type="text"
              value={selectedObject}
              onChange={(event) => setSelectedObject(event.target.value)}
              placeholder={submitLabel}
              className="w-full border border-[#d6c8bd] bg-[#fdf6ec] px-4 py-3 text-base outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />

            <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">
              Mensaje
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Su consulta..."
              className="w-full border border-[#d6c8bd] bg-[#fdf6ec] px-4 py-3 text-base outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center bg-[#b07a88] px-6 py-4 text-sm font-semibold tracking-[0.2em] text-[#f8e6c8] transition hover:bg-[#a66773]"
            >
              ENVIAR VÍA WHATSAPP
            </a>
          </form>

          <div className="mx-auto w-full max-w-md text-left">
            <h3 className="font-serif text-4xl text-[#232323]">Información de Contacto</h3>
            <div className="mt-6 space-y-4 text-base leading-7 text-[#5a5252]">
              <a
                href="https://wa.me/59899000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-base transition hover:text-[#b87682]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#b87682]" fill="none" stroke="currentColor">
                  <path d="M21 12a9 9 0 0 1-13.2 7.94L3 21l1.1-4.6A9 9 0 1 1 21 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>WhatsApp: +598 99 000 000</span>
              </a>

              <a href="tel:+5982000000" className="flex items-start gap-3 text-base transition hover:text-[#b87682]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#b87682]" fill="none" stroke="currentColor">
                  <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3.09a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.8a16 16 0 0 0 6.2 6.2l1.36-1.35a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>+598 2 000 000</span>
              </a>

              <a href={emailHref} className="flex items-start gap-3 text-base transition hover:text-[#b87682]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#b87682]" fill="none" stroke="currentColor">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
                  <path d="m4 7 8 6 8-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>info@ofeliaantiguedades.com</span>
              </a>

              <p className="flex items-start gap-3 text-base">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#b87682]" fill="none" stroke="currentColor">
                  <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
                </svg>
                <span>
                  Ciudad Vieja, Montevideo
                  <br />
                  Uruguay
                </span>
              </p>
            </div>

            <div className="mt-6 overflow-hidden border border-[#dfcdbb] bg-[#fffaf2]">
              <iframe
                title="Ubicación OFELIA Antiguedades"
                src="https://maps.google.com/maps?q=Ciudad%20Vieja%20Montevideo%20Uruguay&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-[185px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
