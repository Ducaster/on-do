"use client";

import type { EnneagramTypeInfo } from "@/data/assessments/enneagram-types";
import { ENNEAGRAM_TYPES } from "@/data/assessments/enneagram-types";

interface PersonalityResultViewProps {
  mainType: number;
  mainTypeInfo: EnneagramTypeInfo;
  wing: number;
  wingInfo: EnneagramTypeInfo;
  scores: Record<string, number>;
  percentages: Record<string, number>;
  integrationTo: number;
  disintegrationTo: number;
}

const TYPE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
const RADAR_CENTER = 150;
const RADAR_MAX_RADIUS = 96;
const RADAR_LABEL_RADIUS = 124;

function getRadarPoint(type: number, radius: number) {
  const angle = ((type - 1) / TYPE_NUMBERS.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: RADAR_CENTER + Math.cos(angle) * radius,
    y: RADAR_CENTER + Math.sin(angle) * radius,
  };
}

function getRadarPolygon(radius: number) {
  return TYPE_NUMBERS.map((type) => {
    const point = getRadarPoint(type, radius);
    return `${point.x},${point.y}`;
  }).join(" ");
}

export default function PersonalityResultView({
  mainType,
  mainTypeInfo,
  wing,
  wingInfo,
  scores,
  percentages,
  integrationTo,
  disintegrationTo,
}: PersonalityResultViewProps) {
  const integrationInfo = ENNEAGRAM_TYPES[integrationTo];
  const disintegrationInfo = ENNEAGRAM_TYPES[disintegrationTo];
  const scoreItems = TYPE_NUMBERS.map((type) => {
    const pct = percentages[type] ?? 0;
    const score = scores[type] ?? 0;
    return {
      type,
      pct,
      score,
      info: ENNEAGRAM_TYPES[type],
      isMain: type === mainType,
    };
  });
  const radarPoints = scoreItems
    .map(({ type, pct }) => {
      const point = getRadarPoint(type, (Math.max(0, pct) / 100) * RADAR_MAX_RADIUS);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <div className="space-y-6">
      {/* Main Type Card */}
      <div className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-6 border border-primary/20">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-white">{mainType}</span>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-text">
              {mainType}유형: {mainTypeInfo.name}
            </h2>
            <p className="text-sm text-text-muted">
              {mainTypeInfo.englishName} &middot; {mainTypeInfo.alias}
            </p>
          </div>
        </div>
        <p className="text-sm text-text leading-relaxed mb-4">
          {mainTypeInfo.summary}
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-bg-warm rounded-[var(--radius-sm)]">
            <span className="text-xs text-text-muted block mb-1">핵심 욕구</span>
            <p className="text-text font-medium">{mainTypeInfo.coreDesire}</p>
          </div>
          <div className="p-3 bg-bg-warm rounded-[var(--radius-sm)]">
            <span className="text-xs text-text-muted block mb-1">핵심 두려움</span>
            <p className="text-text font-medium">{mainTypeInfo.coreFear}</p>
          </div>
        </div>
      </div>

      {/* Wing + Direction */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="text-xs font-medium text-text-muted mb-2">날개 유형</h3>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-primary">
              {wing}
            </span>
            <div>
              <p className="text-sm font-medium text-text">{wingInfo.name}</p>
              <p className="text-xs text-text-muted">{wingInfo.alias}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="text-xs font-medium text-text-muted mb-2">통합 방향 (성장)</h3>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#547E68]/15 flex items-center justify-center text-sm font-bold text-[#547E68]">
              {integrationTo}
            </span>
            <div>
              <p className="text-sm font-medium text-text">{integrationInfo.name}</p>
              <p className="text-xs text-text-muted">{integrationInfo.alias}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="text-xs font-medium text-text-muted mb-2">분열 방향 (스트레스)</h3>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-sm font-bold text-red-400">
              {disintegrationTo}
            </span>
            <div>
              <p className="text-sm font-medium text-text">{disintegrationInfo.name}</p>
              <p className="text-xs text-text-muted">{disintegrationInfo.alias}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Score Chart */}
      <div className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-6">
        <div className="mb-5">
          <h3 className="font-heading font-bold text-text">유형별 점수</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,360px)_1fr] gap-6 items-center">
          <div className="relative mx-auto w-full max-w-[360px] aspect-square">
            <svg
              viewBox="0 0 300 300"
              role="img"
              aria-label="유형별 점수를 별형 그래프로 표시"
              className="w-full h-full overflow-visible"
            >
              {[0.25, 0.5, 0.75, 1].map((ratio) => (
                <polygon
                  key={ratio}
                  points={getRadarPolygon(RADAR_MAX_RADIUS * ratio)}
                  fill="none"
                  stroke="rgba(156, 80, 48, 0.12)"
                  strokeWidth="1"
                />
              ))}

              {TYPE_NUMBERS.map((type) => {
                const edge = getRadarPoint(type, RADAR_MAX_RADIUS);
                return (
                  <line
                    key={type}
                    x1={RADAR_CENTER}
                    y1={RADAR_CENTER}
                    x2={edge.x}
                    y2={edge.y}
                    stroke="rgba(88, 69, 56, 0.12)"
                    strokeWidth="1"
                  />
                );
              })}

              <polygon
                points={radarPoints}
                fill="rgba(156, 80, 48, 0.13)"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {scoreItems.map(({ type, pct, score, isMain }) => {
                const point = getRadarPoint(type, (Math.max(0, pct) / 100) * RADAR_MAX_RADIUS);
                const label = getRadarPoint(type, RADAR_LABEL_RADIUS);
                return (
                  <g key={type}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isMain ? 5.5 : 4}
                      fill={isMain ? "var(--color-primary)" : "var(--color-secondary)"}
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      cx={label.x}
                      cy={label.y}
                      r={isMain ? 14 : 12}
                      fill={isMain ? "var(--color-primary)" : "var(--color-bg-warm)"}
                      stroke={isMain ? "var(--color-primary)" : "var(--color-border-light)"}
                      strokeWidth="1"
                    />
                    <text
                      x={label.x}
                      y={label.y + 4}
                      textAnchor="middle"
                      className={isMain ? "fill-white text-[12px] font-bold" : "fill-text-muted text-[11px] font-bold"}
                    >
                      {type}
                    </text>
                    <title>
                      {type}유형 {score}점
                    </title>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
            {scoreItems.map(({ type, pct, score, info, isMain }) => (
              <div
                key={type}
                className={`relative overflow-hidden rounded-[var(--radius-sm)] border ${
                  isMain
                    ? "border-primary/25 bg-primary-pale"
                    : "border-border-lighter bg-bg/60"
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 ${
                    isMain ? "bg-primary/16" : "bg-secondary/18"
                  }`}
                  style={{ width: `${Math.max(0, Math.min(pct, 100))}%` }}
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-[28px_1fr_auto] items-center gap-3 px-3 py-2.5">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      isMain
                        ? "bg-primary text-white"
                        : "bg-bg-warm text-text-muted"
                    }`}
                  >
                    {type}
                  </span>
                  <span
                    className={`text-xs truncate ${
                      isMain ? "text-primary font-semibold" : "text-text-muted"
                    }`}
                  >
                    {info.name}
                  </span>
                  <span
                    className={`text-xs text-right ${
                      isMain ? "text-primary font-bold" : "text-text-muted"
                    }`}
                  >
                    {score}점
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="font-heading font-bold text-text mb-3">긍정적 특성</h3>
          <ul className="space-y-1.5">
            {mainTypeInfo.positiveTraits.map((trait) => (
              <li key={trait} className="text-sm text-text flex items-start gap-2">
                <span className="text-[#547E68] mt-1 shrink-0">+</span>
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="font-heading font-bold text-text mb-3">주의할 특성</h3>
          <ul className="space-y-1.5">
            {mainTypeInfo.negativeTraits.map((trait) => (
              <li key={trait} className="text-sm text-text flex items-start gap-2">
                <span className="text-red-400 mt-1 shrink-0">-</span>
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strengths / Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="font-heading font-bold text-text mb-3">강점</h3>
          <ul className="space-y-1.5">
            {mainTypeInfo.strengths.map((s) => (
              <li key={s} className="text-sm text-text flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">&bull;</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-5">
          <h3 className="font-heading font-bold text-text mb-3">성장 포인트</h3>
          <ul className="space-y-1.5">
            {mainTypeInfo.weaknesses.map((w) => (
              <li key={w} className="text-sm text-text flex items-start gap-2">
                <span className="text-secondary mt-1 shrink-0">&bull;</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Values + Motivation */}
      <div className="bg-card rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-6">
        <h3 className="font-heading font-bold text-text mb-3">핵심 가치와 동기</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {mainTypeInfo.coreValues.map((v) => (
            <span
              key={v}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-pale text-primary border border-primary/10"
            >
              {v}
            </span>
          ))}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          <strong>성장 동기:</strong> {mainTypeInfo.motivation}
        </p>
      </div>
    </div>
  );
}
