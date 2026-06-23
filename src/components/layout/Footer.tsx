import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, PAGE_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark py-12 text-text-inverse">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo size={24} />
              <span className="text-lg font-extrabold">온도</span>
            </div>
            <p className="max-w-[340px] text-sm font-medium leading-[1.8] text-text-inverse/58">
              요즘 내가 왜 이러는지 혼자 넘기지 않도록, 장면에서 시작하는
              대화와 검사 코칭.
            </p>
          </div>

          <nav aria-label="홈 섹션">
            <p className="mb-3 text-xs font-extrabold text-primary-light">
              홈
            </p>
            <ul className="grid gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-text-inverse/58 transition hover:text-text-inverse"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="상세 페이지">
            <p className="mb-3 text-xs font-extrabold text-primary-light">
              더 보기
            </p>
            <ul className="grid gap-2">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-text-inverse/58 transition hover:text-text-inverse"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs font-semibold text-text-inverse/38 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/privacy"
            target="_blank"
            className="underline underline-offset-4 transition hover:text-text-inverse/70"
          >
            개인정보처리방침
          </a>
          <span>&copy; 2026 ON-DO</span>
        </div>
      </Container>
    </footer>
  );
}
