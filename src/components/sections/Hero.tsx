import Image from "next/image";
import { MessageCircle, LayoutGrid, ShieldCheck, Lock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section
      className="min-h-dvh flex items-center relative overflow-hidden bg-bg-cream grain"
      id="hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_45%,rgba(156,80,48,0.03),transparent),radial-gradient(ellipse_50%_70%_at_15%_75%,rgba(200,160,120,0.04),transparent)]" />
      <div className="relative z-2 py-[120px_80px] w-full">
        <Container>
          <div className="grid grid-cols-[1fr_0.95fr] gap-[72px] items-center max-[920px]:grid-cols-1 max-[920px]:gap-12 max-[920px]:text-center">
            <ScrollReveal>
              <div className="font-caption text-[0.88rem] font-normal tracking-[0.2em] text-primary mb-7 italic flex items-center gap-3.5 max-[920px]:justify-center">
                <span className="w-9 h-px bg-gradient-to-r from-primary to-transparent block" />
                Coaching Center for Young Adults
              </div>
              <h1 className="text-[clamp(2.2rem,4.2vw,3rem)] font-bold mb-7 leading-[1.38] tracking-[-0.03em]">
                나다운 삶의
                <br />
                <em className="not-italic text-primary relative inline-block">
                  온도
                  <span className="absolute bottom-1 -left-0.5 -right-0.5 h-2.5 bg-primary/10 rounded-sm -z-1" />
                </em>
                를
                <br />
                찾아가는 시간
              </h1>
              <p className="text-base text-text-secondary leading-8 mb-11 max-w-[410px] break-keep max-[920px]:mx-auto">
                진로, 관계, 나 자신에 대한 고민을 혼자 안고 있지 않아도 돼요.
                20대의 지금, 나를 이해하고 한 발짝 나아가는 코칭을
                온도(ON&#8209;DO)에서 시작해보세요.
              </p>
              <div className="flex gap-3.5 flex-wrap max-[920px]:justify-center">
                <Button href="#contact">
                  <MessageCircle className="w-4 h-4" /> 코칭 시작하기
                </Button>
                <Button variant="outline" href="#programs">
                  <LayoutGrid className="w-4 h-4" /> 프로그램 보기
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-13 pt-7 border-t border-border-light max-[920px]:justify-center max-[920px]:flex-wrap">
                {[
                  { icon: ShieldCheck, label: "전문 코치진" },
                  { icon: Lock, label: "비밀 보장" },
                  { icon: Sparkles, label: "20대 맞춤 코칭" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="text-[0.76rem] text-text-muted flex items-center gap-1.5 px-3 py-1.5 bg-primary-pale rounded-full"
                  >
                    <Icon className="w-[13px] h-[13px] text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="relative max-[920px]:mx-auto">
              <div className="absolute -inset-3.5 border border-border rounded-[calc(var(--radius-xl)+6px)] pointer-events-none -z-1 opacity-50 max-[920px]:hidden" />
              <div className="absolute w-2 h-2 rounded-full bg-accent z-3 -top-1 left-8 max-[920px]:hidden" />
              <div className="absolute w-2 h-2 rounded-full bg-accent z-3 bottom-6 -right-1 max-[920px]:hidden" />
              <div className="rounded-xl overflow-hidden shadow-xl relative aspect-[3/4] max-h-[540px] max-[920px]:max-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&h=1060&q=85"
                  alt="온도 코칭센터"
                  fill
                  className="object-cover transition-transform duration-[8s] hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark/35 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 z-2 p-8">
                  <p className="font-heading text-[0.95rem] text-white/92 leading-[1.75] tracking-[0.01em]">
                    &ldquo;지금의 고민이 앞으로의 나를
                    <br />
                    만들어가는 가장 좋은 재료가 돼요&rdquo;
                  </p>
                  <span className="font-caption text-[0.78rem] text-white/50 italic tracking-[0.08em] block mt-2">
                    — ON-DO Coaching Center
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
