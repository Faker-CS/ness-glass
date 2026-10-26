import { StepCard } from "@/components/cards/StepCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingCta, howItWorks } from "@/data/landing";

/** How it works (Figma 31:4532, 1082 px wide, centred): heading, three step cards, CTA. */
export function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" aria-labelledby="comment-ca-marche-title" className="pt-25 pb-10">
      <Container>
        <div className="mx-auto flex max-w-270.5 flex-col items-center">
          <SectionIntro
            layout="center"
            title={howItWorks.title}
            titleId="comment-ca-marche-title"
            titleSpacing="loose"
            description={howItWorks.description}
          />
          <ol className="mt-10 grid w-full gap-7 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <li key={step.image.src}>
                <StepCard step={step} />
              </li>
            ))}
          </ol>
          <ButtonLink href={bookingCta.href} className="mt-14">
            {bookingCta.fr}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
