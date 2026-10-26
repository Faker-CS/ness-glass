import type { ComponentType, SVGProps } from "react";
import { EuroIcon, FastServiceIcon, FranceIcon, InsuranceIcon, PaperlessIcon, ShieldCheckIcon } from "@/components/icons";
import type { Engagement, EngagementIcon } from "@/data/landing";

const icons: Record<EngagementIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  insurance: InsuranceIcon,
  euro: EuroIcon,
  fast: FastServiceIcon,
  paperless: PaperlessIcon,
  france: FranceIcon,
  shield: ShieldCheckIcon,
};

type EngagementCardProps = {
  engagement: Engagement;
};

/** Engagement card (Figma 31:4620): glass card with a magenta/cyan glow, gradient icon, title, text. */
export function EngagementCard({ engagement }: EngagementCardProps) {
  const Icon = icons[engagement.icon];
  return (
    <article className="flex h-full min-h-73 flex-col justify-between gap-6 overflow-hidden rounded-card bg-glow-card p-2 backdrop-blur-glass">
      <div className="flex size-25 items-center justify-center">
        <Icon />
      </div>
      <div>
        <h3 className="px-4 py-2 font-bold text-snow uppercase">{engagement.title}</h3>
        <p className="px-4 py-2 font-medium text-muted-dark">{engagement.description}</p>
      </div>
    </article>
  );
}
