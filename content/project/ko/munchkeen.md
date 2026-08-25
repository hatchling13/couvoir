---
title: Munchkeen
summary: Solid 기반 인터랙티브 그래프 탐색 도구
draft: false
order: 1
status: experimental
technologies:
  - TypeScript
  - SolidJS
  - Cytoscape.js
links:
  - kind: website
    url: https://munchkeen.hatchling.dev
  - kind: repository
    url: https://github.com/hatchling13/munchkeen
  - kind: package
    url: https://www.npmjs.com/package/munchkeen
---

## 배경

각 문서가 연결되어 있다는 사실을 시각화하여, 한 문서에서 이웃한 문서로 탐색할 수 있는 기능을 만들고 싶었습니다.

해당 기능을 먼저 별도 도구로 공개한 다음 개밥먹기 주도 개발을 해보고 싶어 만들게 되었습니다.

그래프 자료구조를 다루기에 적합한 Cytoscape.js를 사용하고 싶었습니다.

또한 컴포넌트 기반 개발이 익숙한 저는, UI 요소를 다룰 때의 성능이 뛰어난 Solid.js를 경험해보고 싶어 wrapper를 만드는 방향으로 진행하게 되었습니다.

## 무엇을 하는가

Munchkeen은 정점과 간선으로 이루어진 그래프 데이터를 웹페이지에 렌더링하고 탐색할 수 있게 하는 도구입니다. 선택한 정점을 중심으로 바로 이웃한 정점과 간선이 보이도록 그래프를 다시 구성하여 연결 관계를 따라갈 수 있습니다.

사용자는 정점을 드래그해 위치를 옮기거나 정점과 간선을 선택할 수 있습니다. 또한 스크롤을 통해 그래프가 그려지는 영역을 확대하거나 축소할 수 있습니다.

## 설계와 구현

중심 로직을 framework-agnostic하게 분리하는 것에 신경 썼습니다. 그래프를 검증하고, 현재 보여줄 부분을 추려내고, 배치하고, 렌더러가 적용할 변경 사항을 계산하는 과정은 특정 UI 라이브러리나 렌더러에 의존하지 않는 순수한 로직으로 분리했습니다.

Solid는 이 중심 로직을 컴포넌트 API와 연결하고, Cytoscape.js 어댑터는 계산된 결과를 실제 화면에 반영합니다. 덕분에 나중에 다른 UI 라이브러리를 위한 wrapper나 렌더러가 필요해지더라도 그래프를 다루는 로직은 그대로 유지할 수 있습니다.

이러한 분리가 사용자에게 복잡한 내부 추상화로 드러나지 않도록 컴포넌트 props를 최소화했습니다.

## 현재 상태

현재 Munchkeen은 실험 단계입니다. 아직 실제 제품에 적용해 사용해 보지 않았기 때문입니다.

처음 의도했던 제품에 Munchkeen을 적용하고, 개밥먹기를 통해 실제 사용 맥락에서 검증하는 것이 다음 단계입니다. 이 과정에서 원래 의도한 방식으로 사용할 수 있음을 확인하면 실험 단계를 벗어났다고 판단할 수 있을 것 같습니다.
