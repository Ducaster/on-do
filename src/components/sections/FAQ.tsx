"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-[120px] bg-bg" id="faq">
      <Container>
        <SectionHeader eyebrow="FAQ" title="자주 묻는 질문" center />
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto flex flex-col gap-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-card rounded-lg overflow-hidden border transition-colors duration-250 ${
                    isOpen ? "border-border" : "border-border-light"
                  }`}
                >
                  <button
                    className={`w-full p-5 bg-transparent border-none flex items-center justify-between font-body text-[0.92rem] font-semibold cursor-pointer text-left transition-colors duration-250 tracking-[-0.01em] hover:text-primary ${
                      isOpen ? "text-primary" : "text-text"
                    }`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    {item.question}
                    <ChevronDown
                      className={`w-[17px] h-[17px] shrink-0 ml-4 transition-transform duration-350 ${
                        isOpen
                          ? "rotate-180 text-primary"
                          : "text-text-light"
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-[450ms]"
                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                  >
                    <div className="px-5 pb-5 text-[0.88rem] text-text-secondary leading-[1.9]">
                      {item.answer}
                    </div>
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
