import { MessageCircle, Route, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CoachPrinciple = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly body: string;
  readonly icon: LucideIcon;
};

export const coachPrinciples = [
  {
    id: "listen-first",
    label: "듣는 방식",
    title: "먼저 판단하지 않습니다",
    body: "처음부터 답을 정해놓고 끌고 가지 않아요. 요즘 있었던 장면을 듣고, 그 안에서 자꾸 반복되는 말이랑 감정을 같이 찾습니다.",
    icon: MessageCircle,
  },
  {
    id: "keep-safe",
    label: "안전한 진행",
    title: "말한 내용은 동의 없이 옮기지 않습니다",
    body: "검사 결과랑 대화 내용은 조심스럽게 다뤄요. 불편한 주제는 속도를 늦추고, 필요하면 진행 방식을 다시 맞춥니다.",
    icon: ShieldCheck,
  },
  {
    id: "match-context",
    label: "매칭 기준",
    title: "지금 내 주제에 맞춰 연결해요",
    body: "관계·진로·감정·자기이해 중 지금 제일 가까운 주제를 보고, 말이 잘 통하는 코치로 연결해드려요.",
    icon: Route,
  },
] as const satisfies readonly CoachPrinciple[];

export const coachMatchingChecks = [
  {
    title: "지금 가장 가까운 주제",
    body: "관계·진로·감정·자기이해 중에 요즘 어디서 제일 많이 흔들리는지 먼저 봐요.",
  },
  {
    title: "말하기 편한 속도",
    body: "바로 깊게 들어가도 괜찮은지, 검사부터 보는 게 편한지 사전 확인 때 맞춰요.",
  },
  {
    title: "끝나고 남기고 싶은 것",
    body: "위로가 필요한지, 표현 연습이 필요한지, 선택 기준이 필요한지에 따라 첫 만남 방향을 잡아요.",
  },
] as const;
