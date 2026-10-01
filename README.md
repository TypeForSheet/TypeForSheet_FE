# 🎧 TypeForSheet Frontend

> 좋아하는 음악을 평가하고, 그 음악과 함께한 나의 순간까지 기록하는 개인 음악 아카이브

TypeForSheet는 음악을 단순히 저장하거나 평가하는 것을 넘어,  
**음악에 대한 감상과 개인적인 이야기를 시간과 함께 기록하고 다시 돌아볼 수 있는 서비스**입니다.

**음악 → 평가 → 감상/이야기 → 기록 → 축적 → 회고**

의 흐름을 통해 나만의 음악 아카이브를 만들어갑니다.

---

## ✨ 주요 기능

- 🔍 음악 검색 및 선택
- ⭐ 별점 및 자유로운 음악 기록
- 📝 기록 수정 및 삭제
- 🗂 시간별 / 앨범별 음악 아카이브
- 👀 같은 음악에 대한 다른 사용자의 공개 기록 탐색
- 🔐 Kakao / Google / Apple 로그인 및 온보딩
- 👤 마이페이지 및 설정

---

## 🛠 Tech Stack

### Frontend

- React Native
- Expo SDK 57
- TypeScript
- Expo Router

### Development

- ESLint
- Prettier
- TypeScript Strict Mode

### Design

- Figma
- Design Token
- Common Component

---

## 📱 Support

| Platform | Minimum Version     |
| -------- | ------------------- |
| iOS      | iOS 18.0            |
| Android  | Android 10 / API 29 |

---

## 🚀 Getting Started

### Clone

```bash
git clone https://github.com/TypeForSheet/TypeForSheet_FE.git
cd TypeForSheet_FE
```

### Install

```bash
npm install
```

### Run

```bash
npm start
```

iOS:

```bash
npm run ios
```

Android:

```bash
npm run android
```

---

## ✅ Code Check

PR 생성 전 아래 명령어를 실행합니다.

```bash
npm run format:check
npm run lint
npm run typecheck
npx expo-doctor
```

---

## 🌿 Git Convention

### Branch

```text
main
└── dev
    └── 작업 브랜치
```

- `main`: 배포 기준 브랜치
- `dev`: 개발 통합 브랜치
- 작업 브랜치는 Issue 기반으로 생성합니다.

```text
label/#issue-number-description
```

예시:

```text
feat/#12-login
ui/#13-home
fix/#14-search
chore/#15-config
```

### Frontend Label

`FEAT` · `UI` · `FIX` · `REFACTOR` · `ADD` · `CHORE` · `HOTFIX` · `DELETE` · `DOCS`

---

## 🔀 Workflow

```text
Issue 생성
    ↓
작업 브랜치 생성
    ↓
개발
    ↓
PR → dev
    ↓
Code Review
    ↓
Merge
```

- 모든 작업은 Issue와 연결합니다.
- 일반 작업 PR은 `dev` 브랜치를 대상으로 생성합니다.
- 팀원 Approve 후 Merge합니다.
- CodeRabbit Review 내용을 모두 Resolve한 후 Merge합니다.

---

## TypeForSheet

**Record the music. Remember the moment. 🎵**
