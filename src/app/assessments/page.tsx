import Link from "next/link";
import { ArrowRight, FileText, PenTool, SlidersHorizontal } from "lucide-react";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ASSESSMENTS } from "@/data/assessments";
import type { AssessmentSlug } from "@/data/assessments";

const typeLabels = {
  drawing: "그림 기반",
  survey: "문항 기반",
  checkbox: "선택 기반",
} as const;

type AssessmentUseCase = {
  readonly question: string;
  readonly result: string;
  readonly use: string;
};

const assessmentUseCases = {
  "six-shapes": {
    question: "나는 사람들 사이에서 어디에 서려고 할까?",
    result: "도형을 고른 순서랑 배치에서 관계 거리, 주도성, 긴장 지점을 봐요.",
    use: "도형 배치랑 선택 순서를 보면서 나를 어떻게 보는지, 관계 방식은 어떤지 이야기해요.",
  },
  "life-graph": {
    question: "내가 자주 무너지고 다시 올라오는 지점은 어디일까?",
    result: "오르내림이 반복된 지점이랑, 회복에 도움이 됐던 조건을 같이 봐요.",
    use: "삶의 흐름을 선으로 그려보고 전환점, 회복 방식, 반복되는 선택을 찾아요.",
  },
  personality: {
    question: "왜 나는 비슷한 상황에서 늘 이렇게 반응할까?",
    result: "유형별 점수랑, 반응이 유독 세지는 관계 장면을 같이 봐요.",
    use: "유형 점수를 성격표로 끝내지 않고 관계랑 일상 반응으로 연결해요.",
  },
  attachment: {
    question: "가까워지고 싶은데 왜 불안하거나 멀어질까?",
    result: "친밀감, 거리두기, 불안 반응이 어떤 상황에서 커지는지 봐요.",
    use: "가까운 관계에서 반복되는 기대, 거리감, 불안을 말로 풀어봐요.",
  },
  "core-emotion": {
    question: "요즘 내 감정의 바닥에는 무엇이 깔려 있을까?",
    result: "자주 올라오는 감정이랑, 그 감정이 시작되는 생활 장면을 봐요.",
    use: "자주 올라오는 감정에 이름을 붙이고, 회복 루틴을 같이 정해요.",
  },
} satisfies Record<AssessmentSlug, AssessmentUseCase>;

export default function AssessmentsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-bg pt-28">
        <section className="px-7 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold text-primary">
                심리검사
              </p>
              <h1 className="text-[34px] font-extrabold leading-[1.1] text-text md:text-[52px]">
              결과표보다 중요한 건, 그 다음 질문이에요
              </h1>
            </div>
            <p className="max-w-[560px] text-base font-medium leading-[1.85] text-text-secondary text-pretty lg:justify-self-end">
              온도는 검사 결과를 혼자 읽고 끝내지 않아요. 코치랑 같이 결과가
              내 일상에서 어떻게 나타나는지 확인하고, 다음 대화 주제를 정해요.
            </p>
          </div>
        </section>

        <section className="px-7 pb-24 md:pb-32">
          <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ASSESSMENTS.map((assessment) => (
              <article
                key={assessment.slug}
                className="flex min-h-64 flex-col justify-between rounded-sm border border-border-lighter bg-bg-cream p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-caption text-5xl leading-none text-primary/28">
                      {String(assessment.order).padStart(2, "0")}
                    </span>
                    <span className="rounded-sm bg-primary-soft px-2.5 py-1 text-xs font-extrabold text-primary">
                      {typeLabels[assessment.type]}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-extrabold text-text">
                    {assessment.title}
                  </h2>
                  <p className="mt-4 text-base font-medium leading-[1.75] text-text-secondary">
                    {assessment.subtitle}
                  </p>
                  <div className="mt-5 rounded-sm bg-bg px-4 py-3">
                    <p className="text-xs font-extrabold text-primary">
                      코칭에서 묻는 질문
                    </p>
                    <p className="mt-2 text-sm font-bold leading-[1.6] text-text">
                      {assessmentUseCases[assessment.slug].question}
                    </p>
                  </div>
                  <div className="mt-3 rounded-sm border border-border-light bg-bg/70 px-4 py-3">
                    <p className="text-xs font-extrabold text-primary">
                      결과에서 보는 것
                    </p>
                    <p className="mt-2 text-sm font-bold leading-[1.6] text-text-secondary">
                      {assessmentUseCases[assessment.slug].result}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-2 text-sm font-extrabold leading-[1.6] text-text-muted">
                  {assessment.type === "drawing" && <PenTool size={17} className="mt-0.5 shrink-0" />}
                  {assessment.type === "survey" && <SlidersHorizontal size={17} className="mt-0.5 shrink-0" />}
                  {assessment.type === "checkbox" && <FileText size={17} className="mt-0.5 shrink-0" />}
                  {assessmentUseCases[assessment.slug].use}
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[1180px]">
            <Link
              href="/#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
            >
              검사 기반 코칭 문의하기
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
