import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { bookingCta, type Offer } from "@/data/landing";
import { cn } from "@/lib/cn";

type OfferCardProps = {
  offer: Offer;
  className?: string;
};

/**
 * Offer card (Figma component "offer animations", 31:1924 / 31:2048). The banknote / tyre
 * image sits behind the card at rest, as in Figma, and slides out on hover or focus
 * (PROGRESS.md, A12).
 */
export function OfferCard({ offer, className }: OfferCardProps) {
  return (
    <article className={cn("group relative isolate w-full max-w-102.75", className)}>
      <Image
        src={offer.image.src}
        alt={offer.image.alt}
        width={offer.image.width}
        height={offer.image.height}
        sizes="384px"
        className="absolute inset-x-6 top-6 -z-10 w-[calc(100%-3rem)] transition-transform duration-500 ease-out motion-safe:group-focus-within:-translate-y-2/5 motion-safe:group-focus-within:rotate-6 motion-safe:group-hover:-translate-y-2/5 motion-safe:group-hover:rotate-6"
      />
      <div className="flex flex-col items-center gap-2.5 overflow-hidden rounded-offer bg-glow-offer px-2.5 py-4 text-snow">
        <div className="flex w-full max-w-86.5 flex-col gap-2">
          {/* Figma keeps a 3-line (183 px) box for the 2-line price, which spaces the card out. */}
          <h3 className="p-2 font-display text-h2 font-bold uppercase lg:min-h-49.75">
            {offer.price.map((line, index) => (
              <span key={index} className="block">
                {line.map((part) => (
                  <span key={part.text} className={part.highlight ? "text-brand-cyan" : undefined}>
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h3>
          <div>
            <p className="p-2 font-bold text-white uppercase">{offer.title}</p>
            <div className="p-2 font-medium">
              {offer.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full p-2">
          <ButtonLink href={bookingCta.href} variant="outline" className="w-full">
            {bookingCta.fr}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
