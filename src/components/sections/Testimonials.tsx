"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let pos = 0;
    let paused = false;

    function tick() {
      if (!paused) {
        pos += 0.8;
        const half = el!.scrollWidth / 2;
        if (half > 0 && pos >= half) pos = 0;
        el!.style.transform = `translateX(-${pos}px)`;
      }
      animationId = requestAnimationFrame(tick);
    }

    animationId = requestAnimationFrame(tick);

    const handleEnter = () => { paused = true; };
    const handleLeave = () => { paused = false; };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-28 md:py-36 bg-bg overflow-hidden" id="testimonials">
      <Container>
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text mb-4">
              코칭 후기
            </h2>
            <p className="text-[0.92rem] text-text-secondary max-w-[400px] mx-auto leading-[1.85]">
              온도를 경험한 분들의 이야기예요
            </p>
          </div>
        </ScrollReveal>
      </Container>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-8 w-max will-change-transform">
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="shrink-0 w-[340px] h-[260px] bg-card rounded-[var(--radius-md)] p-7 border border-border-lighter flex flex-col"
            >
              <span className="font-caption text-[2rem] text-primary/12 italic block leading-none select-none">
                &ldquo;
              </span>
              <p className="text-[0.88rem] text-text leading-[1.9] mt-2 flex-1 break-keep line-clamp-4">
                {t.quote}
              </p>
              <div className="text-[0.82rem] text-text-muted pt-4 border-t border-border-lighter mt-auto">
                <span className="font-medium text-text">{t.name}</span>
                <span className="mx-1.5 text-border">·</span>
                <span>{t.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent z-10" />
      </div>

      <Container>
        <p className="mt-10 text-[0.72rem] text-text-light italic text-center">
          * 동의를 받아 게재하였으며, 개인 식별 정보는 비공개 처리되었습니다.
        </p>
      </Container>
    </section>
  );
}
