type AvailabilityModalProps = {
  isOpen: boolean;
  selectedObject: string;
  whatsappHref: string;
  emailHref: string;
  onClose: () => void;
  onMoveToContact: () => void;
};

export function AvailabilityModal({
  isOpen,
  selectedObject,
  whatsappHref,
  emailHref,
  onClose,
  onMoveToContact,
}: AvailabilityModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#232323]/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#e2beb1] bg-[#fffaf2] p-7 shadow-xl">
        <h3 className="font-serif text-3xl text-[#232323]">Consultar disponibilidad</h3>
        <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
          Seleccionaste: <strong>{selectedObject}</strong>. Podés consultarnos por WhatsApp,
          por email o completar el formulario de contacto.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#232323] px-5 py-3 text-center text-sm font-semibold text-[#232323] transition hover:border-[#b87682] hover:text-[#b87682]"
          >
            Escribir por WhatsApp
          </a>
          <a
            href={emailHref}
            className="rounded-full border border-[#232323] px-5 py-3 text-center text-sm font-semibold text-[#232323] transition hover:border-[#b87682] hover:text-[#b87682]"
          >
            Enviar email
          </a>
          <button
            type="button"
            onClick={onMoveToContact}
            className="rounded-full border border-[#b87682] bg-[#b87682] px-5 py-3 text-sm font-semibold text-[#f8e6c8] transition hover:bg-[#a66773]"
          >
            Ir al formulario
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-sm text-[#7f535b] underline underline-offset-4"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
