## ADDED Requirements

### Requirement: Coach login page
상담코치 전용 로그인 페이지(/coach/login)를 제공해야 한다(SHALL). 이메일과 비밀번호로 인증한다.

#### Scenario: Successful login
- **WHEN** 등록된 코치가 올바른 이메일과 비밀번호를 입력하고 로그인 버튼을 누른다
- **THEN** 코치 대시보드(/coach/dashboard)로 리다이렉트된다

#### Scenario: Failed login
- **WHEN** 잘못된 자격 증명으로 로그인을 시도한다
- **THEN** "이메일 또는 비밀번호가 올바르지 않습니다" 에러 메시지가 표시되고 로그인 페이지에 머문다

### Requirement: Coach-only access control
코치 대시보드(/coach/*)는 인증된 코치만 접근 가능해야 한다(SHALL).

#### Scenario: Unauthenticated access attempt
- **WHEN** 로그인하지 않은 사용자가 /coach/dashboard에 접근한다
- **THEN** /coach/login 페이지로 리다이렉트된다

#### Scenario: Authenticated coach access
- **WHEN** 로그인한 코치가 /coach/dashboard에 접근한다
- **THEN** 대시보드 콘텐츠가 정상적으로 표시된다

### Requirement: Coach dashboard - inquiry management
코치 대시보드에서 접수된 상담 문의 목록을 확인하고 상태를 관리할 수 있어야 한다(SHALL).

#### Scenario: View inquiry list
- **WHEN** 코치가 대시보드에 접속한다
- **THEN** 접수된 상담 문의 목록이 최신순으로 표시된다 (이름, 연락처, 프로그램, 접수일, 상태)

#### Scenario: Update inquiry status
- **WHEN** 코치가 문의 항목의 상태를 "접수됨"에서 "상담 진행중"으로 변경한다
- **THEN** 상태가 업데이트되고 목록에 즉시 반영된다

### Requirement: Coach session logout
코치가 로그아웃할 수 있어야 한다(SHALL).

#### Scenario: Logout
- **WHEN** 코치가 로그아웃 버튼을 클릭한다
- **THEN** 세션이 종료되고 메인 페이지(/)로 리다이렉트된다
