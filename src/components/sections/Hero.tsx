import { ArrowRight, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TemperatureScene } from "@/components/sections/TemperatureScene";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-bg-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,90,61,0.20),transparent_30%),radial-gradient(circle_at_74%_18%,rgba(31,211,180,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(47,91,234,0.14),transparent_34%),linear-gradient(135deg,var(--color-bg-cream),var(--color-bg)_46%,var(--color-bg-warm))]" />
      <div className="absolute inset-x-0 top-[18%] h-44 signal-band blur-3xl animate-[signalDrift_16s_linear_infinite]" />
      <div className="pointer-events-none absolute bottom-0 -right-[30%] h-[54%] w-[96%] opacity-45 md:inset-y-0 md:right-0 md:h-auto md:w-[58%] md:opacity-95">
        <TemperatureScene />
      </div>

      <Container className="relative z-10 flex min-h-[100dvh] items-center pb-16 pt-28">
        <div className="w-full max-w-[680px]">
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-border-light bg-bg-cream/60 px-3 py-2 text-sm font-semibold text-text-secondary backdrop-blur">
            <Gauge size={16} className="text-primary" />
            20대를 위한 대화와 검사 코칭
          </div>

          <h1 className="text-[44px] font-extrabold leading-[1.06] text-text text-pretty md:text-[64px] md:leading-[1.02] lg:text-[72px]">
            <span className="block md:inline">요즘 내가 왜</span>{" "}
            <span className="block md:inline">이러는지,</span>{" "}
            <span className="block md:inline">혼자 넘기지</span>{" "}
            <span className="block md:inline">않게</span>
          </h1>

          <p className="mt-8 max-w-[560px] text-lg font-medium leading-[1.8] text-text-secondary text-pretty">
            남들과 비교하다 지치고, 정작 내가 뭘 원하는지는 모르겠는 요즘.
            온도는 대화와 심리검사로 지금 내 상태부터 같이 정리하는 코칭이에요.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/start"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
            >
              내 상황부터 짚어보기
              <ArrowRight size={18} />
            </a>
            <a
              href="/programs"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-border-light bg-bg-cream/70 px-6 py-3 text-base font-bold text-text transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary active:translate-y-0"
            >
              프로그램 먼저 보기
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2 text-sm font-semibold text-text-secondary sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            {["비밀유지", "검사는 점수 아닌 단서로", "지금 주제에 맞춘 코치"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
