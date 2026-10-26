import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { Career } from "@/data/landing";

type CareerCardProps = {
  career: Career;
  cta: { label: string; href: string };
};

/** Career card (Figma 31:4814): 632 × 432 photo, Clash Display title, text, CTA. */
export function CareerCard({ career, cta }: CareerCardProps) {
  return (
    <article className="flex h-full flex-col gap-4">
      <Image
        src={career.image.src}
        alt={career.image.alt}
        width={632}
        height={432}
        sizes="(min-width: 1024px) 632px, 100vw"
        className="aspect-[632/432] w-full rounded-card object-cover"
      />
      <div className="flex flex-1 flex-col justify-end">
        <h3 className="px-4 py-2 font-display leading-display font-bold text-ink uppercase">{career.title}</h3>
        <p className="px-4 py-2 font-medium text-muted">{career.description}</p>
        <div className="px-4 py-2">
          <div className="p-2">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
