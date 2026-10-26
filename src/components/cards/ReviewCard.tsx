import Image from "next/image";
import { GoogleIcon } from "@/components/icons";
import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/data/landing";

type ReviewCardProps = {
  review: Review;
};

/** Google review card (Figma component "review card mecatronics", 31:2272). */
export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col gap-8 rounded-card bg-mist p-2">
      <div className="flex items-center justify-between">
        {/* relative: keeps the sr-only label inside the scrollable row instead of widening the page. */}
        <span className="relative flex size-9 items-center justify-center rounded-full bg-white">
          <GoogleIcon className="size-4.5" />
          <span className="sr-only">Avis Google</span>
        </span>
        <StarRating rating={review.rating} className="px-4 py-2" />
      </div>
      <blockquote className="px-4 py-2 font-medium text-ink-strong">
        <p>{review.quote}</p>
      </blockquote>
      <footer className="mt-auto flex items-center">
        <span className="flex size-14 shrink-0 items-center justify-center">
          <Image src={review.avatar} alt="" width={41} height={41} className="size-10.25 rounded-full object-cover" />
        </span>
        <p className="px-4 py-1 leading-none font-extrabold text-ink-strong">{review.author}</p>
        <p className="px-4 py-1 text-caption font-medium text-muted">{review.date}</p>
      </footer>
    </article>
  );
}
