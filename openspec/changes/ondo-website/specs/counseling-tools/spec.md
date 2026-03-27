## ADDED Requirements

### Requirement: Display five counseling tools
5가지 상담 도구/검사를 안내하는 섹션을 표시해야 한다(SHALL). 도구 목록: 성경유형검사, 아이젠하워 메트릭스, HTP 그림검사, 문장완성 검사, 핵심 감정 유형.

#### Scenario: Tools section visible
- **WHEN** 사용자가 상담 안내 섹션으로 스크롤한다
- **THEN** 5가지 상담 도구가 각각 이름과 간략 설명과 함께 표시된다

### Requirement: Tool description clarity
각 도구의 설명은 전문 지식이 없는 일반인도 이해할 수 있도록 평이한 언어로 작성되어야 한다(SHALL).

#### Scenario: Non-expert understanding
- **WHEN** 심리학 비전공 사용자가 도구 설명을 읽는다
- **THEN** 해당 도구가 무엇인지, 상담에서 어떻게 활용되는지 이해할 수 있다

### Requirement: Tool visual layout
상담 도구 섹션은 프로그램 섹션과 시각적으로 구별되는 레이아웃을 사용해야 한다(SHALL).

#### Scenario: Visual distinction from programs
- **WHEN** 사용자가 프로그램 섹션에서 도구 섹션으로 스크롤한다
- **THEN** 배경색 또는 레이아웃 변화를 통해 다른 섹션임을 인지할 수 있다
