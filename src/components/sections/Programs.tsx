import {
  Candy,
  Radio,
  Sparkles,
  Globe,
  Trees,
  Clock,
  Calendar,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionOrnament } from "@/components/ui/SectionOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { programs } from "@/data/programs";

const iconMap: Record<string, LucideIcon> = {
  Candy,
  Radio,
  Sparkles,
  Globe,
  Trees,
};

export function Programs() {
  return (
    <section className="py-[120px] bg-bg-cream" id="programs">
      <Container>
        <SectionOrnament />
        <SectionHeader
          eyebrow="Coaching Programs"
          title="코칭 프로그램"
          description="지금 나에게 필요한 주제를 골라보세요"
          center
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {programs.map((program, i) => {
            const IconComponent = iconMap[program.icon];
            const ParticipantIcon =
              program.participantType === "개인" ? User : Users;

            return (
              <ScrollReveal key={program.id} delay={i * 100} className="h-full">
                <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border-light relative transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-border h-full flex flex-col">
                  <div
                    className="h-[3px]"
                    style={{
                      background: `linear-gradient(to right, ${program.color}, ${program.gradientTo})`,
                    }}
                  />
                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-[18px] transition-transform duration-300"
                      style={{
                        background: `color-mix(in srgb, ${program.color} 6%, transparent)`,
                        color: program.color,
                      }}
                    >
                      {IconComponent && <IconComponent className="w-[22px] h-[22px]" />}
                    </div>
                    <div className="font-heading text-[1.05rem] font-bold mb-0.5">
                      {program.name}
                    </div>
                    <div className="text-[0.76rem] text-text-muted mb-3.5 font-normal tracking-[0.04em]">
                      {program.theme}
                    </div>
                    <p className="text-[0.86rem] text-text-secondary leading-[1.75] mb-[18px] break-keep flex-1">
                      {program.description}
                    </p>
                    <div className="flex gap-3 pt-3.5 border-t border-border-lighter">
                      <span className="text-[0.72rem] text-text-light flex items-center gap-1 tabular-nums">
                        <Clock className="w-3 h-3" /> {program.duration}
                      </span>
                      <span className="text-[0.72rem] text-text-light flex items-center gap-1 tabular-nums">
                        <Calendar className="w-3 h-3" /> {program.frequency}
                      </span>
                      <span className="text-[0.72rem] text-text-light flex items-center gap-1 tabular-nums">
                        <ParticipantIcon className="w-3 h-3" />{" "}
                        {program.participantType}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
