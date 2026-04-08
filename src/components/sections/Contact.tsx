"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CONTACT_INFO } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  const inputClass =
    "w-full px-4 py-3 bg-card border border-border-lighter rounded-[var(--radius-sm)] text-[0.88rem] text-text placeholder:text-text-light focus:outline-none focus:border-primary transition-colors";

  return (
    <section
      className="py-28 md:py-36 bg-bg relative grain overflow-hidden"
      id="contact"
    >
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-text mb-4">
              코칭이 궁금하신가요?
            </h2>
            <p className="text-[0.92rem] text-text-secondary leading-[1.85] mb-12">
              부담 없이 편하게 연락주세요.
              <br />
              궁금한 점 무엇이든 답해드릴게요.
            </p>

            {submitted ? (
              <div className="py-12">
                <p className="font-heading text-xl font-bold text-text mb-3">
                  감사합니다!
                </p>
                <p className="text-[0.92rem] text-text-secondary">
                  빠른 시일 내에 연락드릴게요.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.78rem] font-medium text-text-muted mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="이름"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-medium text-text-muted mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[0.78rem] font-medium text-text-muted mb-2">
                    하고 싶은 말{" "}
                    <span className="text-text-light font-normal">(선택)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="궁금한 점이나 관심있는 프로그램을 자유롭게 적어주세요"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="mb-6">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-primary"
                    />
                    <span className="text-[0.8rem] text-text-muted">
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener"
                        className="text-primary underline underline-offset-2"
                      >
                        개인정보처리방침
                      </a>
                      에 동의합니다
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white rounded-[var(--radius-sm)] text-[0.88rem] font-medium transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "보내는 중..." : "코칭 문의하기"}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-xl mx-auto mt-16 pt-10 border-t border-border-lighter">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-[0.7rem] text-text-light block mb-1">
                  전화
                </span>
                <span className="text-[0.82rem] text-text-secondary">
                  {CONTACT_INFO.phone}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] text-text-light block mb-1">
                  카카오톡
                </span>
                <span className="text-[0.82rem] text-text-secondary">
                  {CONTACT_INFO.kakao}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] text-text-light block mb-1">
                  이메일
                </span>
                <span className="text-[0.82rem] text-text-secondary">
                  {CONTACT_INFO.email}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] text-text-light block mb-1">
                  운영시간
                </span>
                <span className="text-[0.82rem] text-text-secondary">
                  평일 10–20시
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
