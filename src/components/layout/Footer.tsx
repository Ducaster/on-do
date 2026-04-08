import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Logo size={20} />
              <span className="font-heading text-[0.9rem] font-bold text-text-inverse/80">
                온도
              </span>
            </div>
            <p className="text-[0.78rem] leading-[1.75] text-text-inverse/45 max-w-[260px]">
              따뜻할 溫과 실천할 DO.
              <br />
              20대의 지금, 나다운 온도를 찾아가는 코칭센터.
            </p>
          </div>

          <div className="flex gap-16 max-[480px]:flex-col max-[480px]:gap-8">
            <div>
              <div className="text-[0.68rem] font-medium text-text-inverse/40 mb-3 tracking-[0.08em] uppercase">
                연락처
              </div>
              <ul className="list-none flex flex-col gap-2">
                <li className="text-[0.78rem] text-text-inverse/55">
                  {CONTACT_INFO.phone}
                </li>
                <li className="text-[0.78rem] text-text-inverse/55">
                  {CONTACT_INFO.kakao}
                </li>
                <li className="text-[0.78rem] text-text-inverse/55">
                  {CONTACT_INFO.email}
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[0.68rem] font-medium text-text-inverse/40 mb-3 tracking-[0.08em] uppercase">
                바로가기
              </div>
              <ul className="list-none flex flex-col gap-2">
                {(
                  [
                    ["소개", "#about"],
                    ["프로그램", "#programs"],
                    ["코치", "#coaches"],
                    ["FAQ", "#faq"],
                  ] as const
                ).map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[0.78rem] text-text-inverse/55 hover:text-text-inverse/80 transition-opacity"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-text-inverse/10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3">
          <div className="text-[0.68rem] text-text-inverse/35 leading-[1.8]">
            온도 코칭센터 | {CONTACT_INFO.address}
            <br />
            <a
              href="/privacy"
              target="_blank"
              className="underline underline-offset-2 text-text-inverse/50 hover:text-text-inverse/70"
            >
              개인정보처리방침
            </a>
          </div>
          <div className="text-[0.68rem] text-text-inverse/30">
            &copy; 2026 ON-DO
          </div>
        </div>
      </Container>
    </footer>
  );
}
