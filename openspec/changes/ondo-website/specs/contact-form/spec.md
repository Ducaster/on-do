## ADDED Requirements

### Requirement: Contact form fields
상담 문의 폼은 다음 필드를 포함해야 한다(SHALL): 이름(필수), 연락처(필수), 카카오톡 ID(선택), 원하시는 상담 프로그램 선택(1~5, 필수), 개인정보 활용 동의 체크박스(필수).

#### Scenario: Form renders all fields
- **WHEN** 사용자가 상담 문의 섹션에 도달한다
- **THEN** 이름 입력, 연락처 입력, 카톡 ID 입력, 프로그램 선택(5개 옵션), 개인정보 동의 체크박스, 제출 버튼이 표시된다

### Requirement: Form validation
필수 필드가 비어있거나 형식이 올바르지 않은 경우 제출이 차단되어야 한다(SHALL).

#### Scenario: Empty required field
- **WHEN** 사용자가 이름 필드를 비운 채 제출 버튼을 누른다
- **THEN** "이름을 입력해주세요" 안내 메시지가 해당 필드 아래에 표시되고 폼이 제출되지 않는다

#### Scenario: Privacy consent not checked
- **WHEN** 사용자가 개인정보 동의를 체크하지 않고 제출한다
- **THEN** "개인정보 활용에 동의해주세요" 메시지가 표시되고 폼이 제출되지 않는다

### Requirement: Form submission feedback
폼 제출 성공 시 사용자에게 명확한 피드백을 제공해야 한다(SHALL).

#### Scenario: Successful submission
- **WHEN** 사용자가 모든 필수 필드를 올바르게 채우고 제출한다
- **THEN** "문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다." 확인 메시지가 표시되고 폼이 초기화된다

#### Scenario: Submission failure
- **WHEN** 네트워크 오류로 폼 제출이 실패한다
- **THEN** "전송에 실패했습니다. 잠시 후 다시 시도해주세요." 에러 메시지가 표시된다

### Requirement: Privacy policy link
개인정보 동의 체크박스 옆에 개인정보처리방침 전문을 확인할 수 있는 링크를 제공해야 한다(SHALL).

#### Scenario: Privacy policy access
- **WHEN** 사용자가 "개인정보처리방침" 링크를 클릭한다
- **THEN** 개인정보처리방침 페이지가 새 탭에서 열린다
