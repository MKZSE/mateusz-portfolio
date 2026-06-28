function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#" className="text-sm font-semibold tracking-[0.3em] text-white">
          MK
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#approach" className="transition-colors hover:text-white">Approach</a>
            <a href="#projects" className="transition-colors hover:text-white">Selected Work</a>
            <a href="#journey" className="transition-colors hover:text-white">Journey</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;