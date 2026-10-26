import { ReviewCard } from "@/components/cards/ReviewCard";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { reviews } from "@/data/landing";

/**
 * Reviews (Figma 31:4764): heading + text, then a horizontally scrollable row of review
 * cards (12 in Figma, 4 visible at 1280 px), with scroll snapping and no autoplay (A14).
 */
export function ReviewsSection() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="py-25">
      <Container>
        <SectionIntro
          title={reviews.title}
          titleId="avis-title"
          description={reviews.description}
          titleClassName="lg:max-w-173.5"
        />
        <div
          role="region"
          aria-label="Avis clients, faire défiler horizontalement"
          tabIndex={0}
          className="relative mt-10 scrollbar-none snap-x snap-mandatory overflow-x-auto rounded-card"
        >
          <ul className="flex gap-4">
            {reviews.items.map((review) => (
              <li key={review.id} className="w-77 shrink-0 snap-start">
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
