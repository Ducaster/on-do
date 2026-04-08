import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { num: "01", title: "문의하기", desc: "홈페이지나 카톡으로 편하게 연락해주세요" },
  { num: "02", title: "사전 대화", desc: "코치와 짧은 통화로 고민과 기대를 나눠요" },
  {
    num: "03",
    title: "프로그램 매칭",
    desc: "나에게 맞는 프로그램과 코치를 매칭해드려요",
  },
  {
    num: "04",
    title: "정기 코칭",
    desc: "주 1회 코칭으로 나만의 온도를 찾아가요",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-bg-cream" id="process">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-text mb-3">
              이렇게 시작해요
            </h2>
            <p className="text-[0.88rem] text-text-muted">처음이어도 괜찮아요</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative bg-card rounded-[var(--radius-md)] p-6 pt-8 border border-border-lighter text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/8 mb-5">
                  <span className="text-[0.82rem] font-bold text-primary tracking-wide">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[0.92rem] font-semibold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.7] break-keep">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-border-light text-[0.7rem]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
