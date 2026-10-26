import { AsteriskLabel } from "@/components/ui/AsteriskLabel";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  /** Accessible name of the list. */
  label: string;
  className?: string;
};

/**
 * Infinite ticker (Figma "Frame 2147225368"): the list is rendered twice and the track
 * slides by half its width. The copy is hidden from assistive tech; motion stops when
 * the user prefers reduced motion.
 */
export function Marquee({ items, label, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden bg-white/1 backdrop-blur-marquee", className)}>
      <div className="flex w-max motion-safe:animate-marquee">
        {[false, true].map((isCopy) => (
          <ul key={String(isCopy)} aria-label={isCopy ? undefined : label} aria-hidden={isCopy || undefined} className="flex">
            {items.map((item) => (
              <li key={item} className="whitespace-nowrap">
                <AsteriskLabel>{item}</AsteriskLabel>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
