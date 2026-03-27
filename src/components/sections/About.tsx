import Image from "next/image";
import { Ear, Compass, Footprints } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionOrnament } from "@/components/ui/SectionOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const values = [
  {
    icon: Ear,
    title: "판단 없는 대화",
    desc: "뭘 해야 한다는 잔소리 대신, 진짜 내 이야기를 들어줘요",
  },
  {
    icon: Compass,
    title: "나만의 방향 찾기",
    desc: "남들의 정답 말고, 나에게 맞는 길을 함께 탐색해요",
  },
  {
    icon: Footprints,
    title: "작은 실천부터",
    desc: "코칭에서 나눈 이야기를 일상 속 변화로 이어가요",
  },
];

export function About() {
  return (
    <section className="py-[120px] bg-bg relative" id="about">
      <Container>
        <SectionOrnament />
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-20 items-center max-[920px]:grid-cols-1 max-[920px]:gap-12">
          <ScrollReveal className="relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-[calc(100%+4px)] h-[calc(100%+4px)] border border-border-light rounded-[calc(var(--radius-xl)+4px)] z-1 pointer-events-none" />
              <div className="rounded-xl overflow-hidden shadow-lg relative z-2">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=450&q=85"
                  alt="코칭 대화 장면"
                  width={600}
                  height={450}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 z-3 bg-card rounded-lg p-5 px-7 shadow-lg text-center border border-border-light">
                <div className="font-heading text-[2.2rem] font-bold text-primary leading-none">
                  溫
                </div>
                <div className="font-caption text-[0.85rem] text-text-light my-0.5 italic">
                  +
                </div>
                <div className="font-caption text-[1.2rem] font-medium text-primary-dark tracking-[0.18em] italic">
                  DO
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="font-caption text-[0.82rem] font-medium tracking-[0.22em] italic text-primary mb-3.5 block uppercase">
              About ON-DO
            </span>
            <h2 className="text-[clamp(1.5rem,2.8vw,1.9rem)] mb-6">
              20대의 지금,
              <br />
              나를 알아가는 시간
            </h2>
            <p className="text-base text-text-secondary leading-8 mb-4 break-keep">
              <strong>온도(ON-DO)</strong>는{" "}
              <em>따뜻할 溫(온)</em>과 <em>실천할 DO(두)</em>의 의미를
              담았습니다. 취업, 관계, 정체성 — 쏟아지는 질문들 속에서 나만의 답을
              찾아가는 20대 청년을 위한 코칭 공간이에요.
            </p>
            <p className="text-[0.92rem] text-text-muted leading-[1.9] mb-10 break-keep">
              여기선 정답을 알려주지 않아요. 대신 코치와 함께 대화하며 내가 진짜
              원하는 게 뭔지, 어디로 가고 싶은지를 탐색합니다. 판단 없이 이야기를
              나누고, 작은 실천부터 시작해봐요.
            </p>
            <div className="flex flex-col gap-3">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 100}>
                  <div className="flex items-start gap-4 p-5 bg-bg-cream rounded-lg border border-transparent transition-all duration-300 hover:bg-card hover:border-border-light hover:shadow-sm">
                    <div className="shrink-0 w-10 h-10 rounded-[10px] bg-primary-pale flex items-center justify-center text-primary">
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-body text-[0.88rem] font-semibold mb-0.5 tracking-[-0.01em]">
                        {title}
                      </h4>
                      <p className="text-[0.82rem] text-text-muted leading-[1.6]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
