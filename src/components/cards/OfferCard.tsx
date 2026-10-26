import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Sparkle } from "@/components/ui/Sparkle";
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
        style={{
          transform: offer.image.src.includes("banknotes")
            ? "scaleX(-1)"
            : "none",
        }}
        className="absolute inset-x-6 top-6 -z-10 w-[calc(100%-3rem)] transition-transform duration-500 ease-out motion-safe:group-focus-within:-translate-y-3/5 motion-safe:group-focus-within:rotate-6 motion-safe:group-hover:-translate-y-3/5 motion-safe:group-hover:rotate-6 motion-safe:group-hover:drop-shadow-[0_0_45px_var(--color-white)]  brightness-125"/>
      {/* Sparkles appear around the image once it slides out. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 -z-10 h-24 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 delay-300 duration-300 ease-in-out drop-shadow-[0_0_45px_var(--color-white)]  brightness-125"
      >
        <Sparkle size={42} className="absolute left-[0%] top-[-20%] motion-safe:group-hover:animate-pulse-1 delay-700 duration-700 ease-in-out" />
        <Sparkle size={30} className="absolute left-[55%] top-[-115%] motion-safe:group-hover:animate-pulse-1 delay-700 duration-700 ease-in-out" />
        <Sparkle size={20} className="absolute right-[0%] top-[15%] motion-safe:group-hover:animate-pulse-1 delay-700 duration-700 ease-in-out" />
      </div>
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
          <ButtonLink href={bookingCta.href} variant="outline" className="w-full animate-pill-drift motion-reduce:animate-none">
            {bookingCta.fr}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
