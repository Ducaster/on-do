import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-[60px]", center && "text-center", className)}>
      {eyebrow && (
        <span className="font-caption text-[0.82rem] font-medium tracking-[0.22em] italic text-primary mb-3.5 block uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.6rem,3vw,2.15rem)] font-bold mb-4 text-text">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-[0.98rem] text-text-secondary leading-[1.9] max-w-[500px]",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
