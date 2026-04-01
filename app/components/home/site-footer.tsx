export function SiteFooter() {
  return (
    <footer className="border-t border-[#e3cfbc] bg-[#f7ead8] px-6 py-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 text-center">
        <div className="font-serif text-2xl text-[#232323]">OFELIA F.</div>
        <p className="text-[0.7rem] tracking-[0.35em] text-[#9b787d] uppercase">
          Tienda de Antigüedades
        </p>
        <div className="flex items-center gap-5 text-sm font-medium text-[#232323]">
          <a href="https://instagram.com" className="hover:text-[#b87682]">
            Instagram
          </a>
          <a href="https://facebook.com" className="hover:text-[#b87682]">
            Facebook
          </a>
        </div>
        <p className="pt-2 text-[0.68rem] text-[#7a6f66]">
          © 2026 OFELIA Antigüedades — Uruguay. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
