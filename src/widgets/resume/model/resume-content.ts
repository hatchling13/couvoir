import type { Locale } from "@shared/config/i18n";

interface ResumeLink {
  label: string;
  href: string;
}

interface ResumeContact extends ResumeLink {
  value: string;
}

interface ResumeBullet {
  text: string;
  links?: ResumeLink[];
}

interface ResumeProject {
  name: string;
  period?: string;
  description?: string;
  links?: ResumeLink[];
  bullets: ResumeBullet[];
}

interface ResumeWorkGroup {
  label: string;
  projects: ResumeProject[];
  additionalLabel?: string;
  additional?: ResumeBullet[];
}

interface ResumeActivity {
  name: string;
  period: string;
  href?: string;
  bullets: ResumeBullet[];
}

interface ResumeContent {
  name: string;
  role: string;
  description: string;
  printLabel: string;
  sectionLabels: {
    profile: string;
    experience: string;
    publicWork: string;
    education: string;
    technologies: string;
    languages: string;
    credentials: string;
  };
  contacts: ResumeContact[];
  experience: {
    company: string;
    companyHref: string;
    role: string;
    period: string;
    groups: ResumeWorkGroup[];
  };
  publicWork: ResumeActivity[];
  education: {
    school: string;
    degree: string;
    period: string;
  };
  technologies: string[];
  languages: string[];
  credentials: string[];
}

export const resumeContent: Record<Locale, ResumeContent> = {
  ko: {
    name: "박정욱",
    role: "소프트웨어 엔지니어",
    description:
      "TypeScript와 React·React Native를 중심으로 웹과 모바일 제품을 만드는 프론트엔드 엔지니어입니다. 구현 범위를 화면에 한정하지 않고 배포와 앱 스토어 연동 등 제품을 완성하는 데 필요한 영역까지 맡아 왔습니다. 정적 타입 시스템, 함수형 프로그래밍과 그 기반 이론을 꾸준히 탐구하고 있습니다.",
    printLabel: "인쇄",
    sectionLabels: {
      profile: "profile",
      experience: "experience",
      publicWork: "public-work",
      education: "education",
      technologies: "technologies",
      languages: "languages",
      credentials: "credentials",
    },
    contacts: [
      { label: "email", value: "me@hatchling.dev", href: "mailto:me@hatchling.dev" },
      {
        label: "github",
        value: "github.com/hatchling13",
        href: "https://github.com/hatchling13",
      },
      { label: "website", value: "hatchling.dev", href: "https://hatchling.dev" },
    ],
    experience: {
      company: "버터소프트",
      companyHref: "https://buttersoft.io/",
      role: "FE Engineer",
      period: "2024.07–현재",
      groups: [
        {
          label: "in-house-product",
          projects: [
            {
              name: "Saycheez",
              period: "2025.04–현재",
              description:
                "사진을 장소와 함께 기록하고 포토카드로 인쇄할 수 있는 위치 기반 라이프로깅 플랫폼.",
              links: [
                { label: "website", href: "https://saycheez.io/" },
                {
                  label: "app-store",
                  href: "https://apps.apple.com/kr/app/saycheez-%EC%84%B8%EC%9D%B4%EC%B9%98%EC%A6%88/id6747369069",
                },
                {
                  label: "google-play",
                  href: "https://play.google.com/store/apps/details?id=io.buttersoft.saycheez&hl=ko",
                },
              ],
              bullets: [
                {
                  text: "React Native 앱에서 상하 스와이프 기반의 카드형 피드 탐색 인터랙션과 애니메이션 구현",
                },
                {
                  text: "expo-iap 기반 iOS·Android 인앱 결제 기능을 구축하고 결제 UI, 구매·복원·실패 흐름, 스토어 상품 등록, 백엔드 영수증 처리 연계를 담당",
                },
                {
                  text: "공식 랜딩 페이지를 반응형·다국어로 신규 구축하고 배포했으며, Universal Links와 App Links를 연동해 웹과 앱 사이의 진입 경로를 구성",
                },
              ],
            },
          ],
        },
        {
          label: "client-work",
          projects: [
            {
              name: "EMART EVERYDAY",
              period: "2024.11–2025.03",
              description: "PDA 앱 운영 관리 시스템에 연동된 어드민 서비스.",
              bullets: [
                {
                  text: "계정·권한 관리와 점포·상품 운영 데이터의 조회·검색·필터링·등록·수정 등 어드민 프론트엔드 기능 전반 구현",
                },
                {
                  text: "기존 자체 구현 UI를 shadcn/ui 기반 컴포넌트와 TanStack Table로 재구성해 접근성과 데이터 연동 요구사항을 수용할 수 있는 기반 마련",
                },
              ],
            },
          ],
          additionalLabel: "other-client-work",
          additional: [
            {
              text: "Phaser 기반 웹 게임의 개발 전반을 맡아 빌드 및 사용자 제공 단계까지 완료",
            },
            {
              text: "Lexical Playground의 이미지·비디오 예제 구현을 사내 요구사항에 맞게 수정하고 NPM 패키지로 분리·배포해 여러 프로젝트에 적용",
              links: [
                {
                  label: "image-plugin",
                  href: "https://www.npmjs.com/package/@bvtter/lexical-image-plugin",
                },
                {
                  label: "video-plugin",
                  href: "https://www.npmjs.com/package/@bvtter/lexical-video-plugin",
                },
              ],
            },
          ],
        },
      ],
    },
    publicWork: [
      {
        name: "CodeSnap",
        period: "2024.03–2025.02",
        href: "https://codesnapmag.hashnode.dev/",
        bullets: [
          {
            text: "원저자의 허가와 동료 리뷰를 거쳐 웹 개발 기술 아티클 11편을 번역·발행",
          },
          {
            text: "React Error Boundary 번역문이 원문에 한국어 번역으로 소개됨",
            links: [
              {
                label: "translation",
                href: "https://codesnapmag.hashnode.dev/react-error-boundary",
              },
              {
                label: "original",
                href: "https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react",
              },
            ],
          },
        ],
      },
      {
        name: "open-source-contributions",
        period: "2023–2024",
        bullets: [
          {
            text: "Phaser의 Matter 충돌 이벤트 TypeScript 타입 정의 오류를 수정해 upstream에 반영",
            links: [{ label: "PR #6937", href: "https://github.com/phaserjs/phaser/pull/6937" }],
          },
          {
            text: "tldr-pages에 CLI 명령어 문서의 한국어 번역 4건을 기여해 upstream에 반영",
            links: [
              {
                label: "merged-prs",
                href: "https://github.com/tldr-pages/tldr/pulls?q=is%3Apr+author%3Ahatchling13+is%3Amerged",
              },
            ],
          },
        ],
      },
      {
        name: "오픈소스 컨트리뷰션 아카데미",
        period: "2023",
        href: "https://www.oss.kr/contribution_academy",
        bullets: [
          {
            text: "‘A type-safe, composable library ZIO’ 프로젝트에 참여해 Scala·ZIO 학습 문서와 예제 코드를 작성",
            links: [
              {
                label: "notes",
                href: "https://github.com/SHSongs/working-scala/tree/main/for-comprehension-in-zio",
              },
              { label: "example", href: "https://github.com/SHSongs/cheese-shop" },
            ],
          },
        ],
      },
    ],
    education: {
      school: "경상국립대학교",
      degree: "컴퓨터과학전공 집중과정 · 공학사",
      period: "2016.03–2023.02",
    },
    technologies: ["TypeScript", "React", "React Native"],
    languages: ["일본어 — 유창한 회화 가능 · JLPT N1, 2023.08"],
    credentials: ["정보처리기사 · 한국산업인력공단, 2022.09"],
  },
  en: {
    name: "Jung Wook Park",
    role: "Software Engineer",
    description:
      "I am a frontend engineer building web and mobile products with TypeScript, React, and React Native. I have worked beyond UI implementation—through deployment and app-store integration—to complete products. I continue to study static type systems, functional programming, and their theoretical foundations.",
    printLabel: "Print",
    sectionLabels: {
      profile: "profile",
      experience: "experience",
      publicWork: "public-work",
      education: "education",
      technologies: "technologies",
      languages: "languages",
      credentials: "credentials",
    },
    contacts: [
      { label: "email", value: "me@hatchling.dev", href: "mailto:me@hatchling.dev" },
      {
        label: "github",
        value: "github.com/hatchling13",
        href: "https://github.com/hatchling13",
      },
      { label: "website", value: "hatchling.dev", href: "https://hatchling.dev" },
    ],
    experience: {
      company: "Buttersoft",
      companyHref: "https://buttersoft.io/",
      role: "FE Engineer",
      period: "Jul 2024–Present",
      groups: [
        {
          label: "in-house-product",
          projects: [
            {
              name: "Saycheez",
              period: "Apr 2025–Present",
              description:
                "A location-based platform for recording memories with places and printing them as photocards.",
              links: [
                { label: "website", href: "https://saycheez.io/" },
                {
                  label: "app-store",
                  href: "https://apps.apple.com/kr/app/saycheez-%EC%84%B8%EC%9D%B4%EC%B9%98%EC%A6%88/id6747369069",
                },
                {
                  label: "google-play",
                  href: "https://play.google.com/store/apps/details?id=io.buttersoft.saycheez&hl=en",
                },
              ],
              bullets: [
                {
                  text: "Built vertical swipe-based card feed interactions and animations in a React Native app",
                },
                {
                  text: "Built iOS and Android in-app purchasing with expo-iap, covering payment UI, purchase, restore and failure flows, store product setup, and backend receipt-processing integration",
                },
                {
                  text: "Built and deployed a responsive multilingual landing site, connecting Universal Links and App Links to route between the web and specific screens in the app",
                },
              ],
            },
          ],
        },
        {
          label: "client-work",
          projects: [
            {
              name: "EMART EVERYDAY",
              period: "Nov 2024–Mar 2025",
              description:
                "An administration service connected to the management system for a PDA app.",
              bullets: [
                {
                  text: "Built the frontend for account and permission management and store and product data workflows, including search, filtering, creation, and editing",
                },
                {
                  text: "Reworked the existing bespoke UI with shadcn/ui-based components and TanStack Table to support accessibility and data-integration requirements",
                },
              ],
            },
          ],
          additionalLabel: "other-client-work",
          additional: [
            {
              text: "Developed a Phaser web game through build and delivery to users",
            },
            {
              text: "Adapted Lexical Playground image and video examples for internal requirements, split them into NPM packages, and applied them across projects",
              links: [
                {
                  label: "image-plugin",
                  href: "https://www.npmjs.com/package/@bvtter/lexical-image-plugin",
                },
                {
                  label: "video-plugin",
                  href: "https://www.npmjs.com/package/@bvtter/lexical-video-plugin",
                },
              ],
            },
          ],
        },
      ],
    },
    publicWork: [
      {
        name: "CodeSnap",
        period: "Mar 2024–Feb 2025",
        href: "https://codesnapmag.hashnode.dev/",
        bullets: [
          {
            text: "Translated and published 11 web-development articles with author permission and peer review",
          },
          {
            text: "A translation about React Error Boundaries was linked from the original article as its Korean translation",
            links: [
              {
                label: "translation",
                href: "https://codesnapmag.hashnode.dev/react-error-boundary",
              },
              {
                label: "original",
                href: "https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react",
              },
            ],
          },
        ],
      },
      {
        name: "open-source-contributions",
        period: "2023–2024",
        bullets: [
          {
            text: "Fixed TypeScript definitions for Matter collision events in Phaser and had the change merged upstream",
            links: [{ label: "PR #6937", href: "https://github.com/phaserjs/phaser/pull/6937" }],
          },
          {
            text: "Contributed four Korean translations of CLI command pages to tldr-pages and had them merged upstream",
            links: [
              {
                label: "merged-prs",
                href: "https://github.com/tldr-pages/tldr/pulls?q=is%3Apr+author%3Ahatchling13+is%3Amerged",
              },
            ],
          },
        ],
      },
      {
        name: "Open Source Contribution Academy",
        period: "2023",
        href: "https://www.oss.kr/contribution_academy",
        bullets: [
          {
            text: "Participated in the ‘A type-safe, composable library ZIO’ project and wrote learning materials and example code for Scala and ZIO",
            links: [
              {
                label: "notes",
                href: "https://github.com/SHSongs/working-scala/tree/main/for-comprehension-in-zio",
              },
              { label: "example", href: "https://github.com/SHSongs/cheese-shop" },
            ],
          },
        ],
      },
    ],
    education: {
      school: "Gyeongsang National University",
      degree: "Bachelor of Engineering in Computer Science",
      period: "Mar 2016–Feb 2023",
    },
    technologies: ["TypeScript", "React", "React Native"],
    languages: ["Korean — Native", "Japanese — Fluent · JLPT N1, Aug 2023"],
    credentials: ["Engineer Information Processing · HRD Korea, Sep 2022"],
  },
};
