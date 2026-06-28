type FooterProps = {
  content: {
    copyright: string;
    note: string;
  };
};

function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>{content.copyright}</p>

        <p>{content.note}</p>
      </div>
    </footer>
  );
}

export default Footer;