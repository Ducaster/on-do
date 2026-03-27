import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse/50 pt-15 pb-9 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <Container>
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-12 mb-10 max-[768px]:grid-cols-1 max-[768px]:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <Logo size={22} />
              <span className="font-heading text-[0.95rem] font-bold text-text-inverse/80">
                온도
              </span>
            </div>
            <p className="text-[0.8rem] leading-[1.75] opacity-40">
              따뜻할 溫과 실천할 DO
              <br />
              20대의 지금, 나다운 온도를 찾아가는 코칭센터
            </p>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold text-text-inverse/30 mb-4 tracking-[0.1em] uppercase">
              바로가기
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                ["센터 소개", "#about"],
                ["코치", "#coaches"],
                ["코칭 프로그램", "#programs"],
                ["검사 도구", "#tools"],
                ["자주 묻는 질문", "#faq"],
                ["코칭 문의", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[0.82rem] opacity-40 hover:opacity-85 transition-opacity duration-250 cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold text-text-inverse/30 mb-4 tracking-[0.1em] uppercase">
              연락처
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-[0.82rem] opacity-40">
                전화: {CONTACT_INFO.phone}
              </li>
              <li className="text-[0.82rem] opacity-40">
                카카오톡: {CONTACT_INFO.kakao}
              </li>
              <li className="text-[0.82rem] opacity-40">
                이메일: {CONTACT_INFO.email}
              </li>
              <li className="text-[0.82rem] opacity-40">
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex justify-between items-start flex-wrap gap-4">
          <div className="text-[0.7rem] opacity-[0.28] leading-[1.8] tabular-nums">
            온도 코칭센터 | 대표: OOO | 사업자등록번호: 000-00-00000
            <br />
            {CONTACT_INFO.address}
            <br />
            <a
              href="/privacy"
              target="_blank"
              className="underline underline-offset-2 opacity-80 hover:opacity-100"
            >
              개인정보처리방침
            </a>
          </div>
          <div className="font-caption text-[0.72rem] opacity-[0.22] italic tracking-[0.04em]">
            &copy; 2026 ON-DO Coaching Center
          </div>
        </div>
      </Container>
    </footer>
  );
}
