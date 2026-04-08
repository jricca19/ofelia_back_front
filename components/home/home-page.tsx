"use client";

import { useMemo, useState } from "react";
import { ProductsSection } from "@/components/home/sections/products-section";
import { SiteHeader } from "@/components/home/sections/site-header";
import { HeroSection } from "@/components/home/sections/hero-section";
import { HistorySection } from "@/components/home/sections/history-section";
import { ContactSection } from "@/components/home/sections/contact-section";
import { SiteFooter } from "@/components/home/sections/site-footer";
import { AvailabilityModal } from "@/components/home/ui/availability-modal";
import type { Product } from "@/domain/product";

type HomePageProps = {
  products: Product[];
};

export function HomePage({ products }: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      `Hola OFELIA Antiguedades. Me interesa consultar disponibilidad sobre: ${selectedObject}.`
    );
    return `https://wa.me/59899000000?text=${text}`;
  }, [selectedObject]);

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Consulta de disponibilidad: ${selectedObject}`);
    const body = encodeURIComponent(
      `Hola, quisiera recibir información sobre la pieza "${selectedObject}".`
    );
    return `mailto:contacto@ofeliaantiguedades.uy?subject=${subject}&body=${body}`;
  }, [selectedObject]);

  const handleRequestAvailability = (itemName: string) => {
    setSelectedObject(itemName);
    setIsModalOpen(true);
  };

  const moveToContact = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8e6c8] text-[#232323]">
      <SiteHeader
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main id="inicio" className="flex-1">
        <HeroSection />

        <ProductsSection
          items={products}
          onRequestAvailability={handleRequestAvailability}
        />

        <HistorySection />

        <ContactSection
          name={name}
          email={email}
          message={message}
          selectedObject={selectedObject}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          setSelectedObject={setSelectedObject}
        />
      </main>

      <SiteFooter />

      <AvailabilityModal
        isOpen={isModalOpen}
        selectedObject={selectedObject}
        whatsappHref={whatsappHref}
        emailHref={emailHref}
        onClose={() => setIsModalOpen(false)}
        onMoveToContact={moveToContact}
      />

      {/* Aquí se podría integrar un carrito de compras cuando la estrategia comercial evolucione. */}
    </div>
  );
}
