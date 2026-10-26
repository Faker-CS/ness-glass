import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Watermark } from "@/components/ui/Watermark";
import { didYouKnow } from "@/data/landing";

/**
 * "Le saviez-vous ?" (Figma 31:4567, top 981 px): garage photo at 9 % opacity fading into
 * black, gradient watermark band, heading partly covered by the rotated 3D question mark,
 * law reference on the right.
 */
export function DidYouKnowSection() {
  return (
    <section id="le-saviez-vous" aria-labelledby="le-saviez-vous-title" className="relative overflow-hidden bg-night xl:h-245.25">
      <div className="absolute inset-0">
        <Image src={didYouKnow.background.src} alt="" fill sizes="100vw" className="object-cover opacity-9" />
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-linear-to-b from-transparent to-night" />
      </div>

      {/* Figma 31:4603: black → transparent over the top 296 px, above the heading (dims its first line). */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-74 bg-linear-to-b from-night to-transparent" />

      <Watermark
        text={didYouKnow.watermark}
        size="know"
        tone="gradient-fade"
        className="absolute inset-x-0 -top-1.5 z-20 flex justify-center leading-display"
      />

      <Container className="relative flex flex-col gap-8 pt-[14vw] pb-16 xl:block xl:pt-47 xl:pb-0">
        <SectionIntro
          layout="stack"
          tone="dark"
          title={didYouKnow.title}
          titleId="le-saviez-vous-title"
          titleSpacing="loose"
          className="lg:w-194.75"
        />

        <Image
          src={didYouKnow.questionMark.src}
          alt={didYouKnow.questionMark.alt}
          width={340}
          height={473}
          sizes="(min-width: 1280px) 340px, 160px"
          className="relative z-20 mx-auto w-40 rotate-[23.05deg] xl:absolute xl:top-50 xl:left-[36.65%] xl:mx-0 xl:w-85"
        />

        <p className="px-4 py-2 font-medium text-muted-dark md:text-lead xl:mt-22 xl:ml-auto xl:w-138.25">
          {didYouKnow.description}
        </p>
      </Container>
    </section>
  );
}
