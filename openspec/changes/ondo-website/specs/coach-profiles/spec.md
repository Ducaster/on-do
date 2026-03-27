## ADDED Requirements

### Requirement: Coach profiles section
메인 페이지에 상담코치들의 프로필을 소개하는 섹션을 포함해야 한다(SHALL). 각 코치의 이름, 사진, 직함, 전문 분야, 주요 이력이 표시된다.

#### Scenario: Coach profiles visible
- **WHEN** 사용자가 코치 소개 섹션으로 스크롤한다
- **THEN** 등록된 모든 코치의 프로필 카드가 표시된다 (이름, 사진, 직함, 전문 분야)

### Requirement: Coach profile detail
각 코치 프로필 카드에서 상세 이력을 확인할 수 있어야 한다(SHALL).

#### Scenario: View coach detail on desktop
- **WHEN** 사용자가 코치 프로필 카드를 클릭한다
- **THEN** 해당 코치의 자격 사항, 경력, 전문 분야 상세 설명이 모달 또는 확장 영역으로 표시된다

#### Scenario: View coach detail on mobile
- **WHEN** 모바일 사용자가 코치 프로필 카드를 탭한다
- **THEN** 해당 코치의 상세 정보가 아코디언 또는 풀스크린 모달로 표시된다

### Requirement: Coach profile visual consistency
코치 프로필은 따뜻하고 신뢰감 있는 시각적 스타일을 유지해야 한다(SHALL).

#### Scenario: Profile photo and layout
- **WHEN** 코치 프로필이 표시된다
- **THEN** 원형 또는 부드러운 모서리의 프로필 사진과 함께 이름, 직함이 가독성 있게 배치된다
