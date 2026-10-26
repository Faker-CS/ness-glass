export type NavLink = {
  label: string;
  href: string;
  /** Figma sets some footer links in uppercase (COMMUNAUTÉ column). */
  uppercase?: boolean;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SocialNetwork = "facebook" | "instagram" | "youtube";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  href: string;
};

export const siteName = "Nessglass";

/** Page anchors used by the header menu. The landing page is the only route (see PROGRESS.md, A1). */
export const mainNav: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos offres", href: "#offres" },
  { label: "Trouver un centre", href: "#emplacements" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Nos services", href: "#services" },
  { label: "Avis clients", href: "#avis" },
  { label: "Parrainage", href: "#parrainage" },
  { label: "Carrières", href: "#carrieres" },
  { label: "Nos actualités", href: "#actualites" },
  { label: "Contactez-nous", href: "#rendez-vous" },
];

export const primaryCta: NavLink = { label: "Parlons-en", href: "#rendez-vous" };

export const contact = {
  phone: "02 18 88 94 28",
  phoneHref: "tel:+33218889428",
  email: "contact@nessglass.fr",
  hours: "Lun–Sam · 8:00–18:00",
} as const;

export const footerTagline =
  "Votre expert en vitrage automobile. Réparation et remplacement de pare-brise professionnels à travers la France.";

export const footerColumns: FooterColumn[] = [
  {
    title: "Nos services",
    links: [
      { label: "Remplacement de pare-brise", href: "#services" },
      { label: "Réparation d'impact", href: "#services" },
      { label: "Vitre arrière", href: "#services" },
      { label: "Vitre latérale", href: "#services" },
      { label: "Toit panoramique", href: "#services" },
      { label: "Calibration ADAS", href: "#services" },
    ],
  },
  {
    title: "Infos",
    links: [
      { label: "Nos actualités", href: "#actualites" },
      { label: "Nos services", href: "#services" },
      { label: "Nos offres", href: "#offres" },
      { label: "Contactez-nous", href: "#rendez-vous" },
      { label: "Blog", href: "#actualites" },
    ],
  },
  {
    title: "COMMUNAUTÉ",
    links: [
      { label: "Devenir installateur de vitrage", href: "#carrieres", uppercase: true },
      { label: "Trouver un centre", href: "#emplacements", uppercase: true },
      { label: "Devenir agent commercial", href: "#carrieres", uppercase: true },
      { label: "Contactez-nous", href: "#rendez-vous" },
      { label: "Blog", href: "#actualites" },
    ],
  },
];

/** Profile URLs are not in the design yet (PROGRESS.md, A9). */
export const socialLinks: SocialLink[] = [
  { network: "facebook", label: "Nessglass sur Facebook", href: "#" },
  { network: "instagram", label: "Nessglass sur Instagram", href: "#" },
  { network: "youtube", label: "Nessglass sur YouTube", href: "#" },
];

export const languageLabel = "English(Eng)";

export const copyright = "2026 Nessglass. Tous droits réservés.";
