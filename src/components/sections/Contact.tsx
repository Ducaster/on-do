"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  const inputClass =
    "focus-ring w-full rounded-sm border border-border-light bg-bg-cream/78 px-4 py-3 text-base font-medium text-text placeholder:text-text-light transition duration-200 focus:border-primary";

  return (
    <section
      className="relative overflow-hidden bg-bg-dark py-24 text-text-inverse md:py-32"
      id="contact"
    >
      <div className="absolute inset-x-0 top-1/3 h-48 signal-band opacity-35 blur-3xl" />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <p className="mb-5 text-sm font-extrabold text-primary-light">
              문의하기
            </p>
            <h2 className="max-w-[560px] text-[34px] font-extrabold leading-[1.12] md:text-[44px]">
              무슨 말부터 해야 할지 몰라도 괜찮아요
            </h2>
            <p className="mt-6 max-w-[460px] text-base font-medium leading-[1.85] text-text-inverse/68 text-pretty">
              이름이랑 연락처만 남겨도 돼요. 바로 신청 확정되는 건 아니고,
              먼저 10분쯤 지금 상황이랑 가능한 방식을 확인해요.
            </p>
            <ul className="mt-8 grid max-w-[460px] gap-3 text-sm font-bold leading-[1.7] text-text-inverse/72">
              <li className="rounded-sm bg-white/[0.06] px-4 py-3">
                문의하면 가능한 시간이랑 진행 방식을 확인해요
              </li>
              <li className="rounded-sm bg-white/[0.06] px-4 py-3">
                검사나 코치 매칭은 필요할 때만 제안해요
              </li>
              <li className="rounded-sm bg-white/[0.06] px-4 py-3">
                대화 내용이랑 연락처는 동의 없이 공유하지 않아요
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="glass-panel-dark rounded-lg p-5 md:p-7">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2
                    size={42}
                    className="mx-auto text-primary-light"
                  />
                  <h3 className="mt-6 text-3xl font-extrabold">
                    문의가 접수되었습니다
                  </h3>
                  <p className="mx-auto mt-4 max-w-[360px] text-base font-medium leading-[1.8] text-text-inverse/68">
                    남겨주신 연락처로 가능한 시간과 사전 확인 방식을
                    안내드릴게요.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-extrabold text-text-inverse/78">
                      이름
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="이름"
                        className={inputClass}
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-extrabold text-text-inverse/78">
                      연락처
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="010-0000-0000"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-extrabold text-text-inverse/78">
                    지금 가까운 고민
                    <select className={inputClass} defaultValue="self">
                      <option value="self">자기이해</option>
                      <option value="career">진로와 선택</option>
                      <option value="relationship">관계와 소통</option>
                      <option value="emotion">감정과 회복</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-extrabold text-text-inverse/78">
                    남기고 싶은 말
                    <textarea
                      rows={4}
                      placeholder="예: 요즘 관계 때문에 계속 신경이 쓰여요"
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                  <label className="flex items-start gap-3 rounded-sm bg-white/[0.06] p-4 text-sm font-medium leading-[1.6] text-text-inverse/64">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-primary"
                    />
                    <span>
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener"
                        className="font-extrabold text-primary-light underline underline-offset-4"
                      >
                        개인정보처리방침
                      </a>
                      에 동의합니다
                    </span>
                  </label>
                  <p className="rounded-sm bg-white/[0.06] px-4 py-3 text-sm font-bold leading-[1.65] text-text-inverse/68">
                    문의가 곧 코칭 신청은 아니에요. 사전 확인 뒤에 진행할지
                    편하게 정하시면 돼요.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "보내는 중이에요" : "10분 사전 확인 요청하기"}
                    {!loading && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
