import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { coachMatchingChecks, coachPrinciples } from "@/data/coaches";

export default function CoachesPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-bg pt-28">
        <section className="px-7 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-extrabold text-primary">
                코치 매칭
              </p>
              <h1 className="text-[34px] font-extrabold leading-[1.1] text-text md:text-[52px]">
                나에게 맞는 코치, 이렇게 찾아요
              </h1>
            </div>
            <p className="max-w-[560px] text-base font-medium leading-[1.85] text-text-secondary text-pretty lg:justify-self-end">
              지금 내 주제랑 말하기 편한 속도에 맞춰, 잘 맞는 코치로 안전하게
              연결해드려요. 온도가 가장 중요하게 보는 게 바로 이 ‘맞춤’이에요.
            </p>
          </div>
        </section>

        <section className="px-7 pb-24 md:pb-32">
          <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-3">
            {coachPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
              <article
                key={principle.id}
                className="rounded-sm border border-border-lighter bg-bg-cream p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary-soft text-primary">
                    <Icon size={20} />
                  </div>
                  <span className="font-caption text-5xl leading-none text-primary/24">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-6 text-sm font-extrabold text-primary">
                  {principle.label}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-text">
                  {principle.title}
                </h2>
                <p className="mt-4 text-base font-medium leading-[1.8] text-text-secondary text-pretty">
                  {principle.body}
                </p>
              </article>
              );
            })}
          </div>

          <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 rounded-sm bg-bg-cream p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div>
              <p className="text-sm font-extrabold text-primary">
                매칭할 때 확인하는 것
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-text">
                편하게 말할 수 있는 사람과 시작하도록
              </h2>
            </div>
            <ul className="grid gap-4">
              {coachMatchingChecks.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-extrabold text-text">{item.title}</p>
                    <p className="mt-1 text-sm font-medium leading-[1.7] text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-[1180px]">
            <Link
              href="/#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
            >
              코치 매칭 문의하기
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
