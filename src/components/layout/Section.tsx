import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
    className?: string;
};

function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-24 md:py-32 ${className}`}
        >
            {children}
        </section>
    );
}

export default Section;