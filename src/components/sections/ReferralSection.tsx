import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Watermark } from "@/components/ui/Watermark";
import { bookingCta, referral } from "@/data/landing";

/*
 * 3D euro coins (Figma image 55–57), positioned on the 1280 × 450 card. Horizontal values
 * are percentages of the card; the two blurred ones only show from `lg`.
 */
const coinClasses = [
  "-z-10 hidden lg:block left-[10.9%] -top-77.5 w-[30.7%] blur-coin",
  "-z-10 -right-12 -bottom-14 w-32 lg:right-auto lg:bottom-auto lg:left-[77%] lg:top-37.25 lg:w-[30.7%]",
  "z-10 hidden lg:block right-[80%] top-73 w-[22.7%] blur-coin-sm -scale-x-100",
  "z-10 hidden sm:block left-[23%] top-68 w-[7.1%] -scale-x-100",
];

/** Referral card (Figma 31:4786): glow card, faded "REWARDS" watermark, coins, offer and CTA. */
export function ReferralSection() {
  return (
    <section id="parrainage" aria-labelledby="parrainage-title">
      <Container>
        <div className="relative isolate flex flex-col items-center justify-center overflow-hidden rounded-panel bg-glow-rewards px-5 py-12 sm:p-10 lg:h-112.5">
          <Watermark
            text={referral.watermark}
            size="rewards"
            tone="gradient-fade"
            className="absolute -top-7.5 -left-1.75 -z-10 leading-display opacity-12"
          />
          {coinClasses.map((coinClass) => (
            <Image
              key={coinClass}
              src={referral.coin}
              alt=""
              width={393}
              height={400}
              sizes="(min-width: 1024px) 393px, 160px"
              className={`absolute ${coinClass}`}
            />
          ))}

          <div className="flex flex-col items-center gap-4 text-center">
            <h2 id="parrainage-title" className="max-w-173.5 px-4 py-2 font-display text-h2 font-bold text-snow uppercase">
              {referral.titleBefore}
              <span className="text-cyan-bright">{referral.titleHighlight}</span>
              {referral.titleAfter}
            </h2>
            <p className="px-4 py-2 font-medium text-snow">{referral.bonus}</p>
            <p className="px-4 py-2 font-bold text-white uppercase">{referral.payment}</p>
            <div className="p-2.5">
              <ButtonLink href={bookingCta.href}>{referral.cta}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
