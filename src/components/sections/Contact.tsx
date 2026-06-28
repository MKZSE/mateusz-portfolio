import Button from "../ui/Button";

function Contact() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:mx-12 md:p-12">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Contact
      </span>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Let’s build something useful.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m open to conversations about software, practical projects and
            opportunities to build applications that solve real problems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Button href="https://github.com/MKZSE">GitHub</Button>

          <Button href="mailto:mateuszkosowski47@gmail.com" variant="secondary">
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;