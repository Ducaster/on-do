"use client";

import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionOrnament } from "@/components/ui/SectionOrnament";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, OPERATING_HOURS } from "@/lib/constants";

const contactMethods = [
  { icon: Phone, label: "전화 문의", value: CONTACT_INFO.phone },
  { icon: MessageCircle, label: "카카오톡", value: CONTACT_INFO.kakao },
  { icon: Mail, label: "이메일", value: CONTACT_INFO.email },
  { icon: MapPin, label: "센터 위치", value: CONTACT_INFO.address },
];

const programOptions = [
  { value: "1", label: "마음 탕후루 (인간관계)" },
  { value: "2", label: "너와나의 주파수 (소통)" },
  { value: "3", label: "인간관계 먼지떨이 (자존감)" },
  { value: "4", label: "둥글둥글 행성 (심리코칭)" },
  { value: "5", label: "아리스토텔레스의 도토리 (철학코칭)" },
];

const inputBase =
  "w-full py-3 px-4 border-[1.5px] border-border-light rounded-sm font-body text-[0.88rem] text-text bg-bg-cream min-h-[46px] transition-all duration-250 focus:outline-none focus:border-primary focus:bg-card focus:shadow-[0_0_0_4px_rgba(156,80,48,0.05)] placeholder:text-text-light placeholder:text-[0.85rem]";

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

  return (
    <section className="py-[120px] bg-bg-warm" id="contact">
      <Container>
        <SectionOrnament />
        <div className="grid grid-cols-[1fr_1.1fr] gap-14 items-stretch max-[920px]:grid-cols-1">
          <ScrollReveal className="h-full flex flex-col">
            <span className="font-caption text-[0.82rem] font-medium tracking-[0.22em] italic text-primary mb-3.5 block uppercase">
              Contact Us
            </span>
            <h2 className="text-[1.5rem] mb-4">코칭 문의</h2>
            <p className="text-[0.92rem] text-text-secondary leading-[1.9] mb-9 break-keep">
              궁금한 점이 있거나 코칭을 시작하고 싶으시면 편하게 연락주세요. 빠르게
              답변드릴게요.
            </p>
            <div className="flex flex-col gap-3">
              {contactMethods.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border-light transition-all duration-300 hover:border-border hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-primary-pale flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-[17px] h-[17px]" />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text-light font-medium tracking-[0.06em] uppercase">
                      {label}
                    </div>
                    <div className="text-[0.9rem] font-semibold text-text tracking-[0.01em]">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6 p-5 bg-bg-cream rounded-lg border border-border-light">
              <div className="text-[0.7rem] font-semibold mb-2.5 text-text-light uppercase tracking-[0.08em]">
                운영 시간
              </div>
              {OPERATING_HOURS.map((h) => (
                <div
                  key={h.label}
                  className="text-[0.82rem] text-text-secondary flex justify-between py-1.5 tabular-nums"
                >
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </div>
              ))}
              <div className="text-[0.72rem] text-text-light mt-2 italic">
                * 코칭은 사전 예약제로 운영됩니다
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="h-full flex flex-col">
            <div className="bg-card rounded-lg p-10 shadow-md border border-border-light flex-1 flex flex-col">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="font-body text-lg font-bold mb-2">
                    신청이 완료되었어요!
                  </h3>
                  <p className="text-[0.88rem] text-text-secondary">
                    빠른 시일 내에 연락드릴게요.
                  </p>
                </div>
              ) : (
                <>
                  <div className="font-body text-[1.05rem] font-bold mb-2 tracking-[-0.01em]">
                    코칭 신청
                  </div>
                  <div className="text-[0.82rem] text-text-muted mb-7">
                    양식을 작성해주시면 빠르게 연락드릴게요.
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3.5 max-[480px]:grid-cols-1">
                      <div className="mb-[18px]">
                        <label className="block text-[0.78rem] font-semibold mb-[7px] text-text-secondary tracking-[0.01em]">
                          이름 <span className="text-primary ml-0.5">*</span>
                        </label>
                        <input
                          className={inputBase}
                          type="text"
                          placeholder="이름"
                          required
                        />
                      </div>
                      <div className="mb-[18px]">
                        <label className="block text-[0.78rem] font-semibold mb-[7px] text-text-secondary tracking-[0.01em]">
                          연락처{" "}
                          <span className="text-primary ml-0.5">*</span>
                        </label>
                        <input
                          className={inputBase}
                          type="tel"
                          placeholder="010-0000-0000"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-[18px]">
                      <label className="block text-[0.78rem] font-semibold mb-[7px] text-text-secondary tracking-[0.01em]">
                        카카오톡 ID
                      </label>
                      <input
                        className={inputBase}
                        type="text"
                        placeholder="카카오톡 ID (선택)"
                      />
                    </div>
                    <div className="mb-[18px]">
                      <label className="block text-[0.78rem] font-semibold mb-[7px] text-text-secondary tracking-[0.01em]">
                        관심있는 코칭 프로그램{" "}
                        <span className="text-primary ml-0.5">*</span>
                      </label>
                      <select
                        className={`${inputBase} appearance-none cursor-pointer bg-[url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238C7A6A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_16px_center] pr-10`}
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          프로그램을 선택해주세요
                        </option>
                        {programOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-[18px]">
                      <label className="block text-[0.78rem] font-semibold mb-[7px] text-text-secondary tracking-[0.01em]">
                        하고 싶은 말
                      </label>
                      <textarea
                        className={`${inputBase} resize-y`}
                        rows={3}
                        placeholder="지금 고민이나 코칭에서 기대하는 점을 자유롭게 적어주세요"
                      />
                    </div>
                    <div className="mb-[18px]">
                      <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                        <input
                          type="checkbox"
                          required
                          className="w-[18px] h-[18px] accent-primary cursor-pointer shrink-0 mt-0.5"
                        />
                        <span className="text-[0.82rem] text-text-secondary leading-[1.5]">
                          <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener"
                            className="text-primary underline underline-offset-[3px] decoration-primary/30 hover:decoration-primary"
                          >
                            개인정보처리방침
                          </a>
                          에 동의합니다{" "}
                          <span className="text-primary ml-0.5">*</span>
                        </span>
                      </label>
                    </div>
                    <div className="mt-6">
                      <Button
                        type="submit"
                        className="w-full justify-center py-4 text-[0.88rem]"
                        disabled={loading}
                      >
                        <Send className="w-[15px] h-[15px]" />
                        {loading ? "신청 중..." : "코칭 신청하기"}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
