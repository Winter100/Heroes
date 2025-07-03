# 망스비

노션 정리: https://www.notion.so/1e3681332106817fb337ca4212d44e20

## 1. 프로젝트 개요

- 프로젝트명: 망스비
- 목적: 온라인 게임 '마비노기 영웅전'의 게임 정보 제공
- 주요타겟: 게임 유저
- 이용자: 일 평균 30명
- 개발 인원: 1명
- 개발 기간: 2024.08.17 ~ 2024.09.19
- 서비스: https://www.heroes-dev.com/

## 2. 기술 스택

- Next.js, Tailwind, Shadcn
- Zustand, Tanstack-Query, Axios
- Tesseract.js
- Typescript, EsLint, Prettier
- Nexon Open API
- Google Analytics
- Vercel

## 3. 주요 기능

### 이미지 검색

- 이미지에서 캐릭터 이름을 추출해 캐릭터를 조회합니다.
  ![imageSerach](https://github.com/user-attachments/assets/9467ebd8-a425-4cb1-b3ef-1c9577b43228)

<hr />

### 캐릭터 조회 및 세팅

- Nexon API를 이용해 캐릭터를 조회하고 장비를 시뮬레이션 해보는 기능입니다.

![캐릭터검색](https://github.com/user-attachments/assets/6e598873-e542-408d-9555-65f2b629357b)
![인챈트필터](https://github.com/user-attachments/assets/be5b72ae-ea45-46f7-92ff-33a26ba37eea)

### 인챈트 정보 제공

- 가격 정보를 캐싱하여 빠르게 정보를 제공해줍니다.
  ![인챈트정보](https://github.com/user-attachments/assets/f4f16d23-bd32-4aad-b1b1-c70800d62f52)
