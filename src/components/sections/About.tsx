import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const values = [
  {
    num: "01",
    title: "판단 없는 대화",
    desc: "맞고 틀림이 아닌, 당신의 이야기를 있는 그대로 듣습니다.",
  },
  {
    num: "02",
    title: "나만의 방향 찾기",
    desc: "정답이 아닌, 나에게 맞는 답을 함께 찾아갑니다.",
  },
  {
    num: "03",
    title: "작은 실천부터",
    desc: "거창한 변화가 아닌, 오늘 할 수 있는 한 걸음을 함께 내딛습니다.",
  },
];

export function About() {
  return (
    <section className="py-28 md:py-40 bg-bg" id="about">
      <Container narrow>
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-text leading-[1.5] mb-8">
              20대의 지금,
              <br />
              많은 것들이 정해지지 않았습니다.
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-8" />
            <p className="text-[1rem] text-text-secondary leading-[2.1] max-w-[440px] mx-auto break-keep">
              그래서 불안하고, 그래서 가능합니다.
              <br />
              <br />
              온도는 치료하는 곳이 아닙니다.
              <br />
              당신이 어디로 가고 싶은지,
              <br />
              함께 걸으며 찾아가는 곳입니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.num} delay={i * 120}>
              <div className="text-center md:text-left">
                <span className="font-caption text-[2.5rem] font-bold text-primary/10 italic block mb-3 leading-none">
                  {v.num}
                </span>
                <h3 className="font-heading text-[1.05rem] font-bold text-text mb-3">
                  {v.title}
                </h3>
                <p className="text-[0.88rem] text-text-secondary leading-[1.85] break-keep">
                  {v.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
