"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { PERSONALITY_QUESTIONS, QUESTIONS_PER_GROUP, TOTAL_GROUPS } from "@/data/assessments/personality-test";
import { submitPersonalityTest } from "../actions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QUESTIONS_PER_PAGE = QUESTIONS_PER_GROUP; // 11문항씩 (그룹 단위)
const SCALE_LABELS = ["전혀 아니다", "아니다", "보통이다", "그렇다", "매우 그렇다"];

interface PersonalityTestFormProps {
  clientId: string;
}

export default function PersonalityTestForm({ clientId }: PersonalityTestFormProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(PERSONALITY_QUESTIONS.length).fill(null)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [missingQuestionIndex, setMissingQuestionIndex] = useState<number | null>(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [pendingScrollIndex, setPendingScrollIndex] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const totalPages = TOTAL_GROUPS;
  const startIdx = currentPage * QUESTIONS_PER_PAGE;
  const pageQuestions = PERSONALITY_QUESTIONS.slice(startIdx, startIdx + QUESTIONS_PER_PAGE);

  const answeredOnPage = pageQuestions.filter((_, i) => answers[startIdx + i] !== null).length;
  const pageComplete = answeredOnPage === pageQuestions.length;

  const totalAnswered = answers.filter((a) => a !== null).length;
  const allComplete = totalAnswered === PERSONALITY_QUESTIONS.length;
  const progress = Math.round((totalAnswered / PERSONALITY_QUESTIONS.length) * 100);

  function setAnswer(qIndex: number, value: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = value;
      return next;
    });

    if (missingQuestionIndex === qIndex) {
      setMissingQuestionIndex(null);
      setValidationMessage("");
    }
  }

  useEffect(() => {
    if (pendingScrollIndex === null) return;

    const target = questionRefs.current[pendingScrollIndex];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.focus({ preventScroll: true });
    setPendingScrollIndex(null);
  }, [currentPage, pendingScrollIndex]);

  function requestAnswer(qIndex: number) {
    const message = `${qIndex + 1}번 문항을 체크해주세요.`;

    setCurrentPage(Math.floor(qIndex / QUESTIONS_PER_PAGE));
    setMissingQuestionIndex(qIndex);
    setValidationMessage(message);
    setPendingScrollIndex(qIndex);
    window.alert(message);
  }

  function findFirstMissingIndex(from: number, to: number) {
    for (let i = from; i < to; i += 1) {
      if (answers[i] === null) return i;
    }
    return null;
  }

  function handleNext() {
    const firstMissingIndex = findFirstMissingIndex(
      startIdx,
      startIdx + pageQuestions.length
    );

    if (firstMissingIndex !== null) {
      requestAnswer(firstMissingIndex);
      return;
    }

    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  }

  function handleSubmit() {
    const firstMissingIndex = findFirstMissingIndex(0, PERSONALITY_QUESTIONS.length);

    if (firstMissingIndex !== null) {
      requestAnswer(firstMissingIndex);
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.set("clientId", clientId);
      formData.set("answers", JSON.stringify(answers));
      await submitPersonalityTest(formData);
    });
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-text-muted mb-2">
          <span>{currentPage + 1} / {totalPages} 그룹</span>
          <span>{totalAnswered} / {PERSONALITY_QUESTIONS.length} 문항 ({progress}%)</span>
        </div>
        <div className="h-2 bg-bg-warm rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {validationMessage && (
        <div
          className="mb-4 rounded-[var(--radius-sm)] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
          role="alert"
          aria-live="assertive"
        >
          {validationMessage}
        </div>
      )}

      {/* Questions */}
      <div className="space-y-4">
        {pageQuestions.map((q, i) => {
          const globalIdx = startIdx + i;
          const isReverse = q.isReverse;
          const isMissing = missingQuestionIndex === globalIdx;

          return (
            <div
              key={globalIdx}
              ref={(node) => {
                questionRefs.current[globalIdx] = node;
              }}
              tabIndex={-1}
              className={`bg-card rounded-[var(--radius-md)] border p-4 scroll-mt-24 transition-colors focus:outline-none ${
                isMissing
                  ? "border-red-300 bg-red-50/40 ring-2 ring-red-100"
                  : "border-border-lighter"
              }`}
            >
              <div className="flex gap-2 mb-3">
                <span
                  className={`text-xs font-bold shrink-0 mt-0.5 ${
                    isMissing ? "text-red-500" : "text-primary"
                  }`}
                >
                  {globalIdx + 1}.
                </span>
                <p className="text-sm text-text leading-relaxed">
                  {q.text}
                  {isReverse && (
                    <span className="text-xs text-text-light ml-1">※</span>
                  )}
                </p>
              </div>

              <div className="flex gap-1.5">
                {SCALE_LABELS.map((label, scaleIdx) => {
                  const value = scaleIdx + 1;
                  const selected = answers[globalIdx] === value;
                  return (
                    <button
                      key={scaleIdx}
                      onClick={() => setAnswer(globalIdx, value)}
                      className={`flex-1 py-2 px-1 text-xs rounded-[var(--radius-sm)] border transition-all cursor-pointer ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-bg border-border-lighter hover:border-primary/40 text-text-muted"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {isMissing && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  이 문항을 체크해주세요.
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 gap-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="flex items-center gap-1 px-4 py-2.5 text-sm rounded-[var(--radius-sm)] border border-border-light hover:bg-bg-warm transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronLeft size={16} />
          이전
        </button>

        {currentPage < totalPages - 1 ? (
          <button
            onClick={handleNext}
            className={`flex items-center gap-1 px-4 py-2.5 text-sm rounded-[var(--radius-sm)] transition-colors cursor-pointer ${
              pageComplete
                ? "bg-primary text-white hover:bg-primary-dark"
                : "border border-border-light hover:bg-bg-warm"
            }`}
          >
            다음
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className={`px-6 py-2.5 text-sm rounded-[var(--radius-sm)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
              allComplete
                ? "bg-primary text-white hover:bg-primary-dark"
                : "border border-border-light hover:bg-bg-warm"
            }`}
          >
            {isPending ? "채점 중..." : "검사 완료"}
          </button>
        )}
      </div>
    </div>
  );
}
