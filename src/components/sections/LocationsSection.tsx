import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Container } from "@/components/ui/Container";
import { Select } from "@/components/ui/FormFields";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { locations } from "@/data/landing";

/**
 * Locations (Figma 31:4509, 1440 × 800): heading, text and centre picker on the left,
 * centre count at the bottom; the France map fills the right 701 px (48.7 %).
 */
export function LocationsSection() {
  return (
    <section id="emplacements" aria-labelledby="emplacements-title" className="relative xl:h-200">
      <Container className="xl:h-full">
        <div className="flex flex-col gap-10 py-10 xl:h-full xl:w-147 xl:justify-between">
          <div>
            <SectionIntro
              layout="stack"
              title={locations.title}
              titleId="emplacements-title"
              titleSpacing="loose"
              description={locations.description}
            />
            <div className="px-4 py-2">
              <Select
                name="centre"
                label={locations.selectLabel}
                placeholder={locations.selectPlaceholder}
                options={[...locations.centres]}
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 sm:pl-9">
            <AvatarStack avatars={[...locations.avatars]} />
            <p className="font-medium text-brand uppercase">{locations.count}</p>
          </div>
        </div>
      </Container>

      <div className="relative aspect-square w-full sm:aspect-video xl:absolute xl:inset-y-0 xl:right-0 xl:aspect-auto xl:w-[48.7%]">
        <Image
          src={locations.map.src}
          alt={locations.map.alt}
          fill
          sizes="(min-width: 1280px) 49vw, 100vw"
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
