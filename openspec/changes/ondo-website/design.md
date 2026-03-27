## Context

온도(ON-DO)는 마음의 온도를 찾아가는 상담센터로, 아직 디지털 존재가 없는 신규 프로젝트다. 주요 사용자는 심리 상담을 처음 알아보는 20~40대이며, 모바일 접속 비율이 높을 것으로 예상된다. 상담이라는 주제 특성상 방문자가 심리적 안전감과 따뜻함을 느낄 수 있는 UI가 핵심이다.

## Goals / Non-Goals

**Goals:**
- 온도 브랜드의 따뜻함과 신뢰감을 디지털로 전달하는 홈페이지 구축
- 5개 상담 프로그램과 5개 상담 도구를 명확하게 소개
- 상담 문의를 간편하게 접수할 수 있는 폼 제공
- 상담코치 전용 로그인 및 관리 대시보드 (문의 확인, 프로그램 신청/진행 관리)
- 상담코치 프로필 및 이력 소개 섹션
- 모바일 퍼스트 반응형 디자인
- 빠른 로딩 속도와 SEO 최적화

**Non-Goals:**
- 실시간 온라인 상담 기능 (채팅/화상)
- 결제 시스템 연동
- 일반 사용자(내담자) 회원가입/로그인 (코치만 로그인)
- 상담 예약 캘린더 자동화
- 블로그/콘텐츠 관리 시스템 (1차 버전에서 제외)

## Decisions

### 1. 프레임워크: Next.js (App Router)
**선택**: Next.js 14+ App Router (SSR + SSG 혼용)
**대안**: Astro, plain HTML/CSS, Gatsby
**근거**: React 생태계 활용, 공개 페이지는 SSG, 코치 대시보드는 SSR. 코치 인증이 필요하므로 static export만으로는 불충분하여 서버 기능 활용.

### 2. 스타일링: Tailwind CSS + CSS Variables
**선택**: Tailwind CSS v4 + 커스텀 따뜻한 톤 디자인 토큰
**대안**: styled-components, vanilla CSS, Chakra UI
**근거**: 빠른 개발 속도, 일관된 디자인 시스템 구축 용이. 온도 브랜드 컬러(테라코타, 웜 베이지, 소프트 브라운)를 CSS 변수로 정의하여 전체 사이트에 일관 적용.

### 3. 컬러 팔레트
```
--ondo-primary:    #D46A4E  (테라코타 — 따뜻함의 핵심)
--ondo-secondary:  #E8935A  (웜 오렌지 — 활력)
--ondo-accent:     #F4C8A0  (소프트 피치 — 부드러움)
--ondo-bg:         #FDF8F4  (크림 화이트 — 배경)
--ondo-bg-warm:    #F5EDE6  (웜 베이지 — 섹션 배경)
--ondo-text:       #3D2B24  (다크 브라운 — 본문)
--ondo-text-sub:   #9B7B6B  (미디엄 브라운 — 보조 텍스트)
```

### 4. 타이포그래피
**선택**: Noto Serif KR (제목) + Pretendard (본문)
**근거**: Noto Serif KR의 세리프체는 따뜻함과 격식을 동시에 전달. Pretendard는 한국어 가독성이 뛰어난 본문 서체. Google Fonts 무료 사용 가능.

### 5. 인증: NextAuth.js + AWS Cognito
**선택**: NextAuth.js (Credentials Provider) + AWS Cognito (User Pool)
**대안**: Firebase Auth, Auth0, 자체 JWT
**근거**: 상담코치만 로그인하므로 소규모 사용자. Cognito 무료 티어(월 50,000 MAU)로 충분. NextAuth.js로 세션 관리. 코치 계정은 관리자가 Cognito Console에서 직접 생성 (회원가입 없음).

### 6. 데이터베이스: AWS DynamoDB
**선택**: AWS DynamoDB
**대안**: Supabase (PostgreSQL), PlanetScale, Firebase Firestore
**근거**: AWS 생태계 통합, 서버리스 완전 관리형, 프리 티어(25GB 스토리지, 월 2억5천만 읽기/쓰기 무료)로 상담센터 규모에 충분. 단순한 데이터 구조에 적합.

테이블 구조:
```
Coaches 테이블
  PK: COACH#<coachId>
  SK: PROFILE
  속성: name, email, title, bio, photoUrl, specialties, career, createdAt

Inquiries 테이블
  PK: INQ#<inquiryId>
  SK: METADATA
  GSI1PK: STATUS#<status>  (상태별 조회용)
  GSI1SK: <createdAt>
  속성: name, phone, kakaoId, program, privacyAgreed, status, assignedCoachId, createdAt
```

### 7. 폼 처리: Next.js API Route + DynamoDB + SES
**선택**: Next.js Server Action → DynamoDB 저장 + AWS SES 이메일 알림
**대안**: Formspree, Google Forms
**근거**: 코치 대시보드에서 문의 목록을 확인해야 하므로 DB 저장 필수. DynamoDB에 저장 후 AWS SES로 코치에게 알림 이메일 발송.

### 8. 페이지 구조
**선택**: 공개 페이지 + 코치 전용 페이지
```
/              — 메인 랜딩 (싱글 페이지 스크롤: 소개→코치→프로그램→도구→문의)
/privacy       — 개인정보처리방침
/coach/login   — 코치 로그인
/coach/dashboard — 코치 대시보드 (문의 목록, 상담 진행 관리)
```
**근거**: 공개 페이지는 싱글 페이지로 전환율 극대화. 코치 영역은 별도 라우트로 분리하여 인증 미들웨어 적용.

### 9. 배포: Vercel
**선택**: Vercel (무료 티어)
**근거**: Next.js 최적 호스팅, 자동 HTTPS, 글로벌 CDN, GitHub 연동 자동 배포. SSR 기능 지원으로 코치 대시보드 서버 렌더링 가능.

## Risks / Trade-offs

- **[DynamoDB 비용]** → 프리 티어로 시작, 온디맨드 요금제. 상담센터 규모에서 비용 거의 발생하지 않음.
- **[싱글 페이지 SEO]** → 프로그램별 개별 URL이 없어 검색 노출 약함. → 추후 멀티 페이지 전환 가능하도록 컴포넌트 분리 설계.
- **[폰트 로딩]** → 한국어 웹폰트 용량이 큼. → next/font로 최적화, subset 적용.
- **[개인정보]** → 상담 문의 시 민감 정보 수집. → 개인정보처리방침 필수 구현, HTTPS 적용, DynamoDB IAM 정책으로 데이터 접근 제한.
- **[코치 계정 관리]** → 별도 관리자 패널 없이 AWS Cognito Console에서 코치 계정 직접 생성/관리. 코치 수가 소규모이므로 충분.
- **[AWS 복잡성]** → DynamoDB + Cognito + SES 3개 서비스 관리 필요. → AWS SDK v3로 통합, 환경변수로 관리.
