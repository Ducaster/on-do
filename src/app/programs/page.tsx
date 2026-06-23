import Link from "next/link";
import { ArrowRight, Clock, Repeat, UserRound } from "lucide-react";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-bg pt-28">
        <section className="px-7 py-16 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <p className="mb-5 text-sm font-extrabold text-primary">
              프로그램
            </p>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h1 className="max-w-[620px] text-[34px] font-extrabold leading-[1.1] text-text md:text-[52px]">
                <span className="block">이름만 보고도</span>{" "}
                <span className="block md:inline">내 상황을</span>{" "}
                <span className="block md:inline">떠올릴 수 있게</span>
              </h1>
              <p className="max-w-[560px] text-base font-medium leading-[1.85] text-text-secondary text-pretty lg:justify-self-end">
                온도의 프로그램은 분류표가 아니라 실제 장면에서 출발해요. 사전
                확인 때 필요한 검사랑 코칭 주제, 진행 방식을 같이 좁혀가요.
              </p>
            </div>
          </div>
        </section>

        <section className="px-7 pb-24 md:pb-32">
          <div className="mx-auto grid max-w-[1180px] gap-4">
            {programs.map((program) => (
              <article
                key={program.id}
                className="grid gap-6 rounded-sm border border-border-lighter bg-bg-cream p-6 md:grid-cols-[1fr_280px] md:p-8"
              >
                <div>
                  <p className="text-sm font-extrabold text-primary">
                    {program.theme}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-text">
                    {program.name}
                  </h2>
                  <p className="mt-5 max-w-[720px] text-base font-medium leading-[1.85] text-text-secondary text-pretty">
                    {program.description}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-sm bg-bg px-4 py-3">
                      <p className="text-xs font-extrabold text-primary">
                        이럴 때
                      </p>
                      <p className="mt-2 text-sm font-bold leading-[1.6] text-text-secondary">
                        {program.recommendedFor}
                      </p>
                    </div>
                    <div className="rounded-sm bg-bg px-4 py-3">
                      <p className="text-xs font-extrabold text-primary">
                        첫 만남에서
                      </p>
                      <p className="mt-2 text-sm font-bold leading-[1.6] text-text-secondary">
                        {program.firstSession}
                      </p>
                    </div>
                    <div className="rounded-sm bg-bg px-4 py-3">
                      <p className="text-xs font-extrabold text-primary">
                        끝나고 남는 것
                      </p>
                      <p className="mt-2 text-sm font-bold leading-[1.6] text-text-secondary">
                        {program.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid content-between gap-6">
                  <dl className="grid gap-3 text-sm font-bold text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Clock size={17} className="text-primary" />
                      <dt className="sr-only">시간</dt>
                      <dd>{program.duration}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Repeat size={17} className="text-primary" />
                      <dt className="sr-only">빈도</dt>
                      <dd>{program.frequency}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserRound size={17} className="text-primary" />
                      <dt className="sr-only">대상</dt>
                      <dd>{program.participantType}</dd>
                    </div>
                  </dl>
                  <Link
                    href="/#contact"
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
                  >
                    이 프로그램으로 문의하기
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
