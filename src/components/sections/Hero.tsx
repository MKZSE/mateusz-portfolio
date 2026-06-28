import Button from "../ui/Button";

function Hero() {
  return (
    <div className="relative flex min-h-[calc(88vh-64px)] flex-col justify-start overflow-hidden pt-32 pb-10">
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[18rem] font-bold leading-none text-white/[0.03] lg:block">
        MK
      </div>

      <span className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300 sm:text-sm">
        Web applications • Mobile apps • APIs
      </span>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
        Building software
        <br />
        that solves
        <br />
        <span className="text-blue-400">real</span> problems.
      </h1>

      <p className="mt-8 max-w-[620px] text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
        I'm a software developer focused on building web and mobile
        applications. I enjoy turning ideas into practical software that people
        can actually use.
      </p>

      <div className="mt-12 flex flex-wrap gap-5">
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" variant="secondary">Contact</Button>
      </div>
    </div>
  );
}

export default Hero;