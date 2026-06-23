"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyRound, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, PAGE_LINKS } from "@/lib/constants";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-38% 0px -58% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <nav className="fixed left-0 right-0 top-0 z-100 px-4 pt-4">
      <div
        className={`mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-lg px-4 transition duration-300 md:px-5 ${
          scrolled || menuOpen ? "glass-panel" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="focus-ring flex min-h-11 items-center gap-2 rounded-sm"
          onClick={() => setMenuOpen(false)}
        >
          <Logo size={28} />
          <span className="text-base font-extrabold text-text">온도</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              "section" in link
                ? isHome && activeSection === link.section
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-sm px-3 py-2 text-sm font-bold transition duration-200 ${
                  active
                    ? "bg-primary-soft text-primary"
                    : "text-text-muted hover:bg-bg-cream/70 hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm text-text-muted transition duration-200 hover:bg-bg-cream/70 hover:text-primary"
            aria-label="코치 로그인"
            title="코치 로그인"
          >
            <KeyRound size={17} />
          </Link>
          <Link
            href="/start"
            className="focus-ring inline-flex min-h-11 items-center rounded-sm bg-text px-4 text-sm font-extrabold text-text-inverse transition duration-200 hover:-translate-y-0.5 hover:bg-primary active:translate-y-0"
          >
            시작하기
          </Link>
        </div>

        <button
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-sm text-text lg:hidden"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1180px] rounded-lg border border-border-light bg-bg-cream p-4 shadow-lg lg:hidden">
          <div className="grid gap-1">
            {[...NAV_LINKS, ...PAGE_LINKS].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-sm px-3 py-3 text-sm font-bold text-text transition hover:bg-bg-cream/70"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="focus-ring rounded-sm px-3 py-3 text-sm font-bold text-text-muted transition hover:bg-bg-cream/70"
              onClick={() => setMenuOpen(false)}
            >
              코치 로그인
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
