import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Load eagerly when the logo is above the fold. */
  eager?: boolean;
};

/** Nessglass logo (133 × 56 in Figma), linking home. */
export function Logo({ className, eager = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/images/logo-nessglass.webp"
        alt="Nessglass, la sécurité de votre visibilité. Accueil"
        width={133}
        height={56}
        loading={eager ? "eager" : "lazy"}
        className="h-14 w-auto"
      />
    </Link>
  );
}
