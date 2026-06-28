import { useState } from "react";

const navigationLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Selected Work", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.3em] text-white"
          onClick={() => setIsOpen(false)}
        >
          MK
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-t border-white/10 bg-[#020617] px-6 py-6 shadow-2xl shadow-black/40 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-300">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;