## ADDED Requirements

### Requirement: Display five counseling programs
5개 상담 프로그램을 각각 카드 형태로 표시해야 한다(SHALL). 각 카드는 프로그램명, 주제 아이콘/일러스트, 간략 설명을 포함한다.

#### Scenario: Programs section visible
- **WHEN** 사용자가 상담 프로그램 섹션으로 스크롤한다
- **THEN** 다음 5개 프로그램 카드가 표시된다: 마음 탕후루(인간관계), 너와나의 주파수(소통), 인간관계 먼지떨이(자존감), 둥글둥글 행성(심리코칭), 아리스토텔레스의 도토리(철학 코칭)

### Requirement: Program card interaction
각 프로그램 카드는 호버/탭 시 상세 설명이 확장되어야 한다(SHALL).

#### Scenario: Card hover on desktop
- **WHEN** 사용자가 데스크톱에서 프로그램 카드에 마우스를 올린다
- **THEN** 카드가 시각적으로 확장되며 해당 프로그램의 상세 설명(대상, 방식, 기대 효과)이 표시된다

#### Scenario: Card tap on mobile
- **WHEN** 사용자가 모바일에서 프로그램 카드를 탭한다
- **THEN** 카드가 아코디언 형태로 열리며 상세 설명이 표시된다

### Requirement: Program visual identity
각 프로그램은 고유한 시각적 아이덴티티(아이콘, 컬러 액센트)를 가져야 한다(SHALL).

#### Scenario: Distinct program visuals
- **WHEN** 5개 프로그램 카드가 나란히 표시된다
- **THEN** 각 카드는 서로 구별되는 아이콘과 액센트 컬러를 갖는다
