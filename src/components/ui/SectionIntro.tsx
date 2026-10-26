import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const layoutClasses = {
  split: "gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10",
  center: "items-center text-center",
  stack: "",
} as const;

const splitDescriptionClasses = {
  default: "lg:max-w-104 lg:shrink-0",
  wide: "lg:max-w-110 lg:shrink-0",
  // Taller than the heading when it only gets the leftover width, so it aligns to the top instead.
  fill: "lg:min-w-0 lg:flex-1 lg:self-start",
} as const;

type SectionIntroProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Id for `aria-labelledby` on the enclosing section. */
  titleId?: string;
  /** `split`: heading left, text right (bottom-aligned). `center`: both centred. `stack`: both left-aligned. */
  layout?: "split" | "center" | "stack";
  tone?: "light" | "dark";
  /** `compact` is the 64 px heading of the services section; `default` is 68 px. */
  titleSize?: "default" | "compact";
  /** Figma pads most headings 8/16 px and a few 12.6/25.2 px (`loose`). */
  titleSpacing?: "default" | "loose";
  /** Width of the heading block, which differs per section in Figma. */
  titleClassName?: string;
  /** `split` only: 416 px (`default`), 440 px (`wide`) or whatever the heading leaves (`fill`). */
  descriptionWidth?: "default" | "wide" | "fill";
  descriptionClassName?: string;
  className?: string;
};

/** Section heading (Clash Display Bold, uppercase) with its supporting paragraph (Inter Medium 16). */
export function SectionIntro({
  title,
  description,
  titleId,
  layout = "split",
  tone = "light",
  titleSize = "default",
  titleSpacing = "default",
  titleClassName,
  descriptionWidth = "default",
  descriptionClassName,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("flex flex-col", layoutClasses[layout], className)}>
      <h2
        id={titleId}
        className={cn(
          "font-display font-bold uppercase",
          titleSize === "compact" ? "text-h2-compact" : "text-h2",
          titleSpacing === "loose" ? "px-6 py-3" : "px-4 py-2",
          tone === "light" ? "text-ink" : "text-snow",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "px-4 py-2 font-medium",
            tone === "light" ? "text-muted" : "text-muted-dark",
            layout === "split" && splitDescriptionClasses[descriptionWidth],
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
