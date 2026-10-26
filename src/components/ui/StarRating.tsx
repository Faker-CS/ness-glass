import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

/** Row of stars (Figma "Frame 2147225467"): filled in `star`, the rest in `star-off`. */
export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div role="img" aria-label={`Note : ${rating} sur ${max}`} className={cn("flex gap-2", className)}>
      {Array.from({ length: max }, (_, index) => (
        <span key={index} className="flex size-6 items-center justify-center">
          <StarIcon className={cn("size-5.25", index < rating ? "text-star" : "text-star-off")} />
        </span>
      ))}
    </div>
  );
}
