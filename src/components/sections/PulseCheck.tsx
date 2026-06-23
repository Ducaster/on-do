"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { moodSignals } from "@/data/home";

export function PulseCheck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSignal = moodSignals[activeIndex] ?? moodSignals[0];
  const ActiveIcon = activeSignal.icon;

  return (
    <section
      id="pulse-check"
      className="relative overflow-hidden bg-bg py-24 md:py-32"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ScrollReveal>
            <p className="mb-5 text-sm font-extrabold text-primary">
              지금 내 마음 온도는 몇 도쯤일까요
            </p>
            <h2 className="max-w-[540px] text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
              요즘 내 얘기 같은 순간, 하나만 골라보세요
            </h2>
            <p className="mt-6 max-w-[460px] text-base font-medium leading-[1.8] text-text-secondary text-pretty">
              처음부터 고민을 완벽하게 정리 안 해도 돼요. 요즘 자주 도는 순간을
              하나 고르면, 어떤 대화로 시작할지 바로 보여드릴게요.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="glass-panel rounded-lg p-3 md:p-4">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-5 auto-rows-fr">
                {moodSignals.map((signal, index) => {
                  const Icon = signal.icon;
                  const selected = activeIndex === index;
                  return (
                    <button
                      key={signal.id}
                      type="button"
                      className={`focus-ring min-h-24 rounded-sm p-3 text-left transition duration-300 active:scale-[0.98] ${
                        selected
                          ? "bg-text text-text-inverse"
                          : "bg-bg-cream/58 text-text hover:bg-bg-cream"
                      }`}
                      aria-pressed={selected}
                      onClick={() => setActiveIndex(index)}
                    >
                      <Icon
                        size={19}
                        className={selected ? "text-coral" : "text-primary"}
                      />
                      <span className="mt-4 block text-sm font-extrabold">
                        {signal.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 grid min-h-[470px] gap-5 rounded-sm bg-bg-cream/76 p-5 md:min-h-[320px] md:grid-cols-[auto_1fr_auto] md:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary-soft text-primary">
                  <ActiveIcon size={24} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-primary">
                    {activeSignal.cue}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-text">
                    {activeSignal.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-[1.75] text-text-secondary">
                    {activeSignal.description}
                  </p>
                  <p className="mt-4 rounded-sm bg-bg px-3 py-2 text-sm font-bold leading-[1.6] text-text">
                    첫 시작: {activeSignal.firstStep}
                  </p>
                </div>
                <a
                  href="/start"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
                >
                  더 좁혀보기
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
