import { OfferCard } from "@/components/cards/OfferCard";
import { AsteriskLabel } from "@/components/ui/AsteriskLabel";
import { Container } from "@/components/ui/Container";
import { Watermark } from "@/components/ui/Watermark";
import { offerNote, offers } from "@/data/landing";

// Desktop tilt and vertical offset of each card, from the instance transforms (31:4504, 31:4505).
const tiltClasses = {
  left: "lg:mt-2 lg:-rotate-[12.64deg]",
  right: "lg:rotate-[8.41deg]",
} as const;

/** Offers (Figma 31:4468, below the hero): "OFFRE" watermark fading into black, two tilted cards, note. */
export function OffersSection() {
  return (
    <section id="offres" aria-labelledby="offres-title" className="relative overflow-hidden bg-night pb-19">
      <h2 id="offres-title" className="sr-only">
        Nos offres
      </h2>

      <div className="absolute inset-x-0 top-0 -translate-y-[11%]">
        <Watermark text="Offre" size="offer" className="flex justify-center leading-display" />
        <div className="absolute inset-x-0 top-[42%] bottom-0 bg-linear-to-b from-transparent to-night to-80%" />
      </div>

      <Container className="relative flex flex-col items-center gap-10 pt-[22vw] lg:flex-row lg:items-start lg:justify-center lg:gap-9.5 lg:pt-77">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} className={tiltClasses[offer.tilt]} />
        ))}
      </Container>

      <div className="relative mt-14 flex justify-center px-5">
        <AsteriskLabel>{offerNote}</AsteriskLabel>
      </div>
    </section>
  );
}
