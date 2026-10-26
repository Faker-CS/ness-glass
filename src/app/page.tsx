import { CareersSection } from "@/components/sections/CareersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DidYouKnowSection } from "@/components/sections/DidYouKnowSection";
import { EngagementsSection } from "@/components/sections/EngagementsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { ReferralSection } from "@/components/sections/ReferralSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main id="contenu">
      <HeroSection />
      <OffersSection />
      <LocationsSection />
      <HowItWorksSection />
      <DidYouKnowSection />
      <EngagementsSection />
      <ServicesSection />
      <ContactSection />
      <ReviewsSection />
      <ReferralSection />
      <CareersSection />
      <NewsSection />
    </main>
  );
}
