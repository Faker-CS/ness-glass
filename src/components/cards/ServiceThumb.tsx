import Image from "next/image";
import type { Service } from "@/data/landing";
import { cn } from "@/lib/cn";

type ServiceThumbProps = {
  service: Service;
  className?: string;
};

/** Service thumbnail (Figma 31:2238): 194 px rounded photo and an uppercase label. */
export function ServiceThumb({ service, className }: ServiceThumbProps) {
  return (
    <figure className={cn("flex w-full max-w-48.5 flex-col gap-2", className)}>
      <Image
        src={service.image.src}
        alt={service.image.alt}
        width={194}
        height={194}
        className="aspect-square w-full rounded-card object-cover"
      />
      <figcaption className="p-2 font-bold text-ink-strong uppercase">{service.title}</figcaption>
    </figure>
  );
}
