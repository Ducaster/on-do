import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  children,
  className,
  href,
  type,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-body text-[0.9rem] font-semibold rounded-sm cursor-pointer transition-all duration-300";

  const variants = {
    primary:
      "px-9 py-[15px] bg-primary text-white border-none shadow-[0_2px_8px_rgba(156,80,48,0.18)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(156,80,48,0.22)] active:translate-y-0 tracking-[0.01em]",
    outline:
      "px-9 py-[15px] bg-transparent text-text border-[1.5px] border-border-light font-medium hover:bg-bg-warm hover:border-primary-light hover:text-primary-dark tracking-[0.01em]",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
