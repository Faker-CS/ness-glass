import { CareerCard } from "@/components/cards/CareerCard";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingCta, careers } from "@/data/landing";

/** Careers (Figma 31:4807): two-line heading + text, two photo cards with a CTA each. */
export function CareersSection() {
  return (
    <section id="carrieres" aria-labelledby="carrieres-title" className="pt-25">
      <Container>
        <SectionIntro
          title={careers.titleLines.map((line) => (
            <span key={line} className="lg:block">
              {line}{" "}
            </span>
          ))}
          titleId="carrieres-title"
          description={careers.description}
          descriptionWidth="fill"
          titleClassName="lg:shrink-0"
        />
        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-4">
          {careers.items.map((career) => (
            <li key={career.title}>
              <CareerCard career={career} cta={{ label: careers.cta, href: bookingCta.href }} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
