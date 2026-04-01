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

  return (
    <section id="contacto" className="bg-[#f7ead8] px-6 py-24 lg:px-12">
      <div className="section-reveal mx-auto w-full max-w-5xl text-center">
        <p className="text-[0.72rem] tracking-[0.28em] text-[#9b787d] uppercase">Contacto</p>
        <h2 className="mt-3 font-serif text-4xl text-[#232323] md:text-5xl">Hablemos</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <form className="space-y-4 text-left">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Su nombre"
              className="w-full border-b border-[#d9c2ae] bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Su email"
              className="w-full border-b border-[#d9c2ae] bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />
            <input
              type="text"
              value={selectedObject}
              onChange={(event) => setSelectedObject(event.target.value)}
              placeholder={submitLabel}
              className="w-full border-b border-[#d9c2ae] bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Su consulta..."
              className="w-full border border-[#dfcdbb] bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#b89f8e] focus:border-[#b87682]"
            />
            <button
              type="button"
              className="w-full bg-[#b87682] px-6 py-3 text-xs font-semibold tracking-[0.2em] text-[#f8e6c8] transition hover:bg-[#a66773]"
            >
              ENVIAR VÍA WHATSAPP
            </button>
          </form>

          <div className="mx-auto w-full max-w-md text-left">
            <h3 className="font-serif text-lg text-[#232323]">Información de Contacto</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[#5a5252]">
              <p>WhatsApp: +598 99 000 000</p>
              <p>+598 2 000 000</p>
              <p>info@ofeliaantiguedades.com</p>
              <p>Ciudad Vieja, Montevideo, Uruguay</p>
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
