"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-bg-warm" id="faq">
      <Container narrow>
        <ScrollReveal>
          <h2 className="font-heading text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-text text-center mb-12">
            자주 묻는 질문
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-border-lighter last:border-none"
                >
                  <button
                    className={`w-full py-5 flex items-center justify-between text-left cursor-pointer bg-transparent border-none transition-colors ${
                      isOpen ? "text-primary" : "text-text"
                    }`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className="text-[0.92rem] font-medium">
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
                    <p className="pb-5 text-[0.88rem] text-text-secondary leading-[1.9] break-keep">
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
