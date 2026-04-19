import { addClient } from "@/app/dashboard/actions";
import { programs } from "@/data/programs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewClientPage() {
  return (
    <div className="max-w-[600px] mx-auto">
      <Link
        href="/dashboard/clients"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        내담자 목록
      </Link>

      <h1 className="font-heading text-2xl font-bold text-text mb-8">
        새 내담자 등록
      </h1>

      <form
        action={addClient}
        className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-8 space-y-5"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            이름 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
            placeholder="내담자 이름"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            연락처 <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
            placeholder="010-0000-0000"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
            placeholder="email@example.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              생년월일
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              min="1950-01-01"
              max="2010-12-31"
              className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              성별
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
            >
              <option value="">선택</option>
              <option value="여">여</option>
              <option value="남">남</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="program"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            코칭 프로그램
          </label>
          <select
            id="program"
            name="program"
            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors"
          >
            <option value="">프로그램 선택</option>
            {programs.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            메모
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light bg-bg text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-pale transition-colors resize-none"
            placeholder="특이사항이나 메모"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href="/dashboard/clients"
            className="flex-1 py-3 text-center rounded-[var(--radius-sm)] border border-border-light text-text-muted text-sm hover:bg-bg transition-colors"
          >
            취소
          </Link>
          <button
            type="submit"
            className="flex-1 py-3 bg-primary text-white rounded-[var(--radius-sm)] text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
}
