import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "outline-navy";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 rounded";

  const variants = {
    primary: "bg-gold text-navy hover:bg-gold-light",
    outline:
      "bg-transparent text-white border-2 border-white/30 hover:border-gold hover:text-gold",
    "outline-navy":
      "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
