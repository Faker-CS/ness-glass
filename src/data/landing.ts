/*
 * Static content of the landing page, copied from Figma (31:4467). Repeated placeholder
 * copy is kept verbatim so it is easy to replace (PROGRESS.md, A3).
 */

export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const hero = {
  title: "Visibilité claire. Sécurité complète. Partout en France.",
  intro:
    "Des réparations mineures aux remplacements complets de pare-brise, nos spécialistes offrent des solutions en verre rapides et professionnelles pour vous ramener en toute sécurité sur la route.",
  image: {
    src: "/images/hero-technicians.webp",
    alt: "Deux techniciens Nessglass posent un pare-brise sur une voiture de sport.",
    width: 2896,
    height: 925,
  } satisfies Image,
} as const;

/** English in Figma (PROGRESS.md, A5). */
export const marqueeItems = ["No upfront costs", "Franchise Offered", "All Insurances", "Installation guaranteed for life"];

export type Offer = {
  id: string;
  /** Price lines; `highlight` parts are set in brand cyan. */
  price: Array<Array<{ text: string; highlight?: boolean }>>;
  title: string;
  description: string[];
  image: Image;
  /** Card tilt on desktop, from the instance rotation. */
  tilt: "left" | "right";
};

export const offers: Offer[] = [
  {
    id: "virement",
    price: [
      [{ text: "De " }, { text: "200", highlight: true }, { text: " €" }],
      [{ text: "À " }, { text: "400", highlight: true }, { text: " €" }],
    ],
    title: "Virement bancaire",
    description: ["Consultez les conditions de nos offres dans nos centres et sur notre site web"],
    image: { src: "/images/offer-banknotes.webp", alt: "", width: 736, height: 611 },
    tilt: "left",
  },
  {
    id: "pneus",
    price: [
      [{ text: "De " }, { text: "2", highlight: true }, { text: " €" }],
      [{ text: "À " }, { text: "4", highlight: true }, { text: " €" }],
    ],
    title: "Nouveaux pneus proposés",
    description: [
      "Franchise annulée jusqu'à 80 €*",
      "Sous réserve de sélection et de disponibilité",
      "Consultez les conditions de nos offres dans nos centres et sur notre site web",
    ],
    image: { src: "/images/offer-tyres.webp", alt: "", width: 766, height: 506 },
    tilt: "right",
  },
];

export const offerNote = "Offer valid throughout France";

export const locations = {
  title: "Explorez vos lieux les plus proches",
  description:
    "Trouvez votre centre de verre Ness le plus proche et bénéficiez d'un service de vitrage automobile professionnel où que vous soyez en France.",
  selectLabel: "Choisir un centre Nessglass",
  selectPlaceholder: "Sélectionnez votre emplacement",
  /** Mock centres: the design only shows the closed select (PROGRESS.md, A8). */
  centres: [
    { value: "paris", label: "Paris" },
    { value: "lyon", label: "Lyon" },
    { value: "marseille", label: "Marseille" },
    { value: "toulouse", label: "Toulouse" },
    { value: "bordeaux", label: "Bordeaux" },
    { value: "lille", label: "Lille" },
    { value: "nantes", label: "Nantes" },
    { value: "strasbourg", label: "Strasbourg" },
  ],
  count: "83 emplacements",
  avatars: [
    { src: "/images/avatar-centre-1.webp", alt: "" },
    { src: "/images/avatar-centre-2.webp", alt: "" },
    { src: "/images/avatar-centre-3.webp", alt: "" },
  ],
  map: {
    src: "/images/map-france.webp",
    alt: "Carte routière du nord et du centre de la France, de Rouen à Lyon.",
    width: 600,
    height: 600,
  } satisfies Image,
} as const;

export type Step = {
  title: string;
  description: string;
  image: Image;
};

const stepCopy = {
  title: "Soumettez votre demande en ligne.",
  description:
    "Remplissez notre simple formulaire en ligne et parlez-nous de votre remplacement de pare-brise. C'est rapide, facile et complètement gratuit.",
};

export const howItWorks = {
  title: "Comment fonctionne Nessglass ?",
  description:
    "Notre processus simple s'occupe de la paperasse et de l'assurance, donc vous ne payez rien d'avance.",
  steps: [
    { ...stepCopy, image: { src: "/images/step-online-form.webp", alt: "", width: 400, height: 394 } },
    { ...stepCopy, image: { src: "/images/step-support.webp", alt: "", width: 400, height: 400 } },
    { ...stepCopy, image: { src: "/images/step-fast.webp", alt: "", width: 398, height: 392 } },
  ] satisfies Step[],
};

export const didYouKnow = {
  watermark: "Le saviez-vous ?",
  title: "Vous avez la liberté de choisir votre réparateur.",
  description:
    "En cas de vitre brisée, vous êtes libre de choisir le réparateur de votre choix, peu importe votre compagnie d'assurance. Protégé par la loi française n° 2014-344 du 17 mars 2014, article 63.",
  background: { src: "/images/garage-background.webp", alt: "", width: 999, height: 665 } satisfies Image,
  questionMark: { src: "/images/question-mark.webp", alt: "", width: 668, height: 929 } satisfies Image,
} as const;

export type EngagementIcon = "insurance" | "euro" | "fast" | "paperless" | "france" | "shield";

export type Engagement = {
  icon: EngagementIcon;
  title: string;
  description: string;
};

const engagementCopy =
  "Nous travaillons avec tous les principaux fournisseurs d'assurance pour rendre le remplacement de votre pare-brise simple.";

export const engagements = {
  title: "Nos engagements",
  description:
    "Du soutien en assurance à l'installation professionnelle, nous rendons chaque étape plus rapide, plus simple et plus fiable.",
  items: [
    { icon: "insurance", title: "Toutes les assurances", description: engagementCopy },
    { icon: "euro", title: "0 € d'avance", description: engagementCopy },
    { icon: "fast", title: "Service rapide", description: engagementCopy },
    { icon: "paperless", title: "Aucun papier", description: engagementCopy },
    { icon: "france", title: "Partout en France", description: engagementCopy },
    { icon: "shield", title: "Garantie d'installation à vie", description: engagementCopy },
  ] satisfies Engagement[],
};

export type ServiceId = "windshield" | "panoramic-roof" | "rear-window" | "adas-camera" | "impact-repair";

export type Service = {
  id: ServiceId;
  title: string;
  image: Image;
};

export const services = {
  title: "Soins complets du pare-brise. Tout en un seul endroit.",
  description:
    "Du remplacement de pare-brise et de la réparation d'impact au toit panoramique, aux vitres arrière et au calibrage ADAS, nos spécialistes offrent des solutions en verre précises et professionnelles pour chaque véhicule.",
  car: {
    src: "/images/car-top-view.webp",
    alt: "Voiture vue de dessus, pare-brise, toit panoramique et vitre arrière visibles.",
    width: 596,
    height: 1154,
  } satisfies Image,
  items: [
    {
      id: "windshield",
      title: "Remplacement de pare-brise",
      image: { src: "/images/service-windshield.webp", alt: "", width: 388, height: 388 },
    },
    {
      id: "panoramic-roof",
      title: "Remplacement de toit panoramique",
      image: { src: "/images/service-panoramic-roof.webp", alt: "", width: 388, height: 388 },
    },
    {
      id: "rear-window",
      title: "Remplacement de vitre arrière",
      image: { src: "/images/service-rear-window.webp", alt: "", width: 388, height: 388 },
    },
    {
      id: "adas-camera",
      title: "Calibrage de caméra ADAS",
      image: { src: "/images/service-adas-camera.webp", alt: "", width: 388, height: 388 },
    },
    {
      id: "impact-repair",
      title: "Réparation d'impact",
      image: { src: "/images/service-impact-repair.webp", alt: "", width: 388, height: 388 },
    },
  ] satisfies Service[],
};

export const contactForm = {
  title: "Prenons soin de votre véhicule.",
  photo: {
    src: "/images/contact-mechanic.webp",
    alt: "Mécanicien en salopette devant une voiture sur un pont élévateur, éclairage magenta et cyan.",
    width: 1024,
    height: 1081,
  } satisfies Image,
  fields: {
    firstName: "Prénom",
    lastName: "Nom de famille",
    phone: "Numéro de téléphone",
    email: "Email",
    postalCode: "Code postal",
    message: "Dites-nous comment nous pouvons vous aider...",
  },
  consent:
    "J'accepte les [Conditions Générales] fournies par l'entreprise. En fournissant mon numéro de téléphone, j'accepte de recevoir des messages SMS et des appels de l'entreprise.",
  submit: "Envoyer la demande",
  success: "Merci ! Votre demande a bien été envoyée. Nous vous recontactons très vite.",
} as const;

export type Review = {
  id: string;
  rating: number;
  quote: string;
  author: string;
  date: string;
  avatar: string;
};

/** 12 cards in 3 rows of 4 in Figma; rows 2 and 3 still carry English placeholder copy, translated here. */
export const reviews = {
  title: "Ce que disent nos clients",
  description:
    "Des expériences réelles de conducteurs qui nous font confiance pour des services automobiles professionnels, fiables et sans tracas.",
  items: Array.from(
    { length: 12 },
    (_, index): Review => ({
      id: `avis-${index + 1}`,
      rating: 4,
      quote: "« Le café est excellent et le service est rapide. De premier ordre. »",
      author: "Tumar Baris",
      date: "Il y a 10 mois",
      avatar: "/images/reviewer-avatar.webp",
    }),
  ),
};

export const referral = {
  watermark: "Rewards",
  titleBefore: "Recevez ",
  titleHighlight: "40",
  titleAfter: " € pour chaque parrainage !",
  bonus: "Un supplément de 40 € pour chaque 4 parrainages (pour un total de 200 €)",
  payment: "Méthode de paiement : virement bancaire",
  cta: "Profitez d'une remise allant jusqu'à 50 %",
  coin: "/images/euro-coin.webp",
} as const;

export type Career = {
  title: string;
  description: string;
  image: Image;
};

const careerCopy =
  "Rejoignez notre réseau croissant de professionnels de l'automobile ou devenez membre de notre équipe. Découvrez de nouvelles opportunités, développez votre expertise et construisez un avenir réussi avec nessglass.";

export const careers = {
  titleLines: ["Grandissez avec nous", "Construisez avec nous"],
  description: careerCopy,
  items: [
    {
      title: "Votre expertise. Plus d'opportunités.",
      description: careerCopy,
      image: {
        src: "/images/career-expertise.webp",
        alt: "Technicien Nessglass installant le pare-brise d'un camion.",
        width: 1264,
        height: 864,
      },
    },
    {
      title: "Faites progresser votre carrière avec nous.",
      description: careerCopy,
      image: {
        src: "/images/career-growth.webp",
        alt: "Poignée de main entre une conseillère et un professionnel de l'automobile dans un showroom.",
        width: 1264,
        height: 864,
      },
    },
  ] satisfies Career[],
  cta: "Rejoignez-nous",
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: Image;
};

const articleCopy = {
  title: "Pare-brise fissuré : causes sans impact et solutions",
  excerpt:
    "Fissure de pare-brise sans impact : découvrez les causes, les risques et les solutions pour réparer rapidement votre pare-brise.",
  href: "#actualites",
  image: {
    src: "/images/news-windshield-repair.webp",
    alt: "Technicien réparant une fissure de pare-brise avec un injecteur de résine.",
    width: 573,
    height: 401,
  },
};

export const news = {
  titleLines: ["Nos", "actualités"],
  description:
    "Restez informé, nous partagerons nos meilleures offres, nos progrès et les dernières mises à jour concernant la réparation de pare-brise.",
  items: [
    { id: "article-1", ...articleCopy },
    { id: "article-2", ...articleCopy },
    { id: "article-3", ...articleCopy },
  ] satisfies Article[],
  readMore: "En savoir plus",
};

/** Figma uses both labels for the same booking action (PROGRESS.md, A5). */
export const bookingCta = { fr: "Prendre rendez-vous", en: "Book appointment", href: "#rendez-vous" } as const;
