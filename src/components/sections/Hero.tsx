import Button from "../ui/Button";

type HeroProps = {
  content: {
    label: string;
    line1: string;
    line2: string;
    highlight: string;
    afterHighlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

function Hero({ content }: HeroProps) {
  return (
    <div className="relative flex min-h-[calc(88vh-64px)] flex-col justify-start overflow-hidden pt-28 pb-10 sm:pt-32">
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[18rem] font-bold leading-none text-white/[0.03] lg:block">
        MK
      </div>

      <span className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm sm:tracking-[0.35em]">
        {content.label}
      </span>

      <h1 className="max-w-4xl text-[2.8rem] font-bold leading-tight text-white sm:text-6xl md:text-7xl">
        {content.line1}
        <br />
        {content.line2}
        <br />
        <span className="text-blue-400">{content.highlight}</span>{" "}
        {content.afterHighlight}
      </h1>

      <p className="mt-8 max-w-[620px] text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
        {content.description}
      </p>

      <div className="mt-12 flex flex-wrap gap-5">
        <Button href="#projects">{content.primaryButton}</Button>

        <Button href="#contact" variant="secondary">
          {content.secondaryButton}
        </Button>
      </div>
    </div>
  );
}

export default Hero;