import { getClients } from "@/lib/store";
import { GrowthBadge } from "@/components/dashboard/GrowthStage";
import { getGrowthStageInfo, GROWTH_STAGES } from "@/types/client";
import Link from "next/link";
import { Users, Calendar, TrendingUp, Plus, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const clients = await getClients();
  const totalSessions = clients.reduce(
    (sum, c) => sum + c.sessions.length,
    0
  );

  const stageDistribution = GROWTH_STAGES.map((stage) => ({
    ...stage,
    count: clients.filter(
      (c) => getGrowthStageInfo(c.sessions.length).key === stage.key
    ).length,
  }));

  const recentSessions = clients
    .flatMap((c) =>
      c.sessions.map((s) => ({
        ...s,
        clientName: c.name,
        clientId: c.id,
      }))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-text">
            참여자 대시보드
          </h1>
          <p className="text-sm text-text-muted mt-1">
            코칭 현황과 참여자 관리를 한 화면에서 확인하세요
          </p>
        </div>
        <Link
          href="/dashboard/clients/new"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-[var(--radius-sm)] text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <Plus size={16} />
          새 참여자 등록
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-3 sm:gap-4 mb-8">
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-xs)] p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-[var(--radius-sm)] bg-primary-pale">
              <Users size={18} className="text-primary" />
            </div>
            <span className="text-sm text-text-muted">전체 참여자</span>
          </div>
          <p className="text-2xl font-bold text-text">
            {clients.length}
            <span className="text-sm font-normal text-text-light ml-1">
              명
            </span>
          </p>
        </div>
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-xs)] p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-[var(--radius-sm)] bg-primary-pale">
              <Calendar size={18} className="text-primary" />
            </div>
            <span className="text-sm text-text-muted">총 코칭 횟수</span>
          </div>
          <p className="text-2xl font-bold text-text">
            {totalSessions}
            <span className="text-sm font-normal text-text-light ml-1">
              회
            </span>
          </p>
        </div>
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-xs)] p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-[var(--radius-sm)] bg-primary-pale">
              <TrendingUp size={18} className="text-primary" />
            </div>
            <span className="text-sm text-text-muted">평균 코칭 횟수</span>
          </div>
          <p className="text-2xl font-bold text-text">
            {clients.length > 0
              ? (totalSessions / clients.length).toFixed(1)
              : "0"}
            <span className="text-sm font-normal text-text-light ml-1">
              회
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {/* Growth Stage Distribution */}
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-xs)] p-4 sm:p-6">
          <h2 className="font-heading text-lg font-bold text-text mb-4">
            성장 단계 분포
          </h2>
          {clients.length === 0 ? (
            <p className="text-sm text-text-light py-4">
              등록된 참여자가 없습니다
            </p>
          ) : (
            <div className="space-y-3">
              {stageDistribution.map((stage) => (
                <div key={stage.key} className="grid grid-cols-[74px_1fr] min-[420px]:grid-cols-[96px_1fr] items-center gap-2 min-[420px]:gap-3">
                  <span className="text-xs text-text-muted truncate">
                    {stage.label}
                  </span>
                  <div className="flex-1 h-6 bg-bg rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{
                        width:
                          clients.length > 0
                            ? `${Math.max((stage.count / clients.length) * 100, stage.count > 0 ? 20 : 0)}%`
                            : "0%",
                        backgroundColor: stage.color,
                      }}
                    >
                      {stage.count > 0 && (
                        <span className="text-[10px] font-bold text-white">
                          {stage.count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Sessions */}
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-xs)] p-4 sm:p-6">
          <h2 className="font-heading text-lg font-bold text-text mb-4">
            최근 코칭 기록
          </h2>
          {recentSessions.length === 0 ? (
            <p className="text-sm text-text-light py-4">
              코칭 기록이 없습니다
            </p>
          ) : (
            <div className="space-y-1">
              {recentSessions.map((session) => (
                <Link
                  key={session.id}
                  href={`/dashboard/clients/${session.clientId}`}
                  className="flex flex-col gap-1 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between p-3 rounded-[var(--radius-sm)] hover:bg-bg transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text">
                      {session.clientName}
                    </p>
                    <p className="text-xs text-text-light truncate">
                      {session.sessionNumber}회차 &middot;{" "}
                      {session.content?.slice(0, 30)}
                    </p>
                  </div>
                  <span className="text-xs text-text-light shrink-0 min-[480px]:ml-3">
                    {session.date}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Client Management */}
      <section className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 border-b border-border-lighter">
          <div>
            <h2 className="font-heading text-lg font-bold text-text">
              참여자 관리
            </h2>
            <p className="text-sm text-text-muted mt-1">
              {clients.length > 0
                ? `총 ${clients.length}명의 참여자가 등록되어 있습니다`
                : "등록된 참여자가 없습니다"}
            </p>
          </div>
          <Link
            href="/dashboard/clients/new"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-[var(--radius-sm)] border border-border-light text-sm font-medium text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary-pale transition-colors"
          >
            <Plus size={15} />
            등록
          </Link>
        </div>

        {clients.length === 0 ? (
          <div className="px-4 py-10 sm:px-6 sm:py-12 text-center">
            <div className="text-5xl mb-4 opacity-60">&#127330;</div>
            <h3 className="font-heading text-lg font-bold text-text mb-2">
              아직 등록된 참여자가 없습니다
            </h3>
            <p className="text-sm text-text-muted mb-6">
              첫 참여자를 등록하고 코칭을 시작하세요
            </p>
            <Link
              href="/dashboard/clients/new"
              className="inline-flex w-full min-[420px]:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-[var(--radius-sm)] text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              <Plus size={16} />
              참여자 등록하기
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border-lighter">
            {clients.map((client) => {
              const lastSession =
                client.sessions.length > 0
                  ? client.sessions[client.sessions.length - 1]
                  : null;

              return (
                <Link
                  key={client.id}
                  href={`/dashboard/clients/${client.id}`}
                  className="grid grid-cols-[1fr_auto] gap-3 px-4 py-4 sm:gap-4 sm:px-6 hover:bg-bg-warm/45 transition-colors group"
                >
                  <div className="min-w-0 flex items-center gap-3 sm:gap-4">
                    <div className="w-11 h-11 rounded-full bg-bg-warm flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">
                        {client.name.slice(0, 1)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-medium text-text truncate">
                          {client.name}
                        </h3>
                        <GrowthBadge sessionCount={client.sessions.length} />
                      </div>
                      <div className="flex items-center gap-x-3 gap-y-1 mt-1 text-xs text-text-light flex-wrap">
                        {client.program && <span>{client.program}</span>}
                        <span>{client.sessions.length}회 코칭</span>
                        {lastSession && (
                          <span>마지막: {lastSession.date}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="self-center text-text-light group-hover:text-primary transition-colors shrink-0"
                  />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
