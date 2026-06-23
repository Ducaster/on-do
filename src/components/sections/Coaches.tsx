import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { coachPrinciples } from "@/data/coaches";

export function Coaches() {
  return (
    <section className="bg-bg-cream py-24 md:py-32" id="mentors">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ScrollReveal>
            <div>
              <p className="mb-5 text-sm font-extrabold text-primary">
                코치 매칭
              </p>
              <h2 className="max-w-[620px] text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
                나랑 잘 맞는 코치를 찾는 일
              </h2>
              <p className="mt-6 max-w-[440px] text-base font-medium leading-[1.85] text-text-secondary text-pretty">
                지금 내 주제를 안전하게 들어주고, 말이 편하게 통하는 코치로
                연결해드려요. 어떻게 맞추는지 그 기준을 먼저 보여드릴게요.
              </p>
              <a
                href="/coaches"
                className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-sm border border-border-light bg-bg-cream px-5 text-sm font-extrabold text-text transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary active:translate-y-0"
              >
                매칭 기준 보기
                <ArrowRight size={17} />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid gap-3">
            {coachPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal key={principle.id} delay={index * 100}>
                  <article className="grid gap-5 border-t border-border-light py-7 first:border-t-0 md:grid-cols-[56px_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary-soft text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-primary">
                        {principle.label}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-text">
                        {principle.title}
                      </h3>
                      <p className="mt-3 text-base font-medium leading-[1.8] text-text-secondary text-pretty">
                        {principle.body}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
