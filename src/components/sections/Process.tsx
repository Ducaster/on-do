import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { num: 1, title: "문의하기", desc: "홈페이지나 카톡으로\n편하게 연락해주세요" },
  { num: 2, title: "사전 대화", desc: "코치와 짧은 통화로\n고민과 기대를 나눠요" },
  { num: 3, title: "프로그램 매칭", desc: "나에게 맞는 프로그램과\n코치를 매칭해드려요" },
  { num: 4, title: "정기 코칭", desc: "주 1회 코칭으로\n나만의 온도를 찾아가요" },
];

export function Process() {
  return (
    <section className="py-[120px] bg-bg" id="process">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="코칭 진행 절차"
          description="처음이어도 괜찮아요. 이렇게 시작하면 돼요"
          center
        />
        <ScrollReveal>
          <div className="grid grid-cols-4 relative max-[768px]:grid-cols-1 max-[768px]:gap-9">
            <div className="absolute top-[33px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0 max-[768px]:hidden" />
            {steps.map((step) => (
              <div
                key={step.num}
                className="text-center px-4 relative group"
              >
                <div className="w-[66px] h-[66px] rounded-full bg-card border-[1.5px] border-primary text-primary flex items-center justify-center font-body text-[1.1rem] font-bold mx-auto mb-5 relative z-1 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(156,80,48,0.2)]">
                  {step.num}
                </div>
                <div className="font-body text-[0.92rem] font-semibold mb-2">
                  {step.title}
                </div>
                <div className="text-[0.82rem] text-text-muted leading-[1.65] whitespace-pre-line">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
