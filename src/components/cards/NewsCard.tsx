import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";
import type { Article } from "@/data/landing";

type NewsCardProps = {
  article: Article;
  readMore: string;
};

/** News card (Figma 31:4845): photo, title, two-line excerpt, "EN SAVOIR PLUS →". */
export function NewsCard({ article, readMore }: NewsCardProps) {
  return (
    <article className="flex h-full flex-col items-start gap-5.5">
      <Image
        src={article.image.src}
        alt={article.image.alt}
        width={409}
        height={286}
        sizes="(min-width: 1024px) 409px, 100vw"
        className="aspect-[409/286] w-full rounded-card object-cover"
      />
      <div>
        <h3 className="px-2 py-1 text-title font-semibold text-ink-strong">{article.title}</h3>
        <div className="min-h-15.75 px-2 py-1">
          <p className="line-clamp-2 font-medium text-muted">{article.excerpt}</p>
        </div>
      </div>
      <TextLink href={article.href} className="mt-auto">
        {readMore}
        <span className="sr-only"> : {article.title}</span>
      </TextLink>
    </article>
  );
}
