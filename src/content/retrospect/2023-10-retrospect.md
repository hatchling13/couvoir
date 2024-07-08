---
date: "2023-11-09"
description: 의미있는 외부 활동들이 많았던 달이야
taxonomies:
  categories:
  - retrospect
  tags:
  - 회고
title: 2023년 10월 회고
---

이번 한 달간은 정말 많은 일들이 있었다. 물론 글을 늦게 쓰게 된 것은 순전히 내 게으름때문이라서 변명하고 싶진 않지만, 평소와는 다르게 외부 활동이 많았던 한 달이라 이동하면서 쌓이는 피로가 이만저만이 아니었기에 조금이나마 정상 참작이 되지 않을까... 그래도 그만큼 새롭고 재밌는 일이 많아서 힘들지만 즐거웠던 한 달이었다. 어떤 일이 있었는지 정리를 해보도록 하자!
<!-- more -->

# 2023 오픈소스 컨트리뷰션 아카데미 성과발표회 및 종료
7월부터 진행되었던 이번 년도의 OSSCA가 끝이 났다. 손을 놓고 있었던 것은 아니지만, 성과발표회를 보고 있으려니 다른 팀들이 다들 너무 잘하셔서 살짝 기가 죽긴 했다. 그래도 발표를 맡아주신 대표멘티님이 열심히 준비하시고 별 문제없이(적어도 같이 작업했던 우리들 눈에는) 진행하셔서, 우리 프로젝트 이후 순서의 팀들은 비교적 가벼운 마음으로 지켜볼 수 있었다.

ZIO는 함수형의 색채가 강하게 묻어나는 라이브러리로, 단순히 가져다 쓰는 데에는 별다른 기반 지식이 없더라도 별 무리가 없지만 동작 방식을 이해하기 위해서는 함수형의 여러 복잡한 개념을 간단하게나마 짚고 넘어갈 필요가 있다. 그러다가 자칫 주화입마에 걸려 정작 필요한 지식은 얻지 못하고 토끼굴에 굴러떨어지게 될 가능성도 적지 않다. 함수형에 대한 기반 지식이 없는 멘티들의 입장에서, 코어 라이브러리 기여만을 목적으로 공부를 지속하다가는 기간 내에 아무런 결과물도 내지 못하게 될 수도 있다. 따라서 이번 OSSCA에서 우리 프로젝트 팀의 목표는 '라이브러리에 대한 직접적 기여'보다는 'ZIO를 실무에서 효과적으로 활용할 수 있는 용례를 학습하고, 그 과정에서 나오는 산출물을 정리하여 공개하기'로 변경되었다. 마침 ZIO는 물론이고, ZIO를 구현하는 데에 사용된 언어인 Scala에 대한 한국어 자료 또한 많지 않은 상황이었기 때문에 Scala/ZIO의 국내 생태계에 간접적으로 기여한다는 허울좋은 명분(ㅋㅋ) 또한 가져갔다고 본다.

## ZIO를 알게 된 이후
ZIO 및 그 기반을 담당하는 아이디어를 알게 되며, 기존에 사용하던 기술들을 새로운 시각으로 바라보는 시간을 갖게 되었다. 특히, 자주 사용하는 도구인 React를 돌아보며 이러한 느낌을 가장 강하게 받은 것 같다.

ZIO의 공식 문서를 살펴보면, 다음과 같은 서술을 찾을 수 있다:

> Similar to a blueprint or a workflow, functional effects are precise plans that describe a computation or interaction.
> When executed by the ZIO runtime system, a functional effect will either fail with some type of error, or succeed with some type of value.

내가 이 서술에서 주목한 점은 두 번째 줄의 'ZIO 런타임 시스템에 의해 실행되었을 때'라는 구절이었다. 사용자가 작성한 모든 `ZIO` 타입, 즉 '부수 효과가 존재할 수도 있는 일련의 연산들'은 ZIO 런타임 시스템에 의해 실행되어야 비로소 동작한다. `ZIOAppDefault` 객체의 `run()` 함수에서 `ZIO` 타입들을 chaining하는 것을 생각하면 된다. React의 `root.render(reactNode)`가 생각나지 않는가? ReactNode 타입을 '사용자 인터페이스를 정의하기 위한 정밀한 계획'이라고 본다면, 이들이 React 런타임 시스템에 의해 실행되어야 비로소 웹 브라우저에 우리가 작성한 UI가 출력될 수 있는 것이다. 대부분의 사람들에게는 '그게 뭐 대수라고?' 싶겠지만, 나는 이 둘 사이에서 발견한 유사성에 놀라움을 금할 수 없었다.

사용자가 궁극적으로 원하는 동작을 표현하는 통일된 문법의 코드가 존재하고, 이를 효과적으로 실행하기 위한 주체 코드가 별도로 존재하는 이 구조가 나에게는 너무 매력적으로 느껴졌다. ZIO를 알기 전에도 그랬다. ReactDOM이나 React Native만을 알던 때에서 벗어나, [`Ink`](https://github.com/vadimdemedes/ink) 또는 [`Satori`](https://github.com/vercel/satori)를 처음 접했을 때의 그 놀라움이란.

## 환원주의?
글을 쓰며 다시금 이 때 들었던 생각을 정리하게 되었는데, 궁극적으로 돌아가보면 추상화의 정도가 다를 뿐 결국 이러한 형태가 프로그래밍 언어의 본질이 아닌가 하는 생각도 든다. 실행하고자 하는 작업을 표현하는 언어와, 해당 언어를 통해 효과적으로 작업을 처리하는 내부 주체 코드. 컴퓨터의 성능이 그닥이었던 초기에는 작업자가 일일이 모든 작업을 어떻게 하면 좋을지 컴퓨터의 시각에서 생각하며 정해주었지만, 컴퓨터의 성능이 좋아진 지금은 내부 주체 코드가 알아서 가장 효과적인(효율적인이 아님에 주의하자) 방식대로 작업을 처리하는... 일종의 스펙트럼이라고 볼 수 있겠다는 생각도 든다. 사실 무슨 소리를 하고 싶은 건지 내 자신도 모르겠다. 그냥... 뭔가 벅찬 기분이 든다. 언젠가 이 쪽 방면의 생각을 좀 더 정리해볼 필요가 있을 것 같다. 개똥철학자가 된 기분이네.

# Hacktoberfest 2023 참가
OSSCA 이외에도 오픈소스 소프트웨어 행사에 참여했다. 이 쪽은 온라인으로도 충분히 가능하다. 뭔가 참여하고는 싶은데, 코드 레벨로 기여할 수 있는 게 별로 보이지 않아서 그냥 하지 말까 하다가 번역이라면 기여할 수 있지 않겠나 싶어서 [`tldr`](https://github.com/tldr-pages/tldr) 프로젝트에 한국어 번역을 추가하기로 했다. 엄청난 양의 기여를 하고 계시는 기여자 분이 계셔서 기여할 거리가 사라지진 않을까 살짝 두렵기도 했다. 내가 먼저 PR을 넣었던 번역이었는데 그 분의 PR이 먼저 머지되어서 PR을 닫았던 기억도 난다ㅋㅋ 물론 기여는 '내가 먼저 했는데'같은 걸 따지는 게 아니니까 상관은 없지만. 그래도 참여 완료를 위한 PR의 최소 개수인 4개를 채울 수 있었다. 덕분에 GitHub 프로필 페이지를 꾸밀 수 있는 [배지 서비스](https://www.holopin.io/@hatchling13#)도 적용할 수 있었고, [나무](https://tree-nation.com/certificate/653b583e3a9bf)도 한 그루 심을 수 있었다. 의미있는 행사에 더 많이 참여할 수 있으면 좋겠다.

# 2023 FEConf 스태프로 참가
IT 계열 커뮤니티 활동을 하게 되며 자주 듣던 말이 있었다.

> 당첨이 안 되어서 컨퍼런스 참가를 못한다면 연사자나 스태프로 지원해서 참가하는 방법이 있다.

사실 반쯤은 우스갯소리로 하는 말이고 듣는 사람들도 반쯤은 농담으로 흘려듣는 말이지만, 맞는 말이긴 하다는 것을 이번 FEConf에 현장 스태프로 참가하게 되며 다시금 느끼게 되었다. 스태프 연락방에 처음 초대되었을 때 든 생각은 '어차피 모든 세션이 온라인에 공개될 예정이니까, 맡은 일에 충실하고 일반 참가자 분이 현장에서 세션을 들으실 수 있게 빠져있어야겠다'였다. 그리고 이 생각은 완벽하게 현실이 되었다ㅋㅋ 수많은 참가자 분들이 오시는 행사가 잘 이루어질 수 있도록 미약하게나마 도울 수 있었던 것 자체를 자랑으로 생각하려 한다. 웹 프론트엔드 분야를 좋아하는 입장으로써, 이런 행사가 지속되는 것이 너무 기쁘다. 취업을 하고 기회가 된다면 FEConf가 앞으로도 잘 이어질 수 있도록 돕고 싶기도 하다.

행사가 끝나고 오거나이저 분들과 관계자 분들, 스태프들이 모여 뒤풀이도 했었다. 재직자 분들과 여러 이야기를 나누었는데, 그 때를 되돌아보면 취직도 못하고 현실도 모르는 녀석이 너무 이상적인 이야기를 늘어놓은 것은 아닌가하는 머쓱함이 아직도 드는 것 같다. 물론 내 자격지심이겠지만! 아, 얼른 취업하고 싶다.

# 우아한테크코스 프리코스 참가
10월 6일에 우아한테크코스 2024 서류 접수가 열렸다. 사실 최종 합격을 하겠다는 마음보다는 비는 시간 없이 뭐라도 하겠다는 마음 반, 프리코스에 대한 궁금증 반으로 지원서를 넣었다. 김칫국일지도 모르지만, 최종 합격을 한다고 하더라도 참여하지는 않을 것이다. 나는 당장 취업하는 것이 목표인 사람이고, 우테코는 10개월 간의 교육 프로그램이니까.

글을 올리는 현재, 프리코스 3주차 미션이 끝났다. 배운 것이 아주 없지는 않은 것 같다. 특히 Jest를 사용해보는 경험이 가장 의미깊었다. 미션 문제의 복잡도가 그리 높지 않아서 해결 자체는 어렵지 않게 할 수 있었다. 다만 참가하시는 다른 분들의 열정이 너무 대단해서 약간 기가 빨리는 느낌이다. 특이한 점으로는 사람들이 객체지향을 너무 좋아하는 것 같아보였다. React를 사용하고부터 객체지향 코드를 작성해본 게 가물가물한데... 프론트엔드 파트 커리큘럼에 떡하니 React가 있는데도 MVC를 적용한다느니, 디미터 법칙같은 고오급진 단어들이 나오질 않나... 심지어 3주차 미션의 경우 애초에 목표 자체가 클래스를 잘 나누는 것이라고 적혀있었다. 아직도 왜 그래야 하는지 납득이 되지는 않는다. 물론 알아두면 좋기야 하겠지만, 추상화의 단위는 객체만 있는 게 아니잖아... 음, 코치 분들이 다 생각이 있으시니까 그렇게 만드신 거겠지. 나는 한낱 취준생인데 뭐. 분명 내가 캐치하지 못한 무언가가 있을 것이다. 4주차 미션이 궁금해진다.

# 정리

## 이번 달의 잘한 점
1. 외부 활동에 많이 도전했다. FEConf에 스태프로 참가하게 된 건 아마 한동안 잊지 못할 경험이 될 것이다.
2. 많이 나다닌 것치고는 코딩을 좀 한 것 같다. 이건 우테코 프리코스의 공이 크다.

## 이번 달의 못한 점
1. 사이드 프로젝트 코딩을 못 했다. 10월 안으로 배포하는 게 최초 목표였는데... 11월에는 꼭 배포할 수 있도록 노력하자!

## 끝으로
사실 React와 함수형의 관계에 대한 정리를 이 글 안에서 마치고 싶었는데, 해당 부분은 단순히 트위터에 씨부리는 것과 다름없는 레벨의 글이 되어버린 것 같다. 10월을 돌아보는 글이니만큼 담고 싶은 이야기들이 많다. 오랜만에 이렇게 어수선한 분위기의 글을 쓰는 것 같네. 기술적인 글은 별도로 분리할 필요가 있겠다. 언젠가 정리할 시간이 나려나. 11월에도 이렇게 쓸 것이 많았으면 좋겠다.