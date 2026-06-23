import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { journeySteps } from "@/data/home";

export function Process() {
  return (
    <section className="bg-bg py-24 md:py-32" id="process">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <p className="mb-5 text-sm font-extrabold text-primary">
                시작 흐름
              </p>
              <h2 className="text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
                문의 후에 바로 이렇게 진행돼요
              </h2>
              <p className="mt-6 text-base font-medium leading-[1.85] text-text-secondary text-pretty">
                막연한 신청처럼 느껴지지 않게, 첫 대화 앞뒤로 뭘 확인하는지 미리
                보여드릴게요.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-border-light md:block" />
            {journeySteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 90}>
                <article className="relative grid gap-5 border-t border-border-light py-8 first:border-t-0 md:grid-cols-[72px_1fr] md:pl-0">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-sm bg-text text-sm font-extrabold text-text-inverse md:mt-1">
                    {step.step}
                  </div>
                  <div className="max-w-[660px]">
                    <h3 className="text-2xl font-extrabold text-text">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base font-medium leading-[1.8] text-text-secondary text-pretty">
                      {step.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
