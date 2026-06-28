type JourneyItem = {
  period: string;
  title: string;
  description: string;
};

type JourneyProps = {
  content: {
    label: string;
    title: string;
    description: string;
    items: JourneyItem[];
  };
};

function Journey({ content }: JourneyProps) {
  return (
    <>
      <div className="mb-12 max-w-2xl md:mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          {content.label}
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          {content.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {content.description}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

        <div className="space-y-6">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04] md:ml-12 md:p-8"
            >
              <div className="absolute -left-[3.25rem] top-10 hidden h-4 w-4 rounded-full border border-blue-400 bg-slate-950 md:block" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                {item.period}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Journey;