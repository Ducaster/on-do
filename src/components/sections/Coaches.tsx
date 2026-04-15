import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MENTOR_QUALITIES = [
  {
    num: "01",
    title: "비슷한 길을 먼저 걸어본 사람",
    description:
      "취업, 관계, 감정... 비슷한 고민을 먼저 겪어본 선배가 자신의 경험으로 길을 비춰줍니다.",
  },
  {
    num: "02",
    title: "정답이 아닌 경험을 나눠주는 사람",
    description:
      "정해진 답을 알려주는 게 아니라, 자신의 이야기를 솔직하게 나눠주는 사람입니다.",
  },
  {
    num: "03",
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

        <div>
          {MENTOR_QUALITIES.map((quality, i) => (
            <ScrollReveal key={quality.num} delay={i * 120}>
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr] gap-5 md:gap-10 py-10 border-b border-border-lighter last:border-b-0 group">
                <span className="font-caption text-[2.5rem] md:text-[3.2rem] font-light text-primary/15 leading-none select-none pt-0.5 group-hover:text-primary/25 transition-colors duration-500">
                  {quality.num}
                </span>
                <div className="max-w-lg">
                  <h3 className="font-heading text-[1.12rem] font-bold text-text mb-3 leading-snug">
                    {quality.title}
                  </h3>
                  <p className="text-[0.88rem] text-text-secondary leading-[1.9] break-keep">
                    {quality.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-14 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <p className="text-[0.86rem] text-text-muted shrink-0">
              다루는 주제
            </p>
            <div className="h-px bg-border-lighter flex-1 hidden md:block" />
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {TOPICS.map((topic, i) => (
                <span key={topic} className="flex items-center">
                  <span className="text-[0.82rem] text-text-muted px-2.5 py-1 hover:text-text transition-colors duration-300 cursor-default">
                    {topic}
                  </span>
                  {i < TOPICS.length - 1 && (
                    <span className="text-border-light text-[0.6rem]">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
