---
date: "2022-06-29"
description: 컴퓨터 시스템 제3판 / Randal E. Bryant, David R. O'Hallaron 지음 / 김형신 옮김
taxonomies:
  categories:
  - blog
  tags:
  - CS:APP
  - Computer Systems
title: CS:APP 01장 - 컴퓨터 시스템으로의 여행 정리
---

미루고 미루던 컴퓨터 시스템(Computer Systems: A Programmer's Prospective, 이하 "CS:APP")을 읽고 정리하는 시간을 가져보려 한다. 언제 샀었는지 기억도 나지 않지만, 무수한 추천을 받고 언젠가는 독파해보겠다는 바람으로 첫 장을 넘긴 게 벌써 4~5번은 넘은 것 같다. 무슨 [옛날 광고](https://www.youtube.com/watch?v=m7mYqeUUF94)도 아니고... 바쁜 일이 대강 끝나고 사실상 마지막 자유일지도 모를 4학년 여름 종강이 되니, 더 이상은 미룰 수 없겠다는 생각이 들었다.
<!-- more -->

이 시리즈의 흐름은 다음과 같을 예정이다:

1. 해당 장의 전체적인 내용 정리와 개인적인 생각들
2. 문단의 소제목에 대한 간단 소개와 개인적인 생각들

# 1장 간단 정리
**컴퓨터 시스템으로의 여행**이라는 이름으로 시작하는 이 장은 많은 사람들이 프로그래밍을 처음 시작했을 때 한 번씩은 작성해보았을 'Hello World' 프로그램을 살펴보며, 컴퓨터가 프로그램들 실행하기 위해 필요한 정보들을 간략히 소개하는 형태로 진행된다. CS:APP에서는 C언어를 이용하여 주요 내용들을 설명하며, C++이나 JAVA에 익숙한 독자가 책을 읽고 있다고 가정하기 때문에 C언어 관련 내용을 보충해주기도 한다.

저자 서문에서 CS:APP의 유래를 밝히고 있는데, 1998년 카네기 멜론 대학의 "Introduction to Computer Systems(ICS)" 코스를 개발하며 만들어졌다고 한다. 일반적으로 대학생들이 배우는 컴퓨터 구조 과목과는 살짝 궤를 달리하는 부분 또한 명시하였는데, 가산기나 버스 설계 등 비교적 하드웨어에 가까운 부분은 의도적으로 제외하였다고 한다. 단순히 컴퓨터 시스템의 구조에 집중하기보다는, 프로그래머로써 더 좋은 프로그램을 작성할 수 있는 주제들을 담으려한 것이다. 이런 걸 보고 있자면 세월이 갈수록, 또 컴퓨터의 성능이 점점 고도화될 수록 프로그래머에게 바라는 능력도 계속 바뀌어가는 것 같다. 물론 좋은 프로그램을 작성하는 것이라고 한 마디로 정리할 수도 있겠지만, 그래서 '좋은 프로그램'의 기준이 무엇이냐 묻는다면 과거의 프로그래머가 내놓을 대답과 현재의 프로그래머가 답한 내용이 일치하지는 않을 것이라는 생각이다.

2022년 현재에는 C언어를 첫 언어로 시작하는 것이 옳냐 그르냐하는 토론이 곳곳에서 이루어지고 있다. 10년 전만 하더라도 이 주제가 토론거리로 오를 일은 없었을 것이다. 모두가 너무나도 당연하게 C언어를 첫 언어로 시작해서 평등하게 머리를 쥐어짜고 있었을테니까. 언젠가는 CS:APP도 과거의 유산이 되어 추억 속에나 남는 책이 될지도 모르겠다.

## 정보는 비트와 컨텍스트로 이루어진다
해당 문단에서는 컴퓨터가 내부적으로 정보를 저장하는 형태인 비트에 대해서 간략하게 설명한다. 또한 텍스트 문자를 ASCII 표준을 사용하여 표시할 수 있으며 ASCII 문자만으로 이루어진 파일들을 텍스트 파일, 이외의 모든 파일을 바이너리 파일이라고 한다는 것을 알려준다. 모든 시스템 내부의 정보는 비트로 표시되며, 각각을 구분하는 방법은 이들을 바라보는 컨텍스트(Context)라는 중요한 개념을 짚어준 후 문단이 종료된다.

전산 기술 서적을 번역하시는 분들이 가장 골머리앓는 단어 중 하나가 컨텍스트 아닐까? 단순히 문맥이라고 번역하기엔 너무 느낌이 다르고, 그렇다고 적절한 번역어를 찾을 수 없어서 결국 음차할 수밖에 없는... 그렇게 생각하면 컨텍스트라는 단어를 처음 본 학습자들도 무슨 뜻인지 유추할 수가 없을테니 문제인데, 또 그렇다고 해서 문맥이라는 단어로 번역해버리면 번역자는 번역자대로 찝찝함을 감출 수 없을테고, 학습자는 학습자대로 오개념이 생길 수 있으니 서로가 한발짝씩 물러난 형태가 된 거겠지. 나는 컨텍스트라는 단어를 '특정한 정보를 해석하기 위해 필요한 기반 환경 및 정보' 정도로 이해했다. 어떻게 보자면 메타데이터랑도 연관이 있지 않을까?

## 프로그램은 다른 프로그램에 의해 다른 형태로 번역된다
C 프로그램 빌드 프로세스를 다루고 있는 문단이다. 소스 코드에서 시작해 전처리기를 통과하고, 어셈블리어로 컴파일된 결과물이 어셈블러에 입력되어 재배치 가능한 오브젝트 파일로 변환된 후, 라이브러리와 링킹 작업을 거져 실행 가능한 오브젝트 파일이 완성되는 과정을 간략히 도식화한 것이 눈에 띈다.

이것에 관해서는 예전에 [프레젠테이션 파일](https://github.com/hatchling13/presentation/blob/master/seminar/pre-2021/C%20Build%20Process.pptx)을 만들어둔 바 있다. 보통 C언어 책들에서는 이 내용을 제일 처음에 한 번 적어두고 마는 경우가 많다. 아마 자세히 파고들면 너무 어려워지니까 그렇겠지. 프로그래밍 언어론이나 운영체제 같이 상위 이론들을 알게 된다면 처음에 깔짝 보고 넘겼던 내용이 깊게 다루어지는 게 굉장히 신기한 경험일거라 생각한다.

## 컴파일 시스템이 어떻게 동작하는지 이해하는 것은 중요하다
3가지 관점에서 컴파일 시스템의 동작 이해의 중요성을 말하고 있다.

개인적으로 굉장히 공감이 갔던 것은 두 번째인 '링크 에러 이해하기'인데, 과거에 C/C++에서 라이브러리를 사용하기 위해 했던 여러 뻘짓들이 생각나면서 고개를 끄덕이게 되었다. Makefile 작성이라던지, 리눅스에서 소스 빌드할때 환경 세팅이라던지, 윈도우로 포팅된 리눅스 프로그램을 살펴볼때 했던 삽질이라던지... 돌이켜보면 나름대로 좋은 경험이었다고 생각하지만 그 당시에는 욕지거리 뱉어가며 우울하게 작업했던 기억도 나서 살짝 서글펐다.

## 프로세서는 메모리에 저장된 인스트럭션을 읽고 해석한다
지금까지의 내용이 컴퓨터가 실행할 명령을 만드는 것이었다면, 이 문단에서는 컴퓨터가 해당 명령을 실행하면서 벌어지는 일들을 다루고 있다. 셸에 프로그램 이름을 입력하고 엔터를 땅 쳤을 때, 내부에서 어떤 일들이 벌어지는지를 알려준다. 명령을 처리하기 위해 필요한 컴퓨터의 하드웨어 조직도와 각 부분에 대한 간략한 설명과 그들을 통해 일어나는 일련의 동작을 소개한다.

하드웨어 조직도 부분에서는 컴퓨터 구조 강의에서 들었던 내용을 떠올릴 수 있었다. 버스, 입출력 장치, 메인 메모리와 프로세서에 관한 간단한 설명을 보며 열심히 문제를 풀던 3학년 시절이 기억났다(1년밖에 안 됐지만). 동작 설명에서는 2학년 때 했었던 리눅스 스터디가 생각났다. [리눅스 커맨드라인 완벽 입문서](https://lod.nl.go.kr/home/ir/irdetail.jsp?uri=http://lod.nl.go.kr/resource/KMO201302705)라는 책을 가지고 실습해보며 셸이 명령을 어떻게 해석하여 프로세서에 넘겨주는가를 공부했던 기억이 난다. 4학년 1학기에 교양으로 들었던 컴퓨터프로그래밍 강의에서 설명하셨던 컴퓨터의 동작 원리도 살짝 기억나는 것 같고? 생각보다 기억나는 게 많네그려.

## 캐시가 중요하다
프로세서-메모리 간 속도 격차에서 오는 병목을 줄이기 위한 캐시 메모리를 설명하는 문단이다. 물리적 법칙에 의해, 저장장치는 용량이 클수록 속도가 느리며 속도가 빠를수록 만드는 데 드는 비용이 크다. 이때, 프로세서가 필요로 할 가능성이 높은 정보를 임시로 저장하는 캐시 메모리를 잘 활용하면 프로그램의 성능을 크게 개선시킬 수 있다는 것이 이 책의 가장 중요한 교훈 중 하나라고 설명하고 있다.

마찬가지로, 컴퓨터 구조 강의에서도 캐시 관련 내용을 다뤘었다. 히트율이라던지, 캐시 매핑/쓰기/교체 정책들을 공부했던 기억이 있다. 캐시 메모리 자체에 대해서는 이 이상 알 필요가 있을까 싶지만, 캐시가 필요한 근본적인 원인과 그 방법은 하드웨어 수준을 넘어 웹에도 적용되는 내용이 있기 때문에 좀 더 주의깊게 살펴보는 것도 좋을 것 같다.

## 저장장치들은 계층구조를 이룬다
메모리 계층구조의 예시로 '레지스터 - L1 - L2 - L3 - 주 기억장치 - 로컬 보조 기억장치 - 원격 보조 기억장치'를 제시하였다. 왼쪽으로 갈수록 용량이 적고 빠르며 비싸다는 특징이 있고, 오른쪽으로 갈수록 용량이 크고 느리며 싸다는 특징을 가진다. 또한, 메모리 계층구조의 주요 아이디어인 '한 레벨의 저장장치가 다음 하위 레벨 저장장치의 캐시 역할을 한다'는 점을 알려준다.

이 대목에서는 계층형 아키텍처를 떠올릴 수밖에 없었다. 요근래 졸업작품을 만들며 써먹기도 했었고, 계층형 구조 중 유명한 네트워크의 OSI 7계층 생각도 잠깐 났었다. 모바일 프로그래밍 시 [원격 저장소에서 획득할 수 있는 데이터를 로컬에 다운받아 캐시 형태로 써먹는다](https://developer.android.com/training/data-storage/room?hl=ko)는 아이디어는 이미 접한 적이 있기도 하다. 역시 기반이 되는 아이디어란 이곳저곳에 흩어지더라도 어떠한 형태로든 유용하게 쓰이는구나 감탄했다.

## 운영체제는 하드웨어를 관리한다
운영체제의 주요 목적과 이를 달성하기 위한 개념들을 설명하는 문단이다. 운영체제는 하드웨어와 소프트웨어 사이에 위치하며, 응용 프로그램들이 하드웨어 자원을 올바르고 안전하게 사용할 수 있도록 돕는다. 프로세스, 가상 메모리, 파일 등은 운영체제가 목적을 달성하기 위해 하드웨어를 추상화한 형태라고 설명하고 있다.

이 멋쟁이 기술들에 관해서도 역시 컴퓨터 구조 강의와 리눅스 스터디에서 일정 부분 학습한 바 있다. 컴퓨터 구조 강의에서 컨텍스트 스위칭을 통한 시분할 멀티태스킹이 동작하는 방법이나 각 프로세스가 어떻게 가상 메모리를 이용하여 물리 메모리를 효율적으로 사용하는지 등을 배우며 운영체제의 동작 원리를 엿볼 수 있었다면, 리눅스 스터디에서는 표준 입출력이 파일로 관리된다는 사실과 리눅스에서 파일의 형태로 프로세스를 관리하는 `procfs` 등을 알게 되며 하드웨어 추상화의 멋짐을 느낄 수 있었다. 아마 4학년 2학기에는 운영체제 과목을 듣게 되지 않을까 싶다.

## 시스템은 네트워크를 사용하여 다른 시스템과 통신한다
네트워크는 일반적으로 컴퓨터들이 통신망을 통해 연결된 체계를 의미하는 단어이지만, 단일 컴퓨터 시스템의 입장에서 보자면 하나의 입출력장치로 취급해도 무방하다. 이 책에서는 그러한 방향의 접근을 취하고 있으며, 네트워크 통신 또한 입력에 대한 출력을 얻을 수 있는 매개체로써 설명하고 있다.

졸업작품을 만들며 이런 방향으로 생각해본 적이 있다. 그저 데이터를 입력하고 출력할 수 있는 개체라고만 생각할 수 있도록, 데이터가 존재하는 곳(기기 내부든 외부든)을 하나의 '데이터 원천(Data Source)'로 추상화하는 코드를 작성했던 기억이 난다. 근본이 되는 개념들은 다들 어떤 식으로든 연결이 되는 지점이 있구나 하는 생각이 들었다.

## 중요한 주제들 및 요약
Amdahl의 법칙, 동시성과 병렬성, 컴퓨터 시스템에서 추상화의 중요성 등 전산학에서 전반적으로 중요하게 다루어지는 주제들을 몇 가지 짚고, 이때까지 다루었던 내용들을 정리하며 1장은 종료된다. 개인적으로는 1장만 무료로 공개가 된다고 해도, 의욕 있는 학습자라면 알아서 다음 학습 주제를 찾아갈 수 있는 좋은 지침서가 될 수 있을 것이라 생각한다.

누가 그랬던가, 전산학에서 컴퓨터란 천문학에서 망원경 이상의 의미를 지니지 않는다[^1]고. 하지만 우린 알고 있다. 이런 잘난 말을 하는 사람들은 이미 그 주제에 대해 도가 튼 사람들이라는 걸. 우리같은 평범이들은 똑똑이들이 만든 멋진 것들에 감탄하며 필요한 게 있으면 주워다 쓰면 되는 것 아닐까. 다음 장은 비트를 이용하여 어떻게 정보를 저장하는 지에 대한 내용을 담고 있다. 어떤 재미난 내용들이 있을까?

[^1]: Edsger Wybe Dijkstra, 1930 ~ 2002 [#](https://www.brainyquote.com/quotes/edsger_dijkstra_201168)