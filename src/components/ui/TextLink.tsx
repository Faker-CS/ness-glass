import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;

/** "EN SAVOIR PLUS →" link (Figma "Frame 28"). */
export function TextLink({ children, className, ...rest }: TextLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-14 items-center gap-2 rounded-field py-2 pr-2 pl-4 text-body font-bold text-brand uppercase",
        className,
      )}
      {...rest}
    >
      {children}
      <span className="flex size-6 items-center justify-center">
        <ArrowRightIcon className="size-2.75 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </a>
  );
}
