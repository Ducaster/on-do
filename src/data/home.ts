import {
  Brain,
  Compass,
  Gauge,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MoodSignal = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly cue: string;
  readonly firstStep: string;
  readonly icon: LucideIcon;
};

export const moodSignals = [
  {
    id: "career",
    label: "자꾸 미뤄요",
    title: "할 일은 쌓였는데 손이 안 갈 때",
    description:
      "막상 시작하려면 자꾸 딴 게 눈에 들어오죠. 보통은 게을러서가 아니라 고를 게 너무 많아서예요. 일단 지금 줄일 수 있는 것부터 같이 골라봐요.",
    cue: "선택지 줄이기",
    firstStep: "이번 주에 진짜 해볼 만한 것 하나만 골라요.",
    icon: Compass,
  },
  {
    id: "relationship",
    label: "답장이 신경 쓰여요",
    title: "카톡 하나에도 하루가 흔들릴 때",
    description:
      "읽씹일까 봐 휴대폰을 자꾸 들여다본 적 있죠. 그 순간 마음이 어떻게 움직이는지부터 같이 봐요. 그러다 보면 나를 덜 깎으면서 지낼 거리가 보여요.",
    cue: "관계 거리 조절",
    firstStep: "요즘 제일 신경 쓰였던 대화 하나 가져와요. 같이 풀어봐요.",
    icon: HeartHandshake,
  },
  {
    id: "emotion",
    label: "괜찮은 척해요",
    title: "괜찮다고 말했는데 계속 피곤할 때",
    description:
      "참고 버틴 시간이 길수록 감정은 한참 뒤에 올라와요. 요즘 자주 도는 피로랑 짜증, 무기력이 어디서 시작됐는지 같이 짚어봐요.",
    cue: "감정 이름 붙이기",
    firstStep: "자주 올라오는 감정에 이름부터 붙여보고, 쉬는 방식도 다시 봐요.",
    icon: Gauge,
  },
  {
    id: "self",
    label: "내 취향을 모르겠어요",
    title: "내가 뭘 좋아하는지도 잘 모르겠을 때",
    description:
      "남들이 좋다는 거 말고, 내가 자꾸 끌리는 게 뭔지 찾아봐요. 검사 결과는 정답이 아니라 나를 설명하는 힌트로 쓰고요.",
    cue: "검사 해석",
    firstStep: "성격유형·애착·핵심감정 중에 끌리는 검사부터 골라요.",
    icon: Brain,
  },
  {
    id: "talk",
    label: "말하고 후회해요",
    title: "말하고 나서 혼자 계속 곱씹을 때",
    description:
      "못 한 말도, 너무 세게 나간 말도 한참 남죠. 다음엔 덜 후회할 말투를 같이 연습해봐요.",
    cue: "대화 연습",
    firstStep: "자꾸 후회되는 그 대화 장면을 짧게 다시 그려봐요.",
    icon: MessageCircle,
  },
] as const satisfies readonly MoodSignal[];

export const serviceModes = [
  {
    id: "coaching",
    eyebrow: "말로 정리",
    title: "1:1 코칭",
    body: "최근에 있었던 일을 같이 꺼내봐요. 그때 내가 뭘 지키고 싶었는지 말로 풀다 보면 생각보다 정리가 돼요.",
    points: ["요즘 있었던 장면부터", "질문 속도는 편하게", "끝나고 해볼 일 하나"],
  },
  {
    id: "assessment",
    eyebrow: "검사 해석",
    title: "심리검사와 해석",
    body: "성격유형, 애착, 핵심감정, 그림검사까지. 점수만 보고 끝내지 않고 내 일상 반응이랑 연결해서 풀어드려요.",
    points: ["결과에서 힌트 찾기", "내 일상과 연결하기", "첫 질문 정하기"],
  },
  {
    id: "mentoring",
    eyebrow: "경험 나눔",
    title: "멘토링",
    body: "이미 그 길을 지나온 사람과 솔직하게 얘기해봐요. 선택 앞에서 뭘 기준으로 삼을지 현실적으로 같이 잡습니다.",
    points: ["선택 기준 세우기", "부담 없이 실행하기", "다음 대화 점검하기"],
  },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "요즘 상태 고르기",
    body: "지금 제일 가까운 장면 하나만 골라요. 길게 설명 안 해도 시작할 수 있어요.",
  },
  {
    step: "02",
    title: "10분 사전 확인",
    body: "문의했다고 바로 신청 확정되는 거 아니에요. 기대하는 점, 조심할 점, 가능한 방식을 짧게 맞춰봐요.",
  },
  {
    step: "03",
    title: "검사와 코치 제안",
    body: "필요하면 먼저 볼 검사랑 잘 맞을 코치, 첫 만남 주제를 제안해드려요.",
  },
  {
    step: "04",
    title: "첫 만남 시작",
    body: "그동안 나눈 얘기를 바탕으로, 이번 주에 해볼 일 하나를 남기고 마무리해요.",
  },
] as const;

export const trustSignals = [
  {
    icon: ShieldCheck,
    title: "말한 내용은 밖으로 나가지 않습니다",
    body: "코칭에서 나눈 이야기랑 검사 결과는 동의 없이 밖으로 새지 않아요.",
  },
  {
    icon: Sparkles,
    title: "검사하고 결과지만 주고 끝나지 않아요",
    body: "점수랑 유형이 내 일상에서 어떻게 나타나는지까지 같이 이야기로 풀어요.",
  },
] as const;
