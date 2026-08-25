---
title: Gluegun
summary: Expo 앱과 Unity 사이의 통신을 돕는 라이브러리
draft: false
status: experimental
technologies:
  - TypeScript
  - C#
  - Expo
  - Unity
links:
  - kind: repository
    url: https://github.com/butter-soft/gluegun
  - kind: package
    url: https://www.npmjs.com/package/@bvtter/gluegun
---

## 배경

회사에서 진행한 PoC에서 Unity로 만든 AR 프로젝트를 모바일 애플리케이션에 통합해야 했습니다. Unity를 Unity as a Library 형태로 사용하기 위해서는 작업자가 직접 처리해야 하는 밑작업이 많았습니다.

특히 iOS 연동 과정에서는 TypeScript와 C#뿐만 아니라 Objective-C 코드까지 작성해야 했습니다. Unity와 Expo 앱 사이의 통신 방식도 표준화되어 있지 않았습니다. 이런 연동 과정을 간소화하고 일관된 통신 창구를 제공하기 위해 Gluegun을 만들었습니다.

## 무엇을 하는가

Gluegun은 Unity 프로젝트와 Expo 앱 사이에서 정보를 주고받을 수 있도록 통신 창구를 제공합니다. 정해진 메시지 계약을 따르면 양쪽에서 JSON 형식으로 정보를 주고받을 수 있습니다.

플랫폼마다 통신 방식을 처음부터 직접 구성하는 대신, Unity와 Expo 각각에 제공되는 패키지를 통해 일관된 방식으로 연동할 수 있습니다.

## 설계와 구현

각 영역에서 가장 적합하다고 생각하는 구현 방식을 따르는 데 신경 썼습니다. Expo 쪽에서는 config plugin을 이용해 Android와 iOS에 필요한 Unity 빌드 산출물을 다룹니다.

통신은 JSON을 기반으로 하지만 특정 JSON 파서에 의존하지 않도록 Unity 쪽에 직렬화 인터페이스를 열어 두었습니다. 사용자는 필요한 구현체를 직접 선택해 메시지를 처리할 수 있습니다.

또한 실제 사용 흐름을 따라갈 수 있도록 설치 방법, 플랫폼별 연동 과정, 메시지 계약을 문서화했습니다.

## 현재 상태

회사에서 진행한 PoC를 통해 Gluegun이 정상적으로 동작한다는 점을 확인했습니다. 다만 아직 이 라이브러리를 사용하는 공개된 프로그램은 없습니다.

실제 제품에서 충분히 검증된 상태는 아니므로 현재는 실험 단계로 두고 있습니다.
