import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { bookingCta, hero, marqueeItems } from "@/data/landing";

/**
 * Hero (Figma 31:4468, top 800 px): glow background, technicians photo anchored to the
 * bottom edge, title, intro + CTAs on the right and the ticker overlapping the photo.
 */
export function HeroSection() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative overflow-hidden bg-glow-hero animate-glow-drift motion-reduce:animate-none text-snow xl:h-200">
      <Container className="relative z-10 flex flex-col gap-8 pt-35 xl:flex-row xl:items-start xl:justify-between">
        <h1 id="hero-title" className="max-w-142 font-display text-h2 font-bold uppercase">
          {hero.title}
        </h1>

        <div className="flex flex-col items-start gap-8 xl:-mr-5.5 xl:mt-53 xl:w-92.5">
          <p className="max-w-lg py-2 font-medium xl:ml-4 xl:w-82.5 xl:px-4">{hero.intro}</p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={bookingCta.href} variant="light">
              Contactez-nous
            </ButtonLink>
            <ButtonLink href={bookingCta.href}>{bookingCta.fr}</ButtonLink>
          </div>
        </div>
      </Container>

      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 1280px) 105vw, 100vw"
        className="relative mt-10 h-56 w-full object-cover sm:h-80 lg:h-96 xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-auto xl:w-[105%] xl:max-w-none xl:-translate-x-1/2"
      />

      <Marquee items={marqueeItems} label="Nos avantages" className="relative z-10 -mt-15 xl:absolute xl:inset-x-0 xl:bottom-0 xl:mt-0" />
    </section>
  );
}
