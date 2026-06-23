"use client";

import { useEffect, useState } from "react";
import { X, MapPin, CalendarDays } from "lucide-react";

const STORAGE_KEY = "ondo-lecture-popup-hidden-until";

export function EventPopup() {
  const [open, setOpen] = useState(false);

  // 마운트 후 localStorage 확인 — '하루 보지 않기' 기간이 지났으면 표시
  useEffect(() => {
    let hiddenUntil = 0;
    try {
      hiddenUntil = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {
      hiddenUntil = 0;
    }
    if (Date.now() > hiddenUntil) setOpen(true);
  }, []);

  // 열려 있는 동안 ESC 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  const hideForDay = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        String(Date.now() + 24 * 60 * 60 * 1000)
      );
    } catch {
      /* localStorage 사용 불가 시에도 일단 닫기 */
    }
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lecture-popup-title"
    >
      <button
        type="button"
        aria-label="팝업 닫기"
        onClick={close}
        className="absolute inset-0 bg-bg-dark/55 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[90dvh] w-full max-w-[860px] flex-col overflow-hidden rounded-lg bg-bg-cream shadow-xl md:flex-row">
        <button
          type="button"
          aria-label="닫기"
          onClick={close}
          className="focus-ring absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-sm bg-bg-cream/85 text-text-muted backdrop-blur transition hover:bg-bg-cream hover:text-text"
        >
          <X size={18} />
        </button>

        <div className="flex shrink-0 items-center justify-center bg-white md:w-[44%]">
          {/* 모달 1회성 이미지 — next/image 최적화 불필요, public 직접 서빙
              모바일: 전체가 보이도록 비율 유지(h-auto) / 데스크톱: 좌측 칼럼 채움(cover) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ego-self-lecture.jpg"
            alt="자아와 자기 — ego & self 인문학 강연 포스터 (Carl Gustav Jung)"
            width={891}
            height={1260}
            className="h-auto w-full object-contain md:h-full md:object-cover md:object-top"
          />
        </div>

        <div className="flex min-h-0 flex-col overflow-y-auto p-6 md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
            ego &amp; self · 인문학 강연
          </p>
          <h2
            id="lecture-popup-title"
            className="mt-3 text-2xl font-extrabold leading-[1.3] text-text"
          >
            진짜 나를 찾는 게 왜 이렇게 어려울까?
          </h2>
          <p className="mt-2 text-sm font-bold text-text-secondary">
            자아(Ego)와 자기(Self)를 찾아가는 여정
          </p>

          <div className="mt-5 space-y-3 text-sm font-medium leading-[1.75] text-text-secondary">
            <p>
              “요즘 너 어때?”라는 질문에 선뜻 대답하지 못하고, 남들의 시선이나
              취업 스펙에 맞춰진 내 모습만 보며 답답했던 적 없나요?
            </p>
            <p>
              이번 강연은 정신분석학의 핵심 개념인 자아(Ego)와 자기(Self)를
              통해, 복잡한 내면의 지도를 함께 그려보는 시간입니다. 바쁜 대학
              생활 중 딱 한 번, 나를 위해 온전히 시간을 내어 ‘나라는 세상’으로
              모험을 떠나볼 여러분을 초대합니다.
            </p>
          </div>

          <dl className="mt-5 grid gap-2 rounded-sm bg-bg px-4 py-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="shrink-0 text-primary" />
              <dt className="sr-only">일시</dt>
              <dd className="font-bold text-text">6월 27일 (토) 오후 2시</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-primary" />
              <dt className="sr-only">장소</dt>
              <dd className="font-bold text-text">노원 더 숲 카페</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
            <button
              type="button"
              onClick={close}
              className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
            >
              닫기
            </button>
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
  );
}
