import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { coaches } from "@/data/coaches";

export function Coaches() {
  return (
    <section className="py-[120px] bg-bg-warm relative" id="coaches">
      <Container>
        <SectionHeader
          eyebrow="Our Coaches"
          title="코치 소개"
          description="20대의 고민을 함께 나누고, 다음 한 걸음을 응원하는 코치들이에요"
          center
        />
        <div className="grid grid-cols-3 gap-5 max-[920px]:grid-cols-1 max-[920px]:max-w-[440px] max-[920px]:mx-auto">
          {coaches.map((coach, i) => (
            <ScrollReveal key={coach.id} delay={i * 100} className="h-full">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border-light transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-border h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[1/1.08] bg-bg-section group">
                  <Image
                    src={coach.photoSrc}
                    alt={coach.photoAlt}
                    fill
                    className="object-cover transition-transform duration-700 saturate-[0.9] group-hover:scale-[1.04] group-hover:saturate-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-bg-dark/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 z-2 p-6">
                    <h3 className="font-heading text-[1.2rem] font-bold text-white mb-0.5 tracking-[0.02em]">
                      {coach.name}
                    </h3>
                    <span className="text-[0.78rem] text-white/70 font-normal tracking-[0.02em]">
                      {coach.title}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {coach.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-[0.68rem] px-2.5 py-1 bg-bg-section text-text-secondary rounded-full font-medium"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                  <div className="mb-3.5">
                    <div className="text-[0.7rem] font-semibold text-text-light mb-1.5 tracking-[0.08em] uppercase">
                      전문 분야
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {coach.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[0.74rem] px-3 py-1 border border-border-light rounded-full text-text-secondary font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[0.84rem] text-text-secondary leading-[1.75] break-keep flex-1">
                    {coach.bio}
                  </p>
                  <div className="text-[0.76rem] text-text-light mt-3.5 flex items-center gap-1.5 pt-3 border-t border-border-lighter">
                    <GraduationCap className="w-[13px] h-[13px]" />
                    {coach.education}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
