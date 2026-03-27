import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-[120px] bg-bg-cream relative" id="testimonials">
      <Container>
        <SectionHeader
          eyebrow="Reviews"
          title="코칭 후기"
          description="온도를 경험한 분들의 이야기예요"
          center
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100} className="h-full">
              <div className="bg-card rounded-lg p-7 border border-border-light shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-border h-full flex flex-col">
                <span className="font-caption text-[4.5rem] leading-[0.8] text-accent-soft absolute top-[18px] left-6 italic pointer-events-none">
                  &ldquo;
                </span>
                <div className="relative z-1 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-[18px]">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 text-[#C89848] fill-[#C89848]"
                      />
                    ))}
                  </div>
                  <p className="text-[0.92rem] text-text leading-[1.9] mb-[22px] break-keep flex-1">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border-lighter">
                    <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center font-caption text-[0.88rem] font-medium text-primary italic">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-[0.82rem] font-semibold">
                        {t.name}
                      </div>
                      <div className="text-[0.72rem] text-text-light tracking-[0.02em]">
                        {t.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-center mt-8 text-[0.74rem] text-text-light italic">
          * 동의를 받아 게재하였으며, 개인 식별 정보는 비공개 처리되었습니다.
        </p>
      </Container>
    </section>
  );
}
