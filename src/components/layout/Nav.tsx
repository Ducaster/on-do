"use client";

import { useState, useEffect } from "react";
import { Menu, X, KeyRound } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 backdrop-blur-[24px] backdrop-saturate-[1.3] transition-all duration-400 border-b ${
        scrolled
          ? "bg-bg/92 border-border-light"
          : "bg-bg/82 border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[72px] max-w-[1100px] mx-auto px-7">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={30} />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-[1.05rem] font-bold tracking-[0.04em] text-text">
              온도
            </span>
            <span className="font-caption text-[0.58rem] font-normal tracking-[0.22em] text-text-muted mt-px italic">
              ON-DO
            </span>
          </div>
        </a>

        <ul
          className={`items-center gap-9 list-none max-[920px]:hidden flex`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.section}>
              <a
                href={link.href}
                className={`text-[0.82rem] font-medium tracking-[0.02em] cursor-pointer transition-colors duration-250 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:right-1/2 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:text-text hover:after:left-0 hover:after:right-0 ${
                  activeSection === link.section
                    ? "text-primary after:left-0 after:right-0"
                    : "text-text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.78rem] font-semibold text-white bg-primary px-6 py-2.5 rounded-md transition-all duration-250 hover:bg-primary-dark hover:-translate-y-px tracking-[0.04em]"
            >
              코칭 문의
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="text-text-light hover:text-primary transition-colors duration-250"
              title="코치 로그인"
            >
              <KeyRound size={15} />
            </a>
          </li>
        </ul>

        <button
          className="hidden max-[920px]:flex items-center justify-center w-11 h-11 border-none bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {menuOpen ? (
            <X className="w-[22px] h-[22px] text-text" />
          ) : (
            <Menu className="w-[22px] h-[22px] text-text" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="min-[921px]:hidden flex flex-col absolute top-[72px] left-0 right-0 bg-bg/98 backdrop-blur-[24px] px-7 py-7 gap-5 border-b border-border-light shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={link.href}
              className={`text-[0.9rem] font-medium ${
                activeSection === link.section
                  ? "text-primary"
                  : "text-text-muted"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[0.82rem] font-semibold text-white bg-primary px-6 py-3 rounded-md text-center tracking-[0.04em]"
            onClick={() => setMenuOpen(false)}
          >
            코칭 문의
          </a>
          <a
            href="/login"
            className="text-[0.82rem] text-text-light hover:text-primary transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            코치 로그인
          </a>
        </div>
      )}
    </nav>
  );
}
