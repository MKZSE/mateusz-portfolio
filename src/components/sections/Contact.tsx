import Button from "../ui/Button";

type ContactProps = {
  content: {
    label: string;
    title: string;
    description: string;
    github: string;
    email: string;
  };
};

function Contact({ content }: ContactProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:mx-12 md:p-12">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {content.label}
      </span>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Button href="https://github.com/MKZSE">{content.github}</Button>

          <Button href="mailto:YOUR_EMAIL_HERE" variant="secondary">
            {content.email}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;