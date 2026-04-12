import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-bg-warm/80" />

      <Container className="relative z-10 text-center py-20">
        <p className="text-[0.82rem] tracking-[0.25em] text-text-muted mb-10 font-body">
          20대를 위한 코칭센터
        </p>

        <h1 className="font-heading text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.15] text-text mb-10 tracking-[-0.02em]">
          지금, 당신의
          <br />
          <span className="text-primary relative inline-block">
            온도
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/20 rounded-full" />
          </span>
          는
          <br />
          몇 도인가요?
        </h1>

        <p className="text-[1.08rem] text-text-secondary max-w-[380px] mx-auto mb-14 leading-[1.9]">
          따뜻할 溫, 실천할 DO.
          <br />
          나다운 삶의 온도를 찾아가는 시간.
        </p>

        <a
          href="#about"
          className="inline-flex items-center px-10 py-4 bg-primary text-white rounded-full text-[0.9rem] font-medium tracking-[0.02em] transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
        >
          더 알아보기
        </a>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.15em] text-text-light/60">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-text-light/40 to-transparent animate-[scrollHint_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
