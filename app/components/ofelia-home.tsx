"use client";

import { useMemo, useState } from "react";
import { collectionItems } from "@/app/data/collection-items";
import { CollectionSection } from "@/app/components/collection-section";
import { SiteHeader } from "@/app/components/home/site-header";
import { HeroSection } from "@/app/components/home/hero-section";
import { HistorySection } from "@/app/components/home/history-section";
import { ContactSection } from "@/app/components/home/contact-section";
import { SiteFooter } from "@/app/components/home/site-footer";
import { AvailabilityModal } from "@/app/components/home/availability-modal";

export function OfeliaHome() {
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

        <CollectionSection
          items={collectionItems}
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
