import { Logo } from "@/components/layout/Logo";
import { SiteMenu } from "@/components/layout/SiteMenu";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/data/site";

/** Header overlaying the hero (Figma "Frame 113", 31:4485): logo, menu button, "Parlons-en". */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex items-center justify-between gap-2 pt-6 pb-4">
        <Logo eager className="sm:mx-4" />
        <div className="flex items-center gap-2 sm:mx-4 sm:gap-8">
          <SiteMenu />
          <div className="hidden xs:block">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
