"use client";

import { useEffect, useState } from "react";
import { X, MapPin, CalendarDays, ExternalLink } from "lucide-react";

const DAY_IN_MS = 24 * 60 * 60 * 1000;

type PopupAction = {
  readonly label: string;
  readonly href: string;
};

type PopupEvent = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly body: readonly string[];
  readonly date: string;
  readonly location: string;
  readonly action?: PopupAction;
};

const POPUP_EVENTS = [
  {
    id: "value-on-2026-summer",
    eyebrow: "Value-On · 방학 특별 프로모션",
    title: "이번 방학, 마음 온도는 몇 도인가요?",
    subtitle: "읽고, 쓰고, 말하며 나만의 이야기를 적립하는 코칭 프로그램",
    image: {
      src: "/value-on-promotion.jpg",
      alt: "Value-On 방학 특별 프로모션 포스터",
      width: 1260,
      height: 891,
    },
    body: [
      "학점 관리, 자격증 공부, 취업 준비에 쫓기듯 달려오느라 정작 내 마음을 돌볼 시간이 없었다면 이번 방학에는 잠깐 방향을 바꿔봅니다.",
      "강연을 듣고, 읽고, 쓰고, 말하면서 나만의 이야기를 정리합니다. 온도는 대학생 여러분이 건강하게 자기계발을 이어갈 수 있도록 이번 방학 오픈 프로모션가로 Value-On을 진행합니다.",
    ],
    date: "7월 3일 (금) ~ 7월 20일 (월) 19:30 ~ 21:30",
    location: "스페이스고 4층 / 안암역",
    action: {
      label: "이벤터스에서 신청하기",
      href: "https://event-us.kr/ondo/event/128982",
    },
  },
  {
    id: "ego-self-lecture-2026-06-27",
    eyebrow: "ego & self · 인문학 강연",
    title: "진짜 나를 찾는 게 왜 이렇게 어려울까?",
    subtitle: "자아(Ego)와 자기(Self)를 찾아가는 여정",
    image: {
      src: "/ego-self-lecture.jpg",
      alt: "자아와 자기 — ego & self 인문학 강연 포스터 (Carl Gustav Jung)",
      width: 891,
      height: 1260,
    },
    body: [
      "“요즘 너 어때?”라는 질문에 선뜻 대답하지 못하고, 남들의 시선이나 취업 스펙에 맞춰진 내 모습만 보며 답답했던 적 없나요?",
      "이번 강연은 정신분석학의 핵심 개념인 자아(Ego)와 자기(Self)를 통해, 복잡한 내면의 지도를 함께 그려보는 시간입니다. 바쁜 대학 생활 중 딱 한 번, 나를 위해 온전히 시간을 내어 ‘나라는 세상’으로 모험을 떠나볼 여러분을 초대합니다.",
    ],
    date: "6월 27일 (토) 오후 2시",
    location: "노원 더 숲 카페",
  },
] as const satisfies readonly PopupEvent[];

function storageKeyFor(eventId: string): string {
  return `ondo-event-popup-${eventId}-hidden-until`;
}

function readHiddenUntil(storageKey: string): number {
  try {
    return Number(window.localStorage.getItem(storageKey)) || 0;
  } catch (error) {
    if (error instanceof DOMException) return 0;
    throw error;
  }
}

function writeHiddenUntil(storageKey: string, hiddenUntil: number): void {
  try {
    window.localStorage.setItem(storageKey, String(hiddenUntil));
  } catch (error) {
    if (error instanceof DOMException) return;
    throw error;
  }
}

export function EventPopup() {
  const [activeEvent, setActiveEvent] = useState<PopupEvent | null>(null);

  // 마운트 후 localStorage 확인 — '하루 보지 않기' 기간이 지났으면 표시
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const now = Date.now();
      const eventToShow =
        POPUP_EVENTS.find(
          (event) => now > readHiddenUntil(storageKeyFor(event.id))
        ) ?? null;
      setActiveEvent(eventToShow);
    }, 0);
    return () => window.clearTimeout(timerId);
  }, []);

  // 열려 있는 동안 ESC 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!activeEvent) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveEvent(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeEvent]);

  if (!activeEvent) return null;

  const close = () => setActiveEvent(null);

  const hideForDay = () => {
    const hiddenUntil = Date.now() + DAY_IN_MS;
    POPUP_EVENTS.forEach((event) => {
      writeHiddenUntil(storageKeyFor(event.id), hiddenUntil);
    });
    setActiveEvent(null);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${activeEvent.id}-popup-title`}
    >
      <button
        type="button"
        aria-label="팝업 닫기"
        onClick={close}
        className="absolute inset-0 bg-bg-dark/55 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-[860px] flex-col overflow-y-auto rounded-lg bg-bg-cream shadow-xl md:max-h-[90dvh] md:flex-row md:overflow-hidden">
        <button
          type="button"
          aria-label="닫기"
          onClick={close}
          className="focus-ring absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-sm bg-bg-cream/85 text-text-muted backdrop-blur transition hover:bg-bg-cream hover:text-text"
        >
          <X size={18} />
        </button>

        <div className="flex shrink-0 items-center justify-center bg-white md:w-[44%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeEvent.image.src}
            alt={activeEvent.image.alt}
            width={activeEvent.image.width}
            height={activeEvent.image.height}
            className="h-auto max-h-[64dvh] w-full object-contain md:h-full md:max-h-none md:object-contain"
          />
        </div>

        <div className="flex flex-col overflow-visible p-6 md:min-h-0 md:overflow-y-auto md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
            {activeEvent.eyebrow}
          </p>
          <h2
            id={`${activeEvent.id}-popup-title`}
            className="mt-3 text-2xl font-extrabold leading-[1.3] text-text"
          >
            {activeEvent.title}
          </h2>
          <p className="mt-2 text-sm font-bold text-text-secondary">
            {activeEvent.subtitle}
          </p>

          <div className="mt-5 space-y-3 text-sm font-medium leading-[1.75] text-text-secondary">
            {activeEvent.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-5 grid gap-2 rounded-sm bg-bg px-4 py-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="shrink-0 text-primary" />
              <dt className="sr-only">일시</dt>
              <dd className="font-bold text-text">{activeEvent.date}</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-primary" />
              <dt className="sr-only">장소</dt>
              <dd className="font-bold text-text">{activeEvent.location}</dd>
            </div>
          </dl>

          <div className="mt-6 grid gap-2">
            {activeEvent.action ? (
              <a
                href={activeEvent.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
              >
                {activeEvent.action.label}
                <ExternalLink size={16} />
              </a>
            ) : (
              <button
                type="button"
                onClick={close}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
              >
                닫기
              </button>
            )}
            <div
              className={`grid gap-2 ${
                activeEvent.action ? "sm:grid-cols-2" : ""
              }`}
            >
              {activeEvent.action ? (
                <button
                  type="button"
                  onClick={close}
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-border-light px-5 text-sm font-bold text-text-muted transition duration-200 hover:border-primary hover:text-primary"
                >
                  닫기
                </button>
              ) : null}
              <button
                type="button"
                onClick={hideForDay}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-border-light px-5 text-sm font-bold text-text-muted transition duration-200 hover:border-primary hover:text-primary"
              >
                하루 동안 보지 않기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
