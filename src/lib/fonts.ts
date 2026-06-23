import { Cormorant_Garamond } from "next/font/google";

// 큰 장식 숫자(01~04 등) 전용 세리프. 본문/제목은 Pretendard를 사용한다.
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});
