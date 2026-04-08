import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { coaches } from "@/data/coaches";

export function Coaches() {
  return (
    <section className="py-28 md:py-36 bg-bg" id="coaches">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              코치 소개
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[440px] leading-[1.85] break-keep">
              20대의 고민을 함께 나누고, 다음 한 걸음을 응원하는 코치들이에요.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 md:space-y-16">
          {coaches.map((coach, i) => (
            <ScrollReveal key={coach.id} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
                <div className="w-full md:w-[280px] shrink-0">
                  <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-bg-section">
                    <Image
                      src={coach.photoSrc}
                      alt={coach.photoAlt}
                      fill
                      className="object-cover saturate-[0.85]"
                    />
                  </div>
                </div>
                <div className="flex-1 md:pt-4">
                  <h3 className="font-heading text-[1.25rem] font-bold text-text mb-1">
                    {coach.name}
                  </h3>
                  <span className="text-[0.8rem] text-text-muted block mb-5">
                    {coach.title}
                  </span>
                  <p className="text-[0.92rem] text-text-secondary leading-[1.95] mb-6 break-keep">
                    {coach.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[0.74rem] px-3 py-1 border border-border-lighter rounded-full text-text-muted"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <p className="text-[0.74rem] text-text-light">
                    {coach.credentials.join(" · ")} · {coach.education}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
