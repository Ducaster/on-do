import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-bg pt-28">
        <section className="px-7 py-16 md:py-24">
          <div className="mx-auto max-w-[860px]">
            <p className="mb-5 text-sm font-extrabold text-primary">
              개인정보 보호
            </p>
            <h1 className="text-[34px] font-extrabold leading-[1.1] text-text md:text-[52px]">
              개인정보처리방침
            </h1>
            <div className="mt-10 grid gap-6 text-base font-medium leading-[1.85] text-text-secondary">
              <p>
                온도는 코칭 문의, 사전 대화, 프로그램 안내를 위해 필요한 최소
                범위의 개인정보만 수집합니다.
              </p>
              <section className="rounded-sm border border-border-lighter bg-bg-cream p-6">
                <h2 className="text-2xl font-extrabold text-text">
                  수집 항목
                </h2>
                <p className="mt-3">
                  이름, 연락처, 문의 내용, 관심 프로그램 등 사용자가 직접
                  입력한 정보.
                </p>
              </section>
              <section className="rounded-sm border border-border-lighter bg-bg-cream p-6">
                <h2 className="text-2xl font-extrabold text-text">
                  이용 목적
                </h2>
                <p className="mt-3">
                  문의 응대, 사전 안내, 코칭 일정 조율, 프로그램 진행을 위한
                  기초 확인.
                </p>
              </section>
              <section className="rounded-sm border border-border-lighter bg-bg-cream p-6">
                <h2 className="text-2xl font-extrabold text-text">
                  보관과 보호
                </h2>
                <p className="mt-3">
                  개인정보와 코칭 관련 내용은 동의 없이 외부에 공개하지 않으며,
                  목적 달성 후 관련 법령과 내부 기준에 따라 안전하게 관리합니다.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
