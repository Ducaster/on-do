## ADDED Requirements

### Requirement: Brand story section
온도의 철학(따뜻할 溫 + 실천할 DO)과 공간으로서의 의미를 전달하는 브랜드 스토리 섹션을 포함해야 한다(SHALL).

#### Scenario: Brand story visible
- **WHEN** 사용자가 온도 소개 섹션으로 스크롤한다
- **THEN** "따뜻할 溫(온)"과 "실천할 DO(두)"의 의미, 온도가 추구하는 가치(판단 없는 경청, 마음의 온도 찾기, 삶의 변화를 위한 실천)가 표시된다

### Requirement: Warm visual atmosphere
사이트 전체에 걸쳐 따뜻한 톤의 컬러 팔레트와 부드러운 시각 요소가 적용되어야 한다(SHALL).

#### Scenario: Color consistency
- **WHEN** 사용자가 페이지를 처음부터 끝까지 스크롤한다
- **THEN** 테라코타, 웜 베이지, 소프트 브라운 계열의 일관된 컬러가 모든 섹션에 적용되어 있다

### Requirement: Psychological safety in design
디자인 요소가 방문자에게 심리적 안전감을 주어야 한다(SHALL). 공격적이거나 긴급함을 유발하는 시각적 요소를 사용하지 않는다.

#### Scenario: No aggressive visual elements
- **WHEN** 페이지가 로드된다
- **THEN** 빨간색 경고, 카운트다운 타이머, 긴급성을 유발하는 팝업 등이 존재하지 않는다

#### Scenario: Gentle animations
- **WHEN** 사용자가 페이지를 스크롤한다
- **THEN** 섹션 진입 시 부드러운 fade-in 애니메이션이 적용되며, 갑작스러운 움직임이 없다
