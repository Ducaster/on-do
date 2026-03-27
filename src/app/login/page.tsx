"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-bg-warm px-5">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 mb-4 justify-center"
          >
            <Logo size={36} />
            <span className="font-heading text-xl font-bold text-text">
              온도 / ON-DO
            </span>
          </a>
          <p className="text-text-muted text-sm">코치 전용 관리 페이지</p>
        </div>

        <form
          action={formAction}
          className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-8"
        >
          <div className="mb-5">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              아이디
            </label>
            <input
              type="text"
              id="id"
              name="id"
              required
              autoComplete="username"
              className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
              placeholder="아이디를 입력하세요"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {state?.error && (
            <div className="mb-4 p-3 rounded-[var(--radius-sm)] bg-red-50 text-red-600 text-sm text-center">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 px-4 bg-primary text-white rounded-[var(--radius-sm)] font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {pending ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-text-light">
          <a
            href="/"
            className="hover:text-primary transition-colors"
          >
            &larr; 홈으로 돌아가기
          </a>
        </p>
      </div>
    </div>
  );
}
