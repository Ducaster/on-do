import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { programs } from "@/data/programs";

export function Programs() {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="py-28 md:py-36 bg-bg-warm" id="programs">
      <Container>
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              코칭 프로그램
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[420px] leading-[1.85] break-keep">
              지금 나에게 필요한 주제를 골라보세요. 각 프로그램은 1:1 맞춤으로
              진행됩니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-card rounded-[var(--radius-lg)] p-8 md:p-10 mb-5 border border-border-lighter shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <div className="flex-1">
                <div
                  className="w-3 h-3 rounded-full mb-5"
                  style={{ background: featured.color }}
                />
                <h3 className="font-heading text-[1.3rem] font-bold text-text mb-2">
                  {featured.name}
                </h3>
                <span className="text-[0.78rem] text-text-muted tracking-[0.04em] block mb-5">
                  {featured.theme}
                </span>
                <p className="text-[0.92rem] text-text-secondary leading-[1.9] break-keep max-w-lg">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-6 md:mt-2 md:flex-col md:shrink-0">
                <span className="text-[0.76rem] text-text-muted px-3.5 py-1.5 bg-bg-warm rounded-full">
                  {featured.duration}
                </span>
                <span className="text-[0.76rem] text-text-muted px-3.5 py-1.5 bg-bg-warm rounded-full">
                  {featured.frequency}
                </span>
                <span className="text-[0.76rem] text-text-muted px-3.5 py-1.5 bg-bg-warm rounded-full">
                  {featured.participantType}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 80}>
              <div className="bg-card rounded-[var(--radius-md)] p-7 border border-border-lighter shadow-xs h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: program.color }}
                  />
                  <h3 className="font-heading text-[1.02rem] font-bold text-text">
                    {program.name}
                  </h3>
                </div>
                <span className="text-[0.74rem] text-text-muted tracking-[0.04em] block mb-3">
                  {program.theme}
                </span>
                <p className="text-[0.86rem] text-text-secondary leading-[1.8] break-keep flex-1">
                  {program.description}
                </p>
                <div className="flex gap-3 pt-4 mt-4 border-t border-border-lighter text-[0.74rem] text-text-light">
                  <span>{program.duration}</span>
                  <span className="text-border">·</span>
                  <span>{program.frequency}</span>
                  <span className="text-border">·</span>
                  <span>{program.participantType}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
