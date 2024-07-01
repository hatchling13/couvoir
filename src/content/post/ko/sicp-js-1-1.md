---
date: "2023-11-22"
description: Structure and Interpretion of Computer Programs, JavaScript Edition /
  Harold Abelson and Gerald Jay Sussman; adapted to JavaScript by Martin Henz and
  Tobias Wrigstad; with Julie Sussman
taxonomies:
  categories:
  - blog
  tags:
  - SICP
  - SICP JS
  - 컴퓨터 프로그램의 구조와 해석
title: 'SICP JS - 1.1: 프로그래밍의 요소 정리'
---

SICP JS를 읽고, 이미 체득했다고 생각하는 정보들은 제외한 후 기억해둘 만하다 생각한 정보를 나열(정리가 아니다!)하였다.
<!-- more -->

프로그래밍 언어는 컴퓨터에게 작업을 지시하는 수단 **그 이상**의 것

-> 프로세스에 관한 생각을 정리하기 위한 기본적인 개념 구조
-> 간단한 생각들을 조합하여 더 복잡한 생각을 형성하기 위해 언어가 제공하는 수단에 특히 주목해야 함

- Primitive expressions: 언어가 다루는 ‘가장 단순한 개체’를 나타내는 방법
- Means of combination: 보다 간단한 요소로부터 복합 요소가 구성되는 방법
- Means of abstraction: 복합 요소를 하나의 단위로 이름 붙이고 조작할 수 있는 방법

프로그래밍에서는 크게 ‘함수’, ‘데이터’ 두 가지의 요소를 다룸.

-> 데이터: 우리가 조작하고 싶은 것
-> 함수: 데이터를 조작하기 위한 규칙을 기술한 것

따라서 프로그래밍 언어는:
1. 원시 데이터와 원시 함수를 표현할 수 있어야 함
2. 1을 각각 조합/추상화할 수 있는 수단이 있어야 함

---

프로그래밍 언어의 중요한 측면 중 하나는 무언가에게 이름을 붙일 수 있는 수단을 제공한다는 점

→ 값에 이름을 붙이고, 이름으로부터 값을 가져오기 위해 이름-값 쌍에 대한 정보를 저장할 공간이 필요하며, 이를 환경(또는 프로그램 환경)이라고 부름

1. 상수: 이름 붙이는 대상이 ‘값’일 때: 가장 간단한 추상화 수단. 복합 연산(compound operations)의 결과를 간단한 이름으로 지칭할 수 있게 해줌. 

2. 함수: 이름 붙여진 후 하나의 단위로 다루어지는 대상이 ‘복합 연산’일 때

---

- Applicative-Order: 인자 표현식이 먼저 평가된 후 함수에 제공하는 방식
- Normal-Order: 값이 실제로 필요할 때까지 인자 표현식을 평가하지 않는 방식(Lazy evaluation)

---

수학의 함수와 컴퓨터의 함수 간 중요한 차이: 선언형(declarative) vs 명령형(imperative)

---

‘분해 전략(decomposition strategy)’의 중요한 점

-> 단순히 프로그램을 나누는 것에 그치지 않고, 식별 가능한 서로 다른 작업을 수행함으로써 다른 함수를 정의하기 위한 ‘모듈’로 사용될 수 있음.

-> 모듈이 어떻게 동작하는 지는 알 필요 없으며(blackbox), 무엇을 하는 지만 알면 된다. 상위 레벨의 함수의 관점에서 생각할 때, 하위 함수의 세부 사항은 ‘기능 추상화(functional abstraction)’라는 이름 하에 숨겨진다. 즉, 동일한 입출력을 가지고 같은 결과를 내는 함수는 서로 구분할 수 없다.

---

한 쌍의 중괄호를 이용하여 ‘블록’을 만들 수 있고, 블록 내부의 선언은 해당 블록 내부에서만 유효하다. 선언의 위치에 따라 특정 이름이 가리키는 값이 정해지며, 이를 ‘어휘적 범위 지정(lexical scoping)’이라고 한다.