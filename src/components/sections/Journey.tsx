const journeyItems = [
  {
    period: "2022 / 2023",
    title: "Started learning programming",
    description:
      "I started learning programming in technical school. Over time, despite the challenges, I became more interested in creating practical software.",
  },
  {
    period: "Internship I",
    title: "Web application development",
    description:
      "During my first internship, I worked with web applications, including a CRUD-style table interface, an application connected to an API and adapting a web app into a mobile version.",
  },
  {
    period: "Internship II",
    title: "Websites, WordPress and landing pages",
    description:
      "During my second internship, I worked on websites, WordPress-based pages, landing page implementation based on a design and creating additional pages to support SEO.",
  },
  {
    period: "2026",
    title: "Pilgrimage Companion",
    description:
      "A real-world project combining a mobile application, admin panel, backend API and relational database for pilgrimage organization.",
  },
];

function Journey() {
  return (
    <>
      <div className="mb-12 max-w-2xl md:mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Journey
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Learning by building
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          My path is still at an early stage, but every project and experience
          helps me understand how to build better software.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

        <div className="space-y-6">
          {journeyItems.map((item) => (
            <article
              key={item.title}
              className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04] md:ml-12"
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