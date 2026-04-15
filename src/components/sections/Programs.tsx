import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, Bot, Globe } from "lucide-react";

export function Programs() {
  return (
    <section className="py-28 md:py-36 bg-bg-warm" id="programs">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              온도가 하는 것
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[420px] leading-[1.85] break-keep">
              혼자 고민하던 것들, 이제 함께 풀어갈 수 있어요.
            </p>
          </div>
        </ScrollReveal>

        {/* 멘토-멘티 매칭 — dark featured block */}
        <ScrollReveal>
          <div className="bg-bg-dark rounded-[var(--radius-xl)] overflow-hidden mb-5">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12 lg:p-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users size={18} className="text-primary-light" />
                  </div>
                  <span className="text-[0.7rem] text-text-inverse/35 uppercase tracking-[0.15em] font-medium">
                    Core Service
                  </span>
                </div>
                <h3 className="font-heading text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-text-inverse mb-4 leading-tight">
                  멘토-멘티 매칭
                </h3>
                <p className="text-[0.92rem] text-text-inverse/55 leading-[1.95] break-keep max-w-md">
                  진로, 취업, 감정, 관계 등 주제별 멘토를 연결합니다.
                  <br className="hidden md:block" />
                  1:1 대화로 내 상황에 맞는 조언을 받을 수 있습니다.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {["1:1 맞춤 매칭", "주제별 전문 멘토", "비밀 보장"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[0.74rem] text-primary-light/80 px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/15"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="md:col-span-2 relative bg-gradient-to-br from-primary/[0.08] to-transparent flex items-center justify-center min-h-[180px] md:min-h-0">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-primary/[0.08]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-primary/[0.05]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full border border-primary/[0.03]" />
                </div>
                <span className="font-caption text-[5rem] md:text-[7rem] font-light text-primary/[0.08] select-none leading-none relative">
                  1:1
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 하단 — 비대칭 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <ScrollReveal delay={80} className="md:col-span-7">
            <div className="h-full p-7 md:p-9 rounded-[var(--radius-lg)] bg-card border border-border-lighter shadow-xs relative overflow-hidden">
              <div className="absolute top-5 right-5">
                <span className="text-[0.68rem] font-medium text-text-muted bg-bg-warm px-2.5 py-1 rounded-full border border-border-lighter">
                  준비중
                </span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-bg-warm/50 pointer-events-none" />
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-bg-warm flex items-center justify-center mb-6">
                  <Bot size={18} className="text-text-light" />
                </div>
                <h3 className="font-heading text-[1.1rem] font-bold text-text mb-2.5">
                  멘토링 AI
                </h3>
                <p className="text-[0.88rem] text-text-secondary leading-[1.85] break-keep max-w-sm">
                  사람 멘토와의 연결 전후, AI가 먼저 고민을 정리하고 방향을
                  제안합니다. 현재 운영 준비중입니다.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} className="md:col-span-5">
            <div className="h-full p-7 md:p-9 rounded-[var(--radius-lg)] bg-primary/[0.04] border border-primary/10 relative overflow-hidden">
              <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-primary/[0.04] pointer-events-none" />
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary/[0.08] flex items-center justify-center mb-6">
                  <Globe size={18} className="text-primary" />
                </div>
                <h3 className="font-heading text-[1.1rem] font-bold text-text mb-2.5">
                  커뮤니티
                </h3>
                <p className="text-[0.88rem] text-text-secondary leading-[1.85] break-keep">
                  비슷한 고민을 가진 20대들이 모입니다. 혼자 버티지 않아도 되는
                  공간입니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
