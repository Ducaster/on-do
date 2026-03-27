import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionOrnament } from "@/components/ui/SectionOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { tools } from "@/data/tools";

export function Tools() {
  return (
    <section className="py-[120px] bg-bg-warm" id="tools">
      <Container>
        <SectionOrnament />
        <SectionHeader
          eyebrow="Assessment Tools"
          title="코칭에 활용하는 도구"
          description="나를 더 잘 이해하기 위한 검증된 도구들이에요"
          center
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.id} delay={i * 100} className="h-full">
              <div className="flex items-start gap-[18px] p-5 bg-card rounded-lg border border-border-light transition-all duration-300 hover:border-border hover:shadow-sm hover:translate-x-1 h-full">
                <div className="shrink-0 w-9 h-9 rounded-[10px] bg-primary-pale flex items-center justify-center font-body font-bold text-[0.82rem] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {tool.number}
                </div>
                <div>
                  <div className="font-semibold text-[0.92rem] mb-1.5 tracking-[-0.01em]">
                    {tool.name}
                  </div>
                  <p className="text-[0.82rem] text-text-secondary leading-[1.75] break-keep">
                    {tool.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
