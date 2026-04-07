import Image from "next/image";
import type { Product } from "@/domain/product";

const FALLBACK_IMAGE_URL =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";

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

type CollectionSectionProps = {
  items: Product[];
  onRequestAvailability: (itemName: string) => void;
};

export function CollectionSection({
  items,
  onRequestAvailability,
}: CollectionSectionProps) {
  return (
    <section id="coleccion" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
      <div className="section-reveal mb-12 text-center">
        <p className="text-[0.72rem] tracking-[0.28em] text-[#9b787d] uppercase">Nuestra Colección</p>
        <h2 className="mt-3 font-serif text-4xl text-[#232323] md:text-5xl">Piezas Únicas</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5a5252] md:text-base">
          Selección de mobiliario y objetos singulares con procedencia verificada,
          restauración respetuosa y carácter irrepetible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {items.map((item, index) => {
          const estilo = readAttributeAsString(item.attributes, "estilo");
          const anio = readAttributeAsString(item.attributes, "anio");
          const material =
            readAttributeAsString(item.attributes, "material") || "Material no especificado";
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
                <h3 className="font-serif text-[1.05rem] text-[#232323]">{item.title}</h3>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#9b787d]">
                  {resumen}
                </p>
                <p className="text-[0.78rem] leading-5 text-[#666060]">
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
    </section>
  );
}
