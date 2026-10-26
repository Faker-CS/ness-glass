import { EngagementCard } from "@/components/cards/EngagementCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingCta, engagements } from "@/data/landing";

/** "Nos engagements" (Figma 31:4611, 1192 px wide): centred heading, 3 × 2 glass cards, CTA. */
export function EngagementsSection() {
  return (
    <section id="engagements" aria-labelledby="engagements-title" className="bg-night pt-10 pb-18 lg:pt-0">
      <Container>
        <div className="mx-auto flex max-w-298 flex-col items-center">
          <SectionIntro
            layout="center"
            tone="dark"
            title={engagements.title}
            titleId="engagements-title"
            titleSpacing="loose"
            description={engagements.description}
            descriptionClassName="max-w-134.75"
          />
          <ul className="mt-7 grid w-full gap-x-4.75 gap-y-3.75 sm:grid-cols-2 lg:grid-cols-3">
            {engagements.items.map((engagement) => (
              <li key={engagement.title}>
                <EngagementCard engagement={engagement} />
              </li>
            ))}
          </ul>
          <ButtonLink href={bookingCta.href} className="mt-11.25">
            {bookingCta.en}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
