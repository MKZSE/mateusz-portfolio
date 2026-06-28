const technologies = [
  "ASP.NET Core",
  "React",
  "TypeScript",
  "PostgreSQL",
  "JWT Auth",
  "REST API",
];

function SelectedWork() {
  return (
    <>
      <div className="mb-12 max-w-2xl md:mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Selected Work
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Projects built with purpose
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I focus on projects that solve real problems and help people use
          technology in a practical way.
        </p>
      </div>

      <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-950/20 md:p-10">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                    In development
                </span>

                <span className="text-sm text-slate-400">
                    Mobile app + admin panel + backend API
                </span>
            </div>

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Pilgrimage Companion
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A full-stack system designed to support pilgrimage organization.
                It combines a mobile application, administrative panel, backend API
                and relational database. The system includes daily schedules, route
                management, stops, announcements, songbook and regulations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-semibold text-white">
                  Real-world use
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-slate-400">Role</p>
                <p className="mt-2 font-semibold text-white">
                  Mobile + web + API
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm text-slate-400">Status</p>
                <p className="mt-2 font-semibold text-white">
                  In development
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Technologies
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
                Built as a real-world project, not a tutorial. The system connects
                a mobile experience for participants with an administrative interface
                for organizers and a backend responsible for data management.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default SelectedWork;