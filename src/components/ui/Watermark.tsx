import { cn } from "@/lib/cn";

type WatermarkSize = "offer" | "know" | "rewards" | "footer";

const sizeClasses: Record<WatermarkSize, string> = {
  offer: "text-watermark-offer",
  know: "text-watermark-know",
  rewards: "text-watermark-rewards",
  footer: "text-watermark-footer",
};

const toneClasses = {
  gradient: "text-gradient-brand",
  "gradient-fade": "text-gradient-brand-fade",
  white: "text-white",
} as const;

type WatermarkProps = {
  text: string;
  size: WatermarkSize;
  /** `gradient-fade` adds Figma's dark lower half ("LE SAVIEZ-VOUS ?", "REWARDS"). */
  tone?: "gradient" | "gradient-fade" | "white";
  className?: string;
};

/** Oversized decorative word ("OFFRE", "LE SAVIEZ-VOUS ?", "REWARDS", "NESSGLASS"); hidden from assistive tech. */
export function Watermark({ text, size, tone = "gradient", className }: WatermarkProps) {
  return (
    <p
      aria-hidden="true"
      className={cn(
        "font-display font-bold whitespace-nowrap uppercase select-none",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {text}
    </p>
  );
}
