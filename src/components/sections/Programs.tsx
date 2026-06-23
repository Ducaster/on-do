"use client";

import { ArrowRight, Check, Radio } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { serviceModes } from "@/data/home";
import { programs } from "@/data/programs";

export function Programs() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const activeMode = serviceModes[activeModeIndex] ?? serviceModes[0];

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#241d1a] py-24 text-text-inverse md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,90,61,0.14),transparent_42%),radial-gradient(circle_at_88%_100%,rgba(31,211,180,0.10),transparent_46%)]" />
      <div className="absolute inset-x-0 top-20 h-40 signal-band opacity-50 blur-3xl" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="mb-5 text-sm font-extrabold text-primary-light">
              고민별 코칭 프로그램
            </p>
            <h2 className="max-w-[520px] text-[34px] font-extrabold leading-[1.12] md:text-[44px]">
              지금 내 고민에 맞는 걸로 시작하세요
            </h2>
            <p className="mt-6 max-w-[460px] text-base font-medium leading-[1.85] text-text-inverse/68 text-pretty">
              프로그램 이름은 분류표가 아니라 대화를 여는 문이에요. 사전 확인
              때 필요한 검사랑 코칭 주제, 진행 방식을 같이 좁혀가요.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="glass-panel-dark rounded-lg p-4">
              <div className="grid gap-2 md:grid-cols-3">
                {serviceModes.map((mode, index) => {
                  const selected = activeModeIndex === index;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      className={`focus-ring min-h-28 rounded-sm p-4 text-left transition duration-300 active:scale-[0.98] ${
                        selected
                          ? "bg-text-inverse text-bg-dark"
                          : "bg-white/5 text-text-inverse/72 hover:bg-white/10"
                      }`}
                      aria-pressed={selected}
                      onClick={() => setActiveModeIndex(index)}
                    >
                      <span className="text-xs font-extrabold opacity-70">
                        {mode.eyebrow}
                      </span>
                      <span className="mt-4 block text-xl font-extrabold">
                        {mode.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 rounded-sm bg-white/[0.07] p-6">
                <Radio size={22} className="text-primary-light" />
                <h3 className="mt-5 text-3xl font-extrabold">
                  {activeMode.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-base font-medium leading-[1.8] text-text-inverse/70">
                  {activeMode.body}
                </p>
                <ul className="mt-6 grid gap-3 md:grid-cols-3">
                  {activeMode.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm font-bold text-text-inverse/82"
                    >
                      <Check size={16} className="text-mint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-5">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id} delay={index * 70} className="h-full">
              <a
                href="/programs"
                className="focus-ring group flex h-full min-h-52 flex-col justify-between rounded-sm border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary-light/60 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs font-extrabold text-primary-light">
                    {program.theme}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold leading-[1.25]">
                    {program.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-[1.65] text-text-inverse/62">
                    {program.recommendedFor}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-bold text-text-inverse/54">
                    {program.frequency}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-primary-light transition duration-300 group-hover:translate-x-1"
                  />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
