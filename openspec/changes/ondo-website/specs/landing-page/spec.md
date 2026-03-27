## ADDED Requirements

### Requirement: Hero section with brand message
랜딩 페이지 최상단에 온도 로고, 핵심 메시지("나에게 가장 편안한 마음의 온도를 찾는 공간"), 그리고 상담 문의로 이동하는 CTA 버튼을 포함하는 히어로 섹션을 표시해야 한다(SHALL).

#### Scenario: User visits the homepage
- **WHEN** 사용자가 홈페이지에 접속한다
- **THEN** 온도 로고, "나에게 가장 편안한 마음의 온도를 찾는 공간" 메시지, "상담 문의하기" CTA 버튼이 뷰포트 내에 표시된다

#### Scenario: CTA button navigation
- **WHEN** 사용자가 "상담 문의하기" 버튼을 클릭한다
- **THEN** 페이지가 상담 문의 폼 섹션으로 부드럽게 스크롤된다

### Requirement: Responsive layout
모든 섹션은 모바일(360px), 태블릿(768px), 데스크톱(1280px) 뷰포트에서 적절히 반응하여 렌더링되어야 한다(SHALL).

#### Scenario: Mobile viewport
- **WHEN** 사용자가 360px 너비 디바이스에서 접속한다
- **THEN** 모든 콘텐츠가 단일 컬럼 레이아웃으로 표시되고, 터치 타겟이 최소 44px이다

#### Scenario: Desktop viewport
- **WHEN** 사용자가 1280px 이상 너비에서 접속한다
- **THEN** 프로그램/도구 카드가 그리드 레이아웃으로 표시된다

### Requirement: Smooth section navigation
네비게이션 바에서 각 섹션(소개, 프로그램, 상담 안내, 문의)으로 부드러운 스크롤 이동이 가능해야 한다(SHALL).

#### Scenario: Navigation click
- **WHEN** 사용자가 네비게이션 메뉴의 "상담 프로그램" 항목을 클릭한다
- **THEN** 상담 프로그램 섹션으로 smooth scroll 이동한다
