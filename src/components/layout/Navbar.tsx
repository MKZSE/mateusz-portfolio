import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Language } from "../../data/content";

type NavbarProps = {
  nav: {
    approach: string;
    projects: string;
    journey: string;
    contact: string;
  };
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

function Navbar({ nav, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { label: nav.approach, href: "#approach" },
    { label: nav.projects, href: "#projects" },
    { label: nav.journey, href: "#journey" },
    { label: nav.contact, href: "#contact" },
  ];

  function toggleLanguage() {
    setLanguage((current) => (current === "pl" ? "en" : "pl"));
    setIsOpen(false);
  }

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

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label={
              language === "pl"
                ? "Przełącz język na angielski"
                : "Switch language to Polish"
            }
          >
            {language.toUpperCase()}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
            aria-label={
              language === "pl"
                ? "Przełącz język na angielski"
                : "Switch language to Polish"
            }
          >
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
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