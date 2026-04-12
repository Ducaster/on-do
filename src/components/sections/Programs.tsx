import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, Bot, Globe } from "lucide-react";

export function Programs() {
  return (
    <section className="py-28 md:py-36 bg-bg-warm" id="programs">
      <Container>
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              온도가 하는 것
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[420px] leading-[1.85] break-keep">
              혼자 고민하던 것들, 이제 함께 풀어갈 수 있어요.
            </p>
          </div>
        </ScrollReveal>

        {/* 멘토-멘티 매칭 — 주력 서비스 */}
        <ScrollReveal>
          <div className="bg-card rounded-[var(--radius-lg)] p-8 md:p-10 mb-5 border border-primary/15 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.04] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-[1.3rem] font-bold text-text mb-3">
                멘토-멘티 매칭
              </h3>
              <p className="text-[0.92rem] text-text-secondary leading-[1.9] break-keep max-w-lg">
                진로, 취업, 감정, 관계 등 주제별 멘토를 연결합니다.
                <br className="hidden md:block" />
                1:1 대화로 내 상황에 맞는 조언을 받을 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                <span className="text-[0.76rem] text-primary/80 px-3.5 py-1.5 bg-primary/[0.06] rounded-full">
                  1:1 맞춤 매칭
                </span>
                <span className="text-[0.76rem] text-primary/80 px-3.5 py-1.5 bg-primary/[0.06] rounded-full">
                  주제별 전문 멘토
                </span>
                <span className="text-[0.76rem] text-primary/80 px-3.5 py-1.5 bg-primary/[0.06] rounded-full">
                  비밀 보장
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 하단 2열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 멘토링 AI */}
          <ScrollReveal delay={80}>
            <div className="bg-card rounded-[var(--radius-md)] p-7 border border-border-lighter shadow-xs h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-[0.68rem] font-medium text-text-muted bg-bg-warm px-2.5 py-1 rounded-full border border-border-lighter">
                  준비중
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-bg-warm flex items-center justify-center mb-5">
                <Bot size={20} className="text-text-light" />
              </div>
              <h3 className="font-heading text-[1.02rem] font-bold text-text mb-2">
                멘토링 AI
              </h3>
              <p className="text-[0.86rem] text-text-secondary leading-[1.8] break-keep flex-1">
                사람 멘토와의 연결 전후, AI가 먼저 고민을 정리하고 방향을
                제안합니다. 현재 운영 준비중입니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 커뮤니티 */}
          <ScrollReveal delay={160}>
            <div className="bg-card rounded-[var(--radius-md)] p-7 border border-border-lighter shadow-xs h-full flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-5">
                <Globe size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-[1.02rem] font-bold text-text mb-2">
                커뮤니티
              </h3>
              <p className="text-[0.86rem] text-text-secondary leading-[1.8] break-keep flex-1">
                비슷한 고민을 가진 20대들이 모입니다. 혼자 버티지 않아도 되는
                공간입니다.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
