import { NewsCard } from "@/components/cards/NewsCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingCta, news } from "@/data/landing";

/** News (Figma 31:4838): heading + text, three article cards, CTA. */
export function NewsSection() {
  return (
    <section id="actualites" aria-labelledby="actualites-title" className="py-25">
      <Container>
        <SectionIntro
          title={news.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          titleId="actualites-title"
          description={news.description}
          descriptionWidth="wide"
          titleClassName="lg:max-w-142.5"
        />
        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-6.75 lg:grid-cols-3">
          {news.items.map((article) => (
            <li key={article.id}>
              <NewsCard article={article} readMore={news.readMore} />
            </li>
          ))}
        </ul>
        <div className="mt-14 flex justify-center">
          <ButtonLink href={bookingCta.href}>{bookingCta.en}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
