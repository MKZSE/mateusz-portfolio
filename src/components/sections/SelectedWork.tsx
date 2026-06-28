const technologies = [
  "ASP.NET Core",
  "React",
  "TypeScript",
  "PostgreSQL",
  "JWT Auth",
  "REST API",
];

type SelectedWorkProps = {
  content: {
    label: string;
    title: string;
    description: string;
    statusBadge: string;
    projectType: string;
    projectTitle: string;
    projectDescription: string;
    stats: {
      label: string;
      value: string;
    }[];
    technologiesTitle: string;
    technologiesDescription: string;
  };
};

function SelectedWork({ content }: SelectedWorkProps) {
  return (
    <>
      <div className="mb-12 max-w-2xl md:mb-10">
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

      <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-950/20 md:p-10">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                {content.statusBadge}
              </span>

              <span className="text-sm text-slate-400">
                {content.projectType}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              {content.projectTitle}
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {content.projectDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-2 font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              {content.technologiesTitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-7 text-slate-400">
                {content.technologiesDescription}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default SelectedWork;