import type { ReactNode } from "react";
import { AsteriskIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type AsteriskLabelProps = {
  children: ReactNode;
  className?: string;
};

/** Magenta asterisk + Clash Display Medium label (ticker items, "Offer valid throughout France"). */
export function AsteriskLabel({ children, className }: AsteriskLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 px-5 py-2.5", className)}>
      <span className="flex size-10 shrink-0 items-center justify-center">
        <AsteriskIcon className="size-5 text-brand" />
      </span>
      <span className="font-display text-marquee font-medium text-snow">{children}</span>
    </span>
  );
}
