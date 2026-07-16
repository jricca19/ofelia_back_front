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
  const whatsappHref = `https://wa.me/59894048029?text=${whatsappText}`;
  const instagramHref = "https://www.instagram.com/ofelia_f_antiguedades/";
  const facebookHref = "https://www.facebook.com/profile.php?id=61587333688715";

  return (
    <section id="contacto" className="bg-[#f7ead8] px-6 py-24 lg:px-12">
      <div className="section-reveal mx-auto w-full max-w-5xl text-center">
        <p className="text-sm tracking-[0.28em] text-[#9b787d] uppercase">Contacto</p>
        <h2 className="mt-3 font-serif text-4xl text-[#232323] md:text-5xl">Hablemos</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#c08b93]" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-stretch">
          <form className="min-w-0 rounded-3xl border border-[#dfcdbb] bg-[#fffaf2] p-6 text-left shadow-[0_14px_34px_rgba(180,122,136,0.08)] lg:p-7">
            <p className="text-sm tracking-[0.22em] text-[#9b787d] uppercase">Escríbenos</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#5a5252]">
              Déjanos tu consulta. Te respondemos lo antes posible.
            </p>

            <div className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">Nombre</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Su nombre"
                    className="w-full rounded-2xl border border-[#d9c7b7] bg-[#fff7ef] px-4 py-3 text-base outline-none transition placeholder:text-[#b89f8e] focus:border-[#b87682]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Su email"
                    className="w-full rounded-2xl border border-[#d9c7b7] bg-[#fff7ef] px-4 py-3 text-base outline-none transition placeholder:text-[#b89f8e] focus:border-[#b87682]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">Objeto de interés</label>
                <input
                  type="text"
                  value={selectedObject}
                  onChange={(event) => setSelectedObject(event.target.value)}
                  placeholder={submitLabel}
                  className="w-full rounded-2xl border border-[#d9c7b7] bg-[#fff7ef] px-4 py-3 text-base outline-none transition placeholder:text-[#b89f8e] focus:border-[#b87682]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm tracking-[0.18em] text-[#6e6764] uppercase">Mensaje</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Su consulta..."
                  className="w-full rounded-2xl border border-[#d9c7b7] bg-[#fff7ef] px-4 py-3 text-base outline-none transition placeholder:text-[#b89f8e] focus:border-[#b87682]"
                />
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#b07a88] px-6 py-4 text-sm font-semibold tracking-[0.2em] text-[#f8e6c8] transition hover:bg-[#a66773]"
              >
                ENVIAR VÍA WHATSAPP
              </a>
            </div>
          </form>

          <div className="min-w-0 text-left">
            <div className="h-full rounded-3xl border border-[#dfcdbb] bg-[#fffaf2] p-6 shadow-[0_14px_34px_rgba(180,122,136,0.08)] lg:p-7">
              <p className="text-sm tracking-[0.22em] text-[#9b787d] uppercase">Redes</p>
              <p className="mt-2 text-sm leading-6 text-[#5a5252]">
                Si prefieres ver novedades, piezas nuevas y detalles del día a día, también estamos en redes.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de OFELIA Antigüedades"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d7b6a7] bg-[#fff7ef] px-4 py-3 text-sm font-medium text-[#5a5252] transition hover:-translate-y-0.5 hover:border-[#b87682] hover:text-[#b87682]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <path d="M16.5 7.5h.01" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3.75" />
                  </svg>
                  Instagram
                </a>

                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook de OFELIA Antigüedades"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d7b6a7] bg-[#fff7ef] px-4 py-3 text-sm font-medium text-[#5a5252] transition hover:-translate-y-0.5 hover:border-[#b87682] hover:text-[#b87682]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16.5V4.9c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.5V11H7v3h2.3v7h4.2Z" />
                  </svg>
                  Facebook
                </a>
              </div>

              <div className="mt-7 border-t border-[#ead8c8] pt-6">
                <p className="text-sm tracking-[0.22em] text-[#9b787d] uppercase">Contacto</p>
                <div className="mt-4 space-y-3 text-base leading-7 text-[#5a5252]">
                  <a
                    href="https://wa.me/59894048029"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-[#e6d2c1] bg-[#fff7ef] px-4 py-3 transition hover:border-[#b87682] hover:text-[#b87682]"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-[#b87682]" fill="none" stroke="currentColor">
                      <path d="M21 12a9 9 0 0 1-13.2 7.94L3 21l1.1-4.6A9 9 0 1 1 21 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>WhatsApp: +598 94 048 029</span>
                  </a>

                  <div className="flex items-start gap-3 rounded-2xl border border-[#e6d2c1] bg-[#fff7ef] px-4 py-3">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#b87682]" fill="none" stroke="currentColor">
                      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
                    </svg>
                    <span>Cordón, Montevideo, Uruguay</span>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#dfcdbb] bg-[#fffaf2]">
                  <iframe
                    title="Ubicación OFELIA Antiguedades"
                    src="https://maps.google.com/maps?q=-34.903070,-56.165440&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-[185px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
