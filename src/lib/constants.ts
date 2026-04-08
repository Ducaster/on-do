export const NAV_LINKS = [
  { label: "소개", href: "#about", section: "about" },
  { label: "프로그램", href: "#programs", section: "programs" },
  { label: "코치", href: "#coaches", section: "coaches" },
  { label: "FAQ", href: "#faq", section: "faq" },
] as const;

export const CONTACT_INFO = {
  phone: "02-000-0000",
  kakao: "@온도코칭",
  email: "hello@on-do.kr",
  address: "서울특별시 OO구 OO로 000, 0층",
} as const;

export const OPERATING_HOURS = [
  { label: "평일 (월–금)", value: "10:00 – 20:00" },
  { label: "토요일", value: "10:00 – 17:00" },
  { label: "일요일 · 공휴일", value: "휴무" },
] as const;
