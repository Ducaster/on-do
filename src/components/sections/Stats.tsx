"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;

    const duration = 1800;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);

      setValues(stats.map((s) => Math.round(eased * s.target)));

      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [triggered]);

  return (
    <section ref={ref} className="bg-bg-dark text-white py-13 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" />
      <Container>
        <div className="grid grid-cols-4 text-center max-[600px]:grid-cols-2 max-[600px]:gap-y-7">
          {stats.map((stat, i) => (
            <div key={stat.label} className="px-5 relative">
              {i < stats.length - 1 && (
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/8 ${i === 1 ? "max-[600px]:hidden" : ""}`} />
              )}
              <div className="font-body text-[clamp(2.2rem,4.5vw,2.8rem)] font-bold leading-none mb-2 tabular-nums tracking-[-0.02em]">
                {values[i]}
                {stat.suffix}
              </div>
              <div className="text-[0.75rem] opacity-40 font-normal tracking-[0.06em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
