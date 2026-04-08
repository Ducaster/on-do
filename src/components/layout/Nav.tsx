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
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-[20px] shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[72px] max-w-[1100px] mx-auto px-7">
        <a href="#" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-heading text-[1rem] font-bold tracking-[0.03em] text-text">
            온도
          </span>
        </a>

        <ul className="items-center gap-8 list-none max-[920px]:hidden flex">
          {NAV_LINKS.map((link) => (
            <li key={link.section}>
              <a
                href={link.href}
                className={`text-[0.82rem] font-medium transition-colors duration-250 ${
                  activeSection === link.section
                    ? "text-primary"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.8rem] font-medium text-white bg-primary px-5 py-2 rounded-full transition-all duration-250 hover:bg-primary-dark"
            >
              문의하기
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

      {menuOpen && (
        <div className="min-[921px]:hidden flex flex-col absolute top-[72px] left-0 right-0 bg-bg/98 backdrop-blur-[20px] px-7 py-6 gap-4 border-b border-border-lighter">
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
            className="text-[0.84rem] font-medium text-white bg-primary px-5 py-3 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            문의하기
          </a>
          <a
            href="/login"
            className="text-[0.82rem] text-text-light text-center"
            onClick={() => setMenuOpen(false)}
          >
            코치 로그인
          </a>
        </div>
      )}
    </nav>
  );
}
