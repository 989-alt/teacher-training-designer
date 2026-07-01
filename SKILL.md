---
name: teacher-training-designer
description: Designs multi-session teacher professional-development trainings (교원연수/직무연수) that are explicitly justified against a competency/behavioral-indicator framework (역량체계, 행동지표) — by default Korea's "AI·디지털 교육 역량체계" (A~G, 21개 세부지표), or any other framework the user supplies. This skill should be used when a user asks to plan a 차시별 교원연수, wants activities mapped to specific 역량/행동지표, says things like "역량 기반 연수 설계해줘", "차시별 진행안 짜줘", "이 역량표 참고해서 연수 계획 세워줘", or shares a competency-table URL/screenshot alongside a training topic and session count. Not for single classroom lessons aimed at students (use a general lesson-planning approach instead), and not for trainings where no competency justification is needed.
---

# Teacher Training Designer

## Overview

이 스킬은 "연수 주제 + 차시 수"를 입력받아, 역량·행동지표 프레임워크에 명시적으로 근거를 둔 차시별 교원연수 설계안을 만든다. 대화형으로 제약 조건을 확인하고, 역량 조합을 트레이드오프와 함께 제안하고, 분 단위 진행안을 지표와 연결해 설계한 뒤 문서로 저장하는 전 과정을 다룬다.

## Workflow

### Step 0. 프레임워크 확보

사용자가 역량체계 표·URL·스크린샷을 제공했는지 확인한다. URL이면 WebFetch로 먼저 시도하고, 실패하면(JS 렌더링 페이지 등) 브라우저 자동화 도구(mcp__claude-in-chrome__*)로 재시도한다. 표를 구할 수 없으면 `references/competency-framework.md`에 있는 기본 프레임워크("AI·디지털 교육 역량체계", A~G 7역량×3지표=21개)를 기본값으로 쓸지 사용자에게 확인한다. 참고할 예시 교안(다른 교사의 완성 사례)이 있다면 함께 열어 서식을 파악하고 `references/example-document-format.md`와 대조한다.

### Step 1. 핵심 제약 조건 확인 — 한 번에 하나씩 질문

brainstorming 스킬과 동일한 원칙(한 번에 하나씩, 객관식 선호, 추천안을 첫 번째 선택지로)을 따른다. 반드시 확인할 항목 4가지 — 사용자가 이미 답한 항목은 다시 묻지 않는다:

1. **참가자 사전지식 수준** — 전체 난이도·진도를 좌우하는 가장 중요한 변수
2. **연수 종료 후 최종 목표/산출물** — 콘텐츠 전체를 결정
3. **역량 조합 방향** — `references/competency-framework.md`의 "역량 성격 요약"과 "조합 관례"를 근거로 2~3개 후보를 트레이드오프와 함께 제시하고 추천안을 명시
4. **일정 구조(연속/분산)** — 사전과제 가능 여부와 1차시 시간 배분을 좌우

### Step 2. 개요 제시 및 확인

제목 / 강의 목표(인지적·정의적·행동적 3분법) / 대상 / 활용 도구 / 진행 방식을 200~300단어로 제시하고 확인받는다 (`assets/design-template.md` 1절 형태). 확인 없이 다음 단계로 넘어가지 않는다.

### Step 3. 역량 연계 구조 제시 및 확인

`assets/design-template.md` 2절 형태로 다음을 제시한다:
- 핵심 역량 선택(최대 2개 원칙 — 무리해서 채우지 않음)
- 전체 세부지표 중 실제로 다루는 것만 볼드 강조
- 역량 선택 기준(왜 이 조합인지, core가 아닌 역량을 실습에 녹였다면 그 이유)
- **지표 ↔ 차시 활동 ↔ 관찰 가능한 행동 매핑표** — 활동을 아직 세부 설계하지 않았다면 "몇 차시, 어떤 성격의 활동"까지만 먼저 잡고 Step 4에서 구체화해도 된다.

### Step 4. 차시별 세부 진행안

차시마다 도입-전개-정리를 분 단위로 설계한다. 전개는 Step1/Step2/Step3...으로 세분화하고 각 Step에 관련 지표를 태그(`[A1]`, `[G2 착수]` 등)로 표시한다.

사용자가 특정 기술적 내용(설치 명령어, 특정 개념·도구 등)을 반드시 포함해 달라고 요청하면:
- 어느 차시·어느 Step에 넣을지 정하고, **분 단위 합이 해당 차시 총 시간과 정확히 일치하는지 검산**한다
- 내용이 촘촘해져 시간이 부족해지면 정리 시간을 줄이거나 다음 차시로 이월하는 방식으로 흡수하고, 이 사실을 Step 5의 페이싱 노트에 명시한다 — 조용히 잘라내지 않는다
- 설치 명령어처럼 OS·버전에 따라 달라지는 내용은 실제로 정확한 명령어인지 확인 후 코드블록으로 제시한다 (부정확한 명령어를 실습에 포함하지 않는다)

### Step 5. 운영 리스크 및 페이싱 노트

현장에서 실제로 막힐 만한 지점(기기 권한, 설치 실패, 시간 초과 등)과 대안을 반드시 포함한다. 설치·환경설정 실습이 있는 연수는 특히 빠뜨리지 않는다.

### Step 6. 문서 저장

`assets/design-template.md`를 뼈대로 최종 문서를 완성해 저장한다. 저장 위치를 사용자가 지정하지 않으면 현재 작업 중인 프로젝트 폴더의 `docs/plans/YYYY-MM-DD-<주제>-training-design.md`를 기본값으로 제안한다. git commit은 사용자가 명시적으로 요청할 때만 수행한다.

## 참고 자료

- `references/competency-framework.md` — 기본 역량체계 표(A~G, 21개 지표) 전문 + 역량 성격 요약 + 조합 관례(실측 사례 포함)
- `references/example-document-format.md` — 원본 예시 교안에서 추출한 문서 구조, 그리고 "학생 대상 단일 수업" 원본과 "교사 대상 다차시 연수"인 이 스킬 산출물이 어떻게 다른지
- `assets/design-template.md` — 최종 산출 문서의 빈칸 템플릿 (모든 절 포함)

## 원칙

- **한 번에 하나씩 질문한다.** 여러 항목을 한 메시지에 몰아 묻지 않는다.
- **섹션 단위로 제시하고 매번 확인받는다.** 개요 → 역량연계 → 차시별 진행안 순으로, 앞 섹션이 확정되기 전에 뒤 섹션을 설계하지 않는다. 단, 사용자가 명시적으로 "한 번에 다 보여줘"라고 하면 따른다.
- **역량 개수를 억지로 채우지 않는다.** 관련성이 낮은 역량을 개수 맞추기용으로 추가하지 않는다. 최대 2개 core 원칙이 기본이며, 사용자가 그 이상을 요구하면 왜 벗어나는지 근거를 함께 제시한다.
- **사용자가 지정한 필수 포함 요소는 절대 누락하지 않는다.** 명령어, 개념, 도구명 등을 요청받으면 반드시 시간 배분에 정확히 반영하고, 정확성(특히 실행 명령어)을 검증한다.
- **지표는 활동과 관찰 가능한 행동에 반드시 연결한다.** "이 역량을 다룬다"고 선언만 하지 않고, 어느 Step에서 무엇을 하면 그 지표가 드러나는지 항상 명시한다.
