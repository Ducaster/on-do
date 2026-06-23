"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-bg-warm py-24 md:py-32" id="faq">
      <Container>
        <ScrollReveal>
          <div className="mb-12 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold text-primary">
                자주 묻는 질문
              </p>
              <h2 className="text-[34px] font-extrabold leading-[1.12] text-text md:text-[44px]">
                시작 전에 가장 많이 묻는 것들
              </h2>
            </div>
            <p className="max-w-[520px] text-base font-medium leading-[1.8] text-text-secondary text-pretty md:justify-self-end">
              코칭이 처음인 분도 흐름을 예상할 수 있도록, 자주 나오는 질문을
              짧게 정리했습니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-panel rounded-lg p-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-border-lighter last:border-none"
                >
                  <button
                    className={`focus-ring flex w-full cursor-pointer items-center justify-between rounded-sm border-none bg-transparent px-4 py-5 text-left transition-colors ${
                      isOpen ? "text-primary" : "text-text"
                    }`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-extrabold">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 ml-4 transition-transform duration-300 text-text-light ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-[400ms]"
                    style={{ maxHeight: isOpen ? "200px" : "0" }}
                  >
                    <p className="px-4 pb-5 text-base font-medium leading-[1.8] text-text-secondary text-pretty">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
