import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30",
    secondary:
      "border border-white/10 bg-white/[0.04] text-slate-200 backdrop-blur hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
}

export default Button;