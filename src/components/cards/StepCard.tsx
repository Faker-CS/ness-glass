import Image from "next/image";
import type { Step } from "@/data/landing";

type StepCardProps = {
  step: Step;
};

/** Step card (Figma 31:4539): 3D illustration on a translucent tile, uppercase title, text. */
export function StepCard({ step }: StepCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex h-73 items-center justify-center rounded-card bg-black/4 p-4 backdrop-blur-glass">
        <Image src={step.image.src} alt={step.image.alt} width={200} height={200} className="size-50 object-contain" />
      </div>
      <div>
        <h3 className="px-4 py-2 font-bold text-ink-strong uppercase">{step.title}</h3>
        <p className="px-4 py-2 font-medium text-muted">{step.description}</p>
      </div>
    </article>
  );
}
