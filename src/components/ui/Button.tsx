import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20",
    secondary:
      "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
}

export default Button;