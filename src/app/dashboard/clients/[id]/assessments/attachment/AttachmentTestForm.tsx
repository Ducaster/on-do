"use client";

import { useRef, useState, useTransition } from "react";
import { ATTACHMENT_QUESTIONS, SCALE_LABELS } from "@/data/assessments/attachment-test";
import { submitAttachmentTest } from "../actions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QUESTIONS_PER_PAGE = 9;

interface AttachmentTestFormProps {
  clientId: string;
}

export default function AttachmentTestForm({ clientId }: AttachmentTestFormProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(ATTACHMENT_QUESTIONS.length).fill(null)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const submitLockRef = useRef(false);

  const totalPages = Math.ceil(ATTACHMENT_QUESTIONS.length / QUESTIONS_PER_PAGE);
  const startIdx = currentPage * QUESTIONS_PER_PAGE;
  const pageQuestions = ATTACHMENT_QUESTIONS.slice(startIdx, startIdx + QUESTIONS_PER_PAGE);

  const answeredOnPage = pageQuestions.filter((q) => answers[q.number - 1] !== null).length;
  const pageComplete = answeredOnPage === pageQuestions.length;

  const totalAnswered = answers.filter((a) => a !== null).length;
  const allComplete = totalAnswered === ATTACHMENT_QUESTIONS.length;
  const progress = Math.round((totalAnswered / ATTACHMENT_QUESTIONS.length) * 100);
  const submitting = isSubmitting || isPending;

  function setAnswer(qNumber: number, value: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qNumber - 1] = value;
      return next;
    });
  }

  function handleSubmit() {
    if (!allComplete || submitting || submitLockRef.current) return;

    submitLockRef.current = true;
    setIsSubmitting(true);
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.set("clientId", clientId);
        formData.set("answers", JSON.stringify(answers));
        await submitAttachmentTest(formData);
      } catch (error) {
        submitLockRef.current = false;
        setIsSubmitting(false);
        throw error;
      }
    });
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-text-muted mb-2">
          <span>{currentPage + 1} / {totalPages} 페이지</span>
          <span>{totalAnswered} / {ATTACHMENT_QUESTIONS.length} 문항 ({progress}%)</span>
        </div>
        <div className="h-2 bg-bg-warm rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {pageQuestions.map((q) => (
          <div
            key={q.number}
            className="bg-card rounded-[var(--radius-md)] border border-border-lighter p-4"
          >
            <div className="flex gap-2 mb-3">
              <span className="text-xs font-bold text-primary shrink-0 mt-0.5">
                {q.number}.
              </span>
              <p className="text-sm text-text leading-relaxed">
                {q.text}
              </p>
            </div>

            <div className="flex gap-1.5">
              {SCALE_LABELS.map((label, idx) => {
                const value = idx + 1;
                const selected = answers[q.number - 1] === value;
                return (
                  <button
                    key={idx}
                    onClick={() => setAnswer(q.number, value)}
                    disabled={submitting}
                    className={`flex-1 py-2 px-1 text-xs rounded-[var(--radius-sm)] border transition-all cursor-pointer ${
                      selected
                        ? "bg-primary text-white border-primary"
                        : "bg-bg border-border-lighter hover:border-primary/40 text-text-muted"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 gap-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0 || submitting}
          className="flex items-center gap-1 px-4 py-2.5 text-sm rounded-[var(--radius-sm)] border border-border-light hover:bg-bg-warm transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronLeft size={16} />
          이전
        </button>

        {currentPage < totalPages - 1 ? (
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={submitting}
            className={`flex items-center gap-1 px-4 py-2.5 text-sm rounded-[var(--radius-sm)] transition-colors cursor-pointer ${
              pageComplete
                ? "bg-primary text-white hover:bg-primary-dark"
                : "border border-border-light hover:bg-bg-warm"
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            다음
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allComplete || submitting}
            className="px-6 py-2.5 text-sm rounded-[var(--radius-sm)] bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {submitting ? "제출 중..." : "검사 완료"}
          </button>
        )}
      </div>
      {submitting && (
        <p
          className="mt-3 text-center text-xs text-text-light"
          role="status"
          aria-live="polite"
        >
          검사 결과를 저장하고 있어요. 잠시만 기다려주세요.
        </p>
      )}
    </div>
  );
}
