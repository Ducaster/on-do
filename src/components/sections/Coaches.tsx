import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Compass, BookOpen, Heart } from "lucide-react";

const MENTOR_QUALITIES = [
  {
    icon: Compass,
    title: "비슷한 길을 먼저 걸어본 사람",
    description:
      "취업, 관계, 감정... 비슷한 고민을 먼저 겪어본 선배가 자신의 경험으로 길을 비춰줍니다.",
  },
  {
    icon: BookOpen,
    title: "정답이 아닌 경험을 나눠주는 사람",
    description:
      "정해진 답을 알려주는 게 아니라, 자신의 이야기를 솔직하게 나눠주는 사람입니다.",
  },
  {
    icon: Heart,
    title: "판단 없이 들어주는 사람",
    description:
      "어떤 고민이든 괜찮아요. 평가 없이, 있는 그대로의 이야기를 들어줍니다.",
  },
];

const TOPICS = [
  "취업",
  "커리어",
  "감정관리",
  "관계",
  "창업",
  "진로",
  "자기이해",
];

export function Coaches() {
  return (
    <section className="py-28 md:py-36 bg-bg" id="mentors">
      <Container>
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              멘토 소개
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[440px] leading-[1.85] break-keep">
              온도의 멘토는 이런 분들입니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {MENTOR_QUALITIES.map((quality, i) => {
            const Icon = quality.icon;
            return (
              <ScrollReveal key={quality.title} delay={i * 100}>
                <div className="flex gap-5 items-start p-6 md:p-8 bg-card rounded-[var(--radius-lg)] border border-border-lighter shadow-xs">
                  <div className="w-11 h-11 rounded-2xl bg-primary/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-[1.05rem] font-bold text-text mb-1.5">
                      {quality.title}
                    </h3>
                    <p className="text-[0.88rem] text-text-secondary leading-[1.85] break-keep">
                      {quality.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={350}>
          <div className="mt-10 p-6 md:p-8 bg-bg-warm rounded-[var(--radius-lg)]">
            <p className="text-[0.88rem] text-text-secondary leading-[1.85] break-keep mb-5">
              멘토는 취업, 커리어, 감정관리, 관계, 창업 등 다양한 주제 영역으로
              구성됩니다.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="text-[0.78rem] px-4 py-1.5 border border-border-lighter rounded-full text-text-muted bg-card"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
