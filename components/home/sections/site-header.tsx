import Image from "next/image";
import { NAV_LINKS } from "@/components/home/sections/nav-links";

type SiteHeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function SiteHeader({
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/85 shadow-[0_5px_6px_rgba(35,35,35,0.30)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-8">
          <a href="#inicio" className="inline-flex items-center font-serif text-3xl tracking-wide text-[#232323]">
            <Image
              src="/logo-ofelia.png"
              alt="Ofelia Antigüedades."
              width={200}
              height={200}
              className="h-20 w-35 rounded-md border border-[#d7b6a7] object-cover"
            />
            <span className="sr-only">OFELIA ANTIQUEDADES</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium tracking-wide text-[#2b2b2b] transition hover:text-[#b87682]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b87682] text-[#7f535b] md:hidden"
          onClick={onToggleMenu}
          aria-label="Abrir navegación"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[#d7b6a7] bg-[#f8e6c8] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onCloseMenu}
                className="rounded-lg px-2 py-3 text-base font-medium tracking-wide text-[#2b2b2b] hover:bg-[#f5d7c0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
