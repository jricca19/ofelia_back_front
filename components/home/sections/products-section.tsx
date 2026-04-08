import Image from "next/image";
import type { Product } from "@/domain/product";

const FALLBACK_IMAGE_URL =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";
const EMPTY_STATE_IMAGE_URL =
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80";

function readAttributeAsString(attributes: Record<string, unknown>, key: string): string {
  const value = attributes[key];
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return "";
}

type ProductsSectionProps = {
  items: Product[];
  onRequestAvailability: (itemName: string) => void;
};

export function ProductsSection({
  items,
  onRequestAvailability,
}: ProductsSectionProps) {
  const gridClassName =
    items.length === 1
      ? "grid grid-cols-1 gap-6"
      : items.length === 2
        ? "grid grid-cols-1 gap-6 md:grid-cols-2"
        : "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8";

  return (
    <section id="productos" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
      <div className="section-reveal mb-12 text-center">
        <p className="text-[0.72rem] tracking-[0.28em] text-[#9b787d] uppercase">Nuestra Colección</p>
        <h2 className="mt-3 font-serif text-4xl text-[#232323] md:text-5xl">Piezas Únicas</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5a5252] md:text-base">
          Selección de mobiliario y objetos singulares con procedencia verificada,
          restauración respetuosa y carácter irrepetible.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-sm border border-[#e5d2bf] bg-[#fffaf2] p-6 shadow-[0_18px_35px_-24px_rgba(35,35,35,0.35)] md:grid-cols-[1.05fr_1fr]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#f7ece0]">
            <Image
              src={EMPTY_STATE_IMAGE_URL}
              alt="Catálogo en renovación"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#232323]/20 via-transparent to-transparent" />
          </div>
          <div className="text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9b787d]">
              Catálogo en renovación
            </p>
            <h3 className="mt-3 font-serif text-2xl text-[#232323] md:text-3xl">
              Estamos preparando nuevas incorporaciones.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5a5252]">
              Si buscas algo especial, cuéntanos y te ayudamos a encontrar la pieza adecuada.
            </p>
          </div>
        </div>
      ) : (
        <div className={gridClassName}>
          {items.map((item, index) => {
            const estilo = readAttributeAsString(item.attributes, "estilo");
            const anio = readAttributeAsString(item.attributes, "anio");
            const material = readAttributeAsString(item.attributes, "material") || "Material no especificado";
            const resumen = [estilo, anio].filter(Boolean).join(" · ") || "Sin datos históricos";

            return (
              <article
                key={item.id}
                className="stagger-in group overflow-hidden rounded-sm border border-[#e5d2bf] bg-[#fffaf2] shadow-[0_18px_35px_-24px_rgba(35,35,35,0.35)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f7ece0]">
                  <Image
                    src={item.cover_image_url ?? FALLBACK_IMAGE_URL}
                    alt={item.title}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#232323]/10 via-transparent to-transparent" />
                </div>

                <div className="space-y-2 px-4 py-4 text-left">
                  <h3 className="truncate font-serif text-[1.05rem] text-[#232323]">{item.title}</h3>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#9b787d]">
                    {resumen}
                  </p>
                  <p className="truncate text-[0.78rem] leading-5 text-[#666060]">
                    {material} · {item.description ?? "Sin descripción"}
                  </p>
                  <button
                    type="button"
                    onClick={() => onRequestAvailability(item.title)}
                    className="mt-3 w-full rounded-sm border border-[#b87682] bg-[#b87682] px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.18em] text-[#f8e6c8] transition hover:bg-[#a66773]"
                  >
                    Consultar Disponibilidad
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
