import Image from "next/image";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactForm } from "@/data/landing";

/** Contact (Figma 31:4727, 1440 × 800, 20 px inset): photo card with the heading, form panel on the right. */
export function ContactSection() {
  return (
    <section id="rendez-vous" aria-labelledby="rendez-vous-title" className="bg-night">
      <div className="mx-auto flex max-w-360 flex-col gap-10 p-5 xl:h-200 xl:flex-row xl:items-center">
        <div className="relative h-120 overflow-hidden rounded-card xl:h-190 xl:max-w-180 xl:flex-1">
          <Image
            src={contactForm.photo.src}
            alt={contactForm.photo.alt}
            fill
            sizes="(min-width: 1280px) 720px, 100vw"
            className="object-cover"
          />
          <h2
            id="rendez-vous-title"
            className="absolute bottom-5 left-5 max-w-112.5 font-display text-h2-xl font-bold text-snow uppercase sm:left-10"
          >
            {contactForm.title}
          </h2>
        </div>

        <div className="xl:w-145 xl:shrink-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
