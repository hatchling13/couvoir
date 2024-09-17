---
date: "2024-09-17"
description: 많은 일이... 잇엇ㄷ따(의도된 오타)
taxonomies:
  categories:
  - retrospect
  tags:
  - 회고
title: 2024년 8월 회고
---

트위터에서 입사 직후에 아무런 일을 시키지 않는 회사들이 꽤 있다는 글을 봤다. 그렇게 생각하면 내 경우에는 오히려 좋다고 해야 하려나? 일단 그래도 뭔가를 받아서 하고 있긴 하니까... ["주니어가 되는 것을 그만두세요"](https://hellomooneekim.netlify.app/stop-being-a-junior/)라는 글도 있는 걸 보면 "나는 신입인데 이래도 되나"하는 생각은 안 하는 게 맞겠지. 뭔가를 할 수 있음에 기뻐하는 방향으로 계속 생각하려 한다. 실제로 이전에 해보지 못했던 것들을 시도해보며 즐거운 점이 있기도 하고(물론 머리 부여잡고 있는 시간이 더 긴 것 같은디)~

이전까지는 회고하려는 달에 맞는 날들에 일어난 일들만 최대한 작성하려고 했지만, 그럴 필요가 있나 싶은 생각이 든다. 다음에 적을 분량이 적어질 것을 우려해 기록을 미루게 되면 정작 마음먹은 때 가서 기억이 나지 않게 될 수도 있다는 생각이 들었다. 나 혼자 보려고 적는 건데 왜 그런 내용을 계속 생각하게 된 걸까. 남들에게 보이는 곳에다 무언가를 남긴다는 사실이 생각보다 부담이 있는 행위라서 그럴지도 모르겠다. 앞으로는 좀 더 가볍게 가볍게 가봐야겠다.

# 새로운 기술 탐구
업무를 진행하며 평소에 말은 많이 들었는데 실상 사용해보지 못했던 여러 가지 라이브러리를 사용해보게 되었다. 그 중 중요한 것 몇 가지를 꼽아보자면, 클라이언트 측 데이터 가져오기 관련 사실상의 표준이 되어버린 Tanstack Query와 프론트엔드 [`공방(Workshop)`](https://bradfrost.com/blog/post/the-workshop-and-the-storefront/) 환경을 제공하는 Storybook일 것이다.

## Tanstack Query
React 베이스 프론트엔드 엔지니어를 표방하는 주제에 회사에 들어오기 전에는 한 번도 React Query를 사용해본 적이 없다고 한다면 놀라운 일일까? 누군가에게는 꽤나 놀라운 이야기일수도 있겠다는 생각은 든다. 처음 쓸 때는 약간 좌충우돌이 있었다. 일정 기간 동안만 유효한 인증 정보를 받아온 후 해당 기간 동안 정해진 시간 간격으로 인증 성공 여부를 폴링하는 코드를 작성해야 했는데, 초마다 줄어드는 타이머가 리렌더링될 때마다 계속 인증 정보를 다시 받아오는 식으로 코드가 동작해서 어어 왜 이러지하다가 결국 급한 대로 익숙한(또는 끔찍한) `useEffect` 코드로 땜빵했던 기억이 난다. 이후 업무를 정식으로 인계받게 되며(저번 달 회고에서 이야기했던 스타일링만 하고 넘겨준 그 코드가 맞다......), 행복이 가득한 선언적인 코드로 리팩토링할 수 있어 다행이라는 생각이 든다. 앞으로 자주 신세를 지게 될 예정인 라이브러리니만큼 좀 더 익숙해져야겠다.

## Storybook
처음에는 프로젝트 기한에 어느 정도 여유가 있어 있으면 좋고 없으면 말고~ 같은 찍먹 감성으로 도전해보자 하는 마음으로 쓰게 되었다. 프로덕션 환경과 격리된 Workshop이라는 별도의 환경을 두는 경험을 해볼 수 있었다는 점에서 큰 의미가 있다고 생각한다. 특정한 상태의 컴포넌트를 [Story](https://github.com/ComponentDriven/csf)라는 단위로 나타내는 것 또한 마음에 들었다.

물론 마음에 드는 점만 있는 것은 아니었다. 예를 들어 버튼을 하나 만든다 생각해보자. Figma 디자인 문서를 살펴보니 버튼은 4가지의 variant, 4가지의 size, 2가지의 outlined 상태 중 각각 한 가지씩을 입력받을 수 있다고 적혀있었다. 각 variant 간의 차이는 색상뿐이라 가정하자. 이런 경우, 작성해야 하는 Story의 수는 4 * 4 * 2 = 32가지가 된다. 이걸 일일이 손으로 적고 있자니 대체 뭐하는 짓인가 싶은 생각이 들었다. 꼼수로 반복문을 돌려야 하나 생각이 들다가도, [이런 글](https://simsimjae.tistory.com/391)을 봐버린 이상 그럴 수는 없는 것이다...

여담이지만 글을 작성하며 이러한 현상이 전산학 세상에서는 이미 [다른 형태](https://incheol-jung.gitbook.io/docs/study/object/2020-03-10-object-chap11#undefined-1)로 등장한 바 있으며 [조합적 폭발](https://intelligence.worldofcomputing.net/ai-search/combinatorial-explosion.html#.WPUxSIWcEiQ)이라는 이름도 가지고 있다는 점을 알게 되었다. [아이스크림을 예시로 든 이 게시글](https://www.freecodecamp.org/news/combinatorics-handle-with-care-ed808b48e5dd/)을 보면 이해하기 쉬울 것 같다. 예전에 봤던 발표 세션 중 비슷한 문제를 해결하기 위한 한 가지 접근 방식을 제시하는 [영상](https://www.youtube.com/watch?v=Hv_PhrfwerQ)이 있었는데, 해당 부분을 좀 더 파볼 수도 있을 것 같다.

# 코드스냅
8월에 다루었던 글감은 코딩 시 알아두면 좋을 여러 가지 명명 규칙 제안에 대해서였다. 전산학에서 가장 어려운 주제 두 가지가 이름 짓기와 캐시 무효화라는 말이 있을 정도로 이름 짓기는 머리를 싸매게 되는 문제이며, 관련 글도 참 많이 보이곤 한다. 해당 글은 이름의 중요성을 간단한 예시와 함께 역설하며, 초심자가 어느 정도 가이드라인으로 삼을 만한 여러 규칙들을 제안하고 있어 다루게 되었다.

글을 번역하며 느낀 점은, (사실 언제나 그렇듯) 언어들마다 기존에 주장하던 모범 사례들이 각각 달라 모든 상황에 들어맞는 완벽한 원 포인트 해결책은 없다는 점이었다. 이론적인 레벨로 들어가자면 물론 의미있고 명확한 이름을 지으라는 말을 할 수 있겠지만, 사람들마다 무엇이 의미있게 다가오고 명확하게 느껴지는 지가 다르기 때문에 논쟁이 벌어질 수 있는 것이다. 예를 들어 과거 WINAPI를 찍먹하던 시절의 나는 헝가리안 표기법을 쓰며 행복했지만, IDE가 강력해진 지금의 내가 당시의 자신을 본다면 안타까운 눈으로 바라볼 것이다. 무엇이 되었던 주변 환경과 문맥에 큰 영향을 많이 받을 수밖에 없는 거겠지. 하지만 그럼에도, 더 나은 방법을 찾기 위해 항상 고민을 멈추지 말아야 할 것이다.

# 정리
## 이번 달의 잘한 점
1. 별 거 있을까? 제 때 일어나서 성실히 회사를 가고 할 일을 한다... 이 따위 사회에서 다음 달에도 살아남을 수 있겠다는 희망을 가질 수 있는 것만으로도 칭찬받아야 한다!!! 물론 다른 사람들을 보고도 같은 말을 할 것이다. 이번 한 달도 멸종되지 않았으니 참 잘했어요.
2. 11월의 나를 위해 문화생활을 예약해두었다. 재즈 빅밴드 공연 매우 기대됩니당~!
3. 주택청약 적금을 다시 살려보려고 한다. 기존 미납회차 개월수가 조금 되지만 당장 뭔가 넣을 생각은 없어서 한 반 년 정도에 걸쳐서 살리고, 앞으로 꼬박꼬박 세이브하다보면 청약은 힘든 세상이라도 적어도 목돈은 어느 정도 모이겠지.

## 이번 달의 못한 점
1. ㅋㅋㅋㅋㅋㅋ17일ㅋㅋㅋㅋㅋㅋㅋ이젠 뭐 보름도 넘기고ㅋㅋㅋㅋㅋㅋㅋ
2. 뭔가 하고 싶은 것은 조금씩 있는데 막상 집에 오면 퍼질러져버린다...만, 잘한 점 1번을 봐주세요. 제 안의 양가감정이 이 모양입니다, 예.

## 그 외 자잘한 점
1. 평양냉면이 맛있는 것 같다. 처음엔 "왜 먹는지는 알겠다" 정도였는데... 앞으로 식도락 생활이 더 재밌어질 예정이다.
2. 안경이 테고 알이고 다 코팅이 벗겨져서 새로운 안경을 맞췄다. 알은 벗겨진 쪽이 직접적인 시선을 통하지 않는 아랫쪽이라 상관이 없었는데, 이놈의 테를 쓰고 있으려니 자꾸 다리랑 닿는 쪽 피부에 염증이 나서 안 되겠다 싶었다. 예상보다 싸던데? 간만에 다시 뿔테로 돌아간다... 다시는 메탈 소재 테를 쓰지 않으리...
3. 본가 내려가서 몇 개월만에 몸무게 재어봤는데 별로 달라진 게 없었다. 분명히 야무지게 먹고 살았던 거 같은디...
4. `eslint-jsx-a11y`가 마참내 `eslint` 9 버전을 지원하게 되었다... 확인하는 즉시 dependabot 설정에서 ignore하는 설정을 지워버렸다. 속이 다 시원하다... 이제 이상한 deprecated subdependencies 뜨는 것들만 좀 어떻게 해줬으면 좋겠는데... 대충 [이런 문제](https://github.com/mapbox/node-pre-gyp/issues/877)가 있고, [이런 작업](https://github.com/mapbox/node-pre-gyp/pull/829)이 진행되는 모양이다. 내부적으로 혼선이 좀 있는 것 같아서 잘 해결되었으면 좋겠다는 바람이다.