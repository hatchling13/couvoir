---
date: "2023-08-01"
description: 함수형 걸음마 떼기
taxonomies:
  categories:
  - retrospect
  tags:
  - 회고
title: 2023년 7월 회고
---

비교적 더위에는 강하다고 자평하고 있었는데, 이번 한 달을 나보니 알 것 같다. 과한 더위는 사람을 꺾이게 만든다. 몸도 마음도 녹아서 흐물흐물해지는 한 달이었다... 그래도 이번 달에는 비교적 의미있는 일들을 해서 만족스럽다. 다양한 활동을 한 건 아니지만, 여러 사람들과 교류할 수 있는 기회가 생겨 기쁘기도 하고...
<!-- more -->

# JLPT 시험
7월 초에는 JLPT 시험을 쳤다. 물리적인 시간으로만 치면 한 달밖에 되지 않았는데 벌써 까마득하다. 절대 잘 보지는 않았던 걸로 기억한다. 청해는 예상한 대로 아무 어려움 없이 편안하게 풀 수 있었는데 그 놈의 독해... 독해가...! 뒷 부분은 다 찍을 수밖에 없었다. 돈 아깝다는 이유만으로 처음부터 가장 높은 등급을 도전하는 건 역시 좀 무리가 있었던 것 같다. 다음 번에 다시 시험을 보게 된다면 그 때는 N2부터 차근차근 밟아올라가야겠다. 후회가 막심한 정도까지는 아니지만, 살짝 남긴 남는다.

# 2023 오픈소스 컨트리뷰션 아카데미 Challenges
이번 회고의 메인은 역시 OSSCA를 꼽을 수 있겠다. 솔직히 별 기대 안 하고 있었는데 결과 이메일 받았을 때 좀 얼떨떨했다. 참여하게 된 프로젝트는 [`ZIO`](https://zio.dev/)다. 1지망을 붙다니 운도 좋지. 엑셀콘에서 알게 된 친구도 같은 프로젝트에 붙어서 서로 축하해줬던 기억이 있다. 발대식은 오프라인 필참이었는데 혼자 뻘쭘하게 안 있어도 되어서 다행이었다ㅋㅋ 문제는 이후의 오프라인 모임들도 다들 서울에서 열리는지라 참가할 수 없다는 것이다. 온라인 모임을 잡아주시긴 하는데 아무래도 참여하는 인원의 수가 오프라인보다 적기도 하고, 직접 모여서 같이 으쌰으쌰하는 분위기는 아무래도 오프라인 쪽이 더 좋으니까... 지방민의 비애랄까.

## Scala를 처음 접했다
저번 달 글에도 이미 썼던 바 있지만, 함수형 프로그래밍 개념을 메인으로 내세우는 언어를 한 번은 써보겠다는 생각은 있었어도 실제로 실행에 옮기지는 않았었다. 막연하게 어렵겠다고만 생각해서 감히 시도할 생각을 못했지만, 이번 기회를 통해 제대로 시간을 들여서 숙련도를 높여봐야겠다.

## 범주론에 대한 간단한 이해
함수형 프로그래밍에 자주 등장하는 대수적 자료형(Algebraic Data Type, ADT)에 대한 이해를 높이기 위해, ADT와 그 이론적 기초가 되는 범주론에 대해 [공부한 바를 정리하는 글](https://hatchery.pages.dev/algebraic-data-type/)을 썼다. 동영상 강의를 들으며 머리에 김나는 느낌을 받은 건 참 오랜만이었던 것 같다.

## [Advent of Code 2022](https://github.com/hatchling13/advent-of-code-2022) 도전
Scala에 익숙해지기 위해 개인적으로 연습을 해야겠다는 생각이 들었는데, 뭘 할까 생각하다가 예전에 봐뒀던 [Advent of Code](https://en.wikipedia.org/wiki/Advent_of_Code)를 도전해보기로 했다. 일반적으로 할 만한 백준이나 LeetCode가 아니라 AoC를 고른 이유는 다음과 같다:

1. 온라인 저지 시스템이 아니고 입력 파일에 대한 답을 입력하는 것뿐이기 때문에 실행시간 같은 요소를 신경쓰지 않아도 된다.
2. 문제 자체의 난이도가 높지 않다.

이후에 Scala가 아닌 다른 언어로도 풀고 싶어서 별도로 디렉토리를 만들어서 그 안에 관련 풀이들을 위치시켜놓았다. 언젠가는 다른 언어로도 하겠지, 언젠가는...?

## 온라인 모임 참가
Scala의 자료구조를 활용하여 데이터를 모델링하는 법, `ZIO` 에코시스템을 활용하기, http 통신 등의 기초 학습을 진행하였다. 현재까지는 그저 새로운 언어와 라이브러리를 다루는 게 재밌지만, 명색이 오픈소스 컨트리뷰션 아카데미인 만큼 뭔가 기여를 하나라도 하고싶다는 목표를 가지게 되었다. 우선 7월 한 달간은 Challenges라는 이름 하에 온보딩 느낌으로 해왔는데, 이후 본격적으로 진행되는 Masters 프로그램에서는 어떤 것들을 하게 될 지 기대된다.

# 정리

## 이번 달의 잘한 점

1. 원래는 가만히 있으려고 했는데, 조건도 어느 정도 맞다 싶어서 리드멘티 신청을 해서 리드멘티가 되었다. 딱히 달라지는 건 없고 수료증에 뭐가 더 붙는다고 하셨다ㅌㅋㅋㅋ 원래 같았으면 나같은 게 무슨... 하면서 가만히 있었을텐데, 지르고 볼 일이다.

## 이번 달의 못한 점

1. 시간을 갈아서 마비노기 메인스트림을 다 깼다... 뿌듯하긴 한데 생...산적이지는 않은 것 같아서. 못한 일로 넣었다.

## 끝으로
이번 달은 뭔가 일이 있었긴 해도 뭐랄까, 충실했다는 생각은 별로 안 드는 것 같다. 역치가 낮아져서 그런가? 8월에는 이런 기분이 덜하도록 좀 더 밀도있게 살아봐야겠다.