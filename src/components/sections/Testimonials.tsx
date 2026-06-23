import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featured = testimonials[0] ?? testimonials[1];
  const rest = testimonials.slice(1, 6);

  return (
    <section className="bg-bg py-24 md:py-32" id="stories">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="glass-panel rounded-lg p-7 md:p-9">
              <Quote size={28} className="text-primary" />
              <p className="mt-8 text-2xl font-extrabold leading-[1.45] text-text md:text-3xl">
                {featured.quote}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-border-light pt-5">
                <div>
                  <p className="text-base font-extrabold text-text">
                    {featured.name}
                  </p>
                  <p className="mt-1 text-sm font-bold text-text-muted">
                    {featured.detail}
                  </p>
                </div>
                <span className="rounded-sm bg-primary-soft px-3 py-1 text-xs font-extrabold text-primary">
                  동의 후 익명 게재
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <p className="mb-5 text-sm font-extrabold text-primary">
                실제 코칭 후기
              </p>
              <h2 className="max-w-[560px] text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
                온도를 만난 20대들의 이야기
              </h2>
              <div className="mt-8 grid gap-3">
                {rest.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-sm border border-border-lighter bg-bg-cream p-5"
                  >
                    <p className="text-sm font-medium leading-[1.75] text-text-secondary text-pretty">
                      {item.quote}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-extrabold text-text-muted">
                      <span>{item.name}</span>
                      <span className="h-1 w-1 rounded-sm bg-border" />
                      <span>{item.detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
