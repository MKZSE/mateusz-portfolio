const principles = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "I enjoy creating software that solves real problems instead of building projects just to fill a portfolio.",
  },
  {
    number: "02",
    title: "Keep improving",
    description:
      "Every project teaches me something new. I focus on learning through practice and continuously improving my skills.",
  },
  {
    number: "03",
    title: "Think long-term",
    description:
      "I value clean architecture, maintainable code and solutions designed to evolve over time.",
  },
];

function HowIWork() {
  return (
    <>
      <div className="mb-12 max-w-2xl md:mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Approach
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          How I work
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          I believe good software is more than just working code. It should be
          useful, maintainable and built with purpose.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.number}
            className="group flex min-h-[300px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-950/20"
          >
            <span className="text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-blue-400/20">
                {principle.number}
            </span>

            <h3 className="mt-8 text-2xl font-semibold text-white">
              {principle.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export default HowIWork;