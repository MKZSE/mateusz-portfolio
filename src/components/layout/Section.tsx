import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  scrollMargin?: string;
};

function Section({
  id,
  children,
  className = "",
  scrollMargin = "scroll-mt-28",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${scrollMargin} py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;