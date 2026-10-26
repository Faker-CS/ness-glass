import Image from "next/image";
import { ServiceThumb } from "@/components/cards/ServiceThumb";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingCta, services, type ServiceId } from "@/data/landing";

/*
 * Desktop positions around the car, from the "our services" component (31:2236), relative
 * to a 1280 × 910 stage whose top is the windshield thumbnail. Horizontal values are
 * percentages of the stage so the layout keeps its shape between 1024 and 1440 px.
 */
const thumbPositions: Record<ServiceId, string> = {
  windshield: "lg:left-[42.42%] lg:top-0",
  "panoramic-roof": "lg:left-[4.77%] lg:top-50",
  "rear-window": "lg:left-[77.58%] lg:top-50",
  "adas-camera": "lg:left-[13.05%] lg:top-153",
  "impact-repair": "lg:left-[71.8%] lg:top-154.5",
};

/** Services (Figma 31:4726): heading + text, top-down car with the five services around it, CTA. */
export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="pt-25 pb-10 lg:pb-4">
      <Container>
        <SectionIntro
          title={services.title}
          titleId="services-title"
          titleSize="compact"
          description={services.description}
          titleClassName="lg:max-w-156"
        />

        <div className="relative mt-10 flex flex-col items-center gap-10 lg:mt-10 lg:block lg:h-227.5">
          <Image
            src={services.car.src}
            alt={services.car.alt}
            width={298}
            height={577}
            sizes="298px"
            className="w-40 sm:w-52 lg:absolute lg:top-83.25 lg:left-[38.36%] lg:w-74.5"
          />
          <ul className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 lg:block">
            {services.items.map((service) => (
              <li key={service.id} className={`lg:absolute lg:w-48.5 ${thumbPositions[service.id]}`}>
                <ServiceThumb service={service} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center lg:mt-7">
          <ButtonLink href={bookingCta.href}>{bookingCta.fr}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
