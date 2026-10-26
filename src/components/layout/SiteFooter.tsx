import type { ComponentType, SVGProps } from "react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Watermark } from "@/components/ui/Watermark";
import {
  contact,
  copyright,
  footerColumns,
  footerTagline,
  languageLabel,
  socialLinks,
  type SocialNetwork,
} from "@/data/site";
import { cn } from "@/lib/cn";

const socialIcons: Record<SocialNetwork, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const linkClasses = "transition-colors duration-200 hover:text-brand-cyan";

/** Site footer (Figma 31:4885): glow background, link columns, contact, socials and the NESSGLASS watermark. */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-glow-footer text-snow">
      <Container className="pt-12.5">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-xs flex-col gap-6 lg:w-43.5">
            <Logo className="self-start" />
            <p className="font-light">{footerTagline}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:w-252 lg:justify-between lg:gap-3">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-6 lg:w-54.5 lg:shrink-0">
                <h2 className="font-bold">{column.title}</h2>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={cn(linkClasses, link.uppercase && "uppercase")}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="flex flex-col gap-6 lg:w-39.25 lg:shrink-0">
              <h2 className="font-bold">Contactez-nous</h2>
              <address className="flex flex-col gap-6 not-italic">
                <a href={contact.phoneHref} className={linkClasses}>
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className={cn(linkClasses, "whitespace-nowrap")}>
                  {contact.email}
                </a>
                <p className="whitespace-nowrap">{contact.hours}</p>
              </address>
            </div>

            <div className="flex flex-col gap-4 lg:w-35 lg:shrink-0">
              <h2 className="font-bold whitespace-nowrap">Réseaux sociaux</h2>
              <ul className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.network];
                  return (
                    <li key={social.network}>
                      <a href={social.href} aria-label={social.label} className={cn("block rounded-full", linkClasses)}>
                        <Icon className="size-9" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line py-5 font-light sm:flex-row sm:items-center sm:justify-between">
          <p lang="en">{languageLabel}</p>
          <p>{copyright}</p>
        </div>
      </Container>

      <Watermark
        text="Nessglass"
        size="footer"
        tone="white"
        className="mt-17 -mb-[0.25em] flex justify-center leading-display"
      />
    </footer>
  );
}
