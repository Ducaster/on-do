"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { moodSignals } from "@/data/home";

type MoodSignalId = (typeof moodSignals)[number]["id"];

export function StartFinder() {
  const [selectedId, setSelectedId] = useState<MoodSignalId>(
    moodSignals[0].id
  );
  const selected =
    moodSignals.find((signal) => signal.id === selectedId) ?? moodSignals[0];
  const SelectedIcon = selected.icon;

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-7 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 text-sm font-extrabold text-primary">
            코칭 방향 찾기
          </p>
          <h1 className="text-[34px] font-extrabold leading-[1.1] text-text md:text-[52px]">
            <span className="block md:inline">지금 제일 자주</span>{" "}
            <span className="block md:inline">반복되는 장면은</span>{" "}
            <span className="block md:inline">무엇인가요?</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base font-medium leading-[1.85] text-text-secondary text-pretty">
            고민 이름을 정확히 몰라도 돼요. 가장 비슷한 장면을 고르면, 사전
            확인 때 어디부터 말하면 좋을지 바로 정리할 수 있어요.
          </p>
          <div className="mt-8 grid gap-3 rounded-sm border border-border-light bg-bg-cream p-5 text-sm font-bold leading-[1.7] text-text-secondary">
            <p>1. 가까운 장면을 골라요.</p>
            <p>2. 필요한 검사나 대화 주제를 확인해요.</p>
            <p>3. 10분 사전 확인 때 이 내용을 그대로 가져가면 돼요.</p>
          </div>
        </div>

        <div className="glass-panel rounded-lg p-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {moodSignals.map((signal) => {
              const Icon = signal.icon;
              const selectedSignal = selectedId === signal.id;
              return (
                <button
                  key={signal.id}
                  type="button"
                  aria-pressed={selectedSignal}
                  className={`focus-ring min-h-24 rounded-sm p-4 text-left transition duration-300 active:scale-[0.98] ${
                    selectedSignal
                      ? "bg-text text-text-inverse"
                      : "bg-bg-cream/70 text-text hover:bg-bg-cream"
                  }`}
                  onClick={() => setSelectedId(signal.id)}
                >
                  <Icon
                    size={19}
                    className={selectedSignal ? "text-coral" : "text-primary"}
                  />
                  <span className="mt-4 block text-base font-extrabold">
                    {signal.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-[1.55] opacity-72">
                    {signal.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-sm bg-bg-cream p-6">
            <SelectedIcon size={28} className="text-primary" />
            <p className="mt-5 text-sm font-extrabold text-primary">
              {selected.cue}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-text">
              이 방향으로 시작해볼 수 있어요
            </h2>
            <p className="mt-4 text-base font-medium leading-[1.8] text-text-secondary">
              {selected.description}
            </p>
            <div className="mt-5 rounded-sm border border-border-light bg-bg px-4 py-3">
              <p className="text-xs font-extrabold text-primary">첫 만남에서</p>
              <p className="mt-2 text-sm font-bold leading-[1.65] text-text">
                {selected.firstStep}
              </p>
            </div>
            <ul className="mt-6 grid gap-3">
              {["10분 사전 확인", "필요한 검사만 선택", "편한 방식과 일정 조율"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-extrabold text-text-secondary"
                  >
                    <CheckCircle2 size={17} className="text-primary" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/#contact"
              className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
            >
              10분 사전 확인 요청하기
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
