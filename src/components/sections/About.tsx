import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trustSignals } from "@/data/home";

export function About() {
  return (
    <section id="about" className="bg-bg-cream py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ScrollReveal>
            <div className="sticky top-28">
              <p className="mb-5 text-sm font-extrabold text-primary">
                온도에서 하는 일
              </p>
              <h2 className="max-w-[500px] text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
                고민이 뭔지 몰라도, 같이 정리해드려요
              </h2>
              <p className="mt-6 max-w-[440px] text-base font-medium leading-[1.85] text-text-secondary text-pretty">
                온도는 진단부터 들이밀지 않아요. 지금 실제로 겪는 장면을 먼저
                들어요. 말이 좀 흩어져 있어도 괜찮아요. 필요한 검사는 힌트로
                쓰고, 다음 만남 전까지 해볼 일 하나만 정하고요.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {[
              {
                title: "말이 길어져도 괜찮은 시간",
                body: "핵심부터 딱 말하려고 애쓰지 않아도 돼요. 요즘 있었던 장면을 꺼내면 코치가 흐름을 같이 잡아줘요.",
              },
              {
                title: "검사는 설명을 돕는 도구",
                body: "성격유형·애착·핵심감정 결과를 정답처럼 보지 않아요. 지금 내 관계 방식이랑 선택 기준을 말로 풀어보는 힌트로 써요.",
              },
              {
                title: "끝나고 남는 건 하나면 충분",
                body: "만날 때마다 큰 결심을 만들진 않아요. 오늘 보낼 말, 이번 주에 미룰 일, 다시 해볼 루틴처럼 바로 손댈 수 있는 하나만 남겨요.",
              },
              {
                title: "코치는 나와 결이 맞게",
                body: "지금 주제랑 말하기 편한 속도를 보고 코치를 연결해요. 막상 해보고 잘 안 맞으면 진행 방식을 다시 맞추고요.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <article className="grid gap-5 border-t border-border-light py-8 md:grid-cols-[120px_1fr]">
                  <span className="font-caption text-5xl leading-none text-primary/30">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[620px] text-base font-medium leading-[1.85] text-text-secondary text-pretty">
                      {item.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={360}>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {trustSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <div
                      key={signal.title}
                      className="glass-panel rounded-lg p-5"
                    >
                      <Icon size={20} className="text-primary" />
                      <h3 className="mt-4 text-lg font-extrabold text-text">
                        {signal.title}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-[1.75] text-text-secondary">
                        {signal.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
