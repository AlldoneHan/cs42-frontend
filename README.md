이 프로젝트는 [Next.js](https://nextjs.org/)를 사용합니다.

## 신규 프로젝트 생성
- npx create-next-app@latest 명령어로 신규 프로젝트 생성
    - What is your project named? (프로젝트 이름)
    - Would you like to use TypeScript? No / Yes -> 타입스크립트 적용 여부 확인
    - Would you like to use ESLint? No / Yes -> ESLint 적용 여부 확인
    - Would you like to use Tailwind CSS? No / Yes -> Tailwind 적용 여부 확인
    - Would you like to use `src/` directory? No / Yes -> `src/` 적용 여부 확인
    - Would you like to use App Router? (recommended) No / Yes -> App Router 적용 여부 확인
    - Would you like to customize the default import alias (@/*)? No / Yes -> import alias 커스터마이징 적용 여부 확인
        - 'src/'사용으로 설정된 상태면 @/를 통해서 src/로 접근할 수 있음
    - TypeScript, ESLint, `src/`, App Router 만 'yes'로 설정

## 로컬 실행
- Node.js 설치
    - v18.17.0 이상 버전 사용
- ``` npm install ```
- ``` npm run dev ```
- 명령어 변경하고 싶다면 package.json 파일 내 scripts 영역 내에서 변경 가능
    - dev : Next.js를 개발 모드로 실행

[http://localhost:3000](http://localhost:3000) 로 접속해서 프로젝트 확인

## 폴더 구조 
- [공식문서](https://nextjs.org/docs/getting-started/project-structure)
- App Routing
    - app폴더 하단의 layout.tsx, page.tsx를 랜더링 해서 ('/')로 접속해 노출되는 화면을 설정
        - 기존의 페이지 라우터 사용시 app폴더 사용하지 않고, page/index.tsx 파일 및 _app.tsx파일 생성 후 사용
    - 각 폴더를 기준으로 url 설정
    - layout.tsx
        - app/layout.tsx는 전체 레이아웃 적용
        - 각 페이지 만의 레이아웃을 추가하고 싶다면 각 폴더 내에 layout.tsx파일을 만들어서 설정
        - 페이지 이동 시 리렌더링 하지 않음
        - 같은 폴더 내에 template.tsx와 같이 사용할 수 없음
    - tmeplate.tsx
        - 페이지 이동 시 리렌더링
        - 같은 폴더 내에 layout.tsx와 같이 사용할 수 없음
- Dynamic Routes : [folder]
    - app router와 중복 될 경우 최후 순위로 적용
- Route Groups : (folder)
    - 라우팅 주소에 영향을 주지는 않지만 (/(folder)/home -> /home) 그룹으로 묶을 수 있음
    - ex) 로그인 여부에 따라 보여지는 페이지가 다른 경우 (afterLogin)/(beforeLogin) 로 나누어서 관리
- Parallel Routes : @folder
    - 두 개의 페이지를 동시에 노출
    - 같은 폴더 구조 안에 있어야 한다.
- Intercepting Routes
    - 주소가 다른 페이지를 동시에 노출
- src/components
    - 각 페이지에서 필요한 요소들을 생성

## 개발 시 알아둘 것
- server component
    - Next.js 서버에서 동작
    - async와 같이 사용해 비동기 컴포넌트를 만들 수 있음
    - useState, useEffect와 같은 hook을 사용할 수 없음
    - client component를 import 할 수 있음
- client component
    - 브라우저에서 동작
    - useState, useEffect와 같은 hook을 사용할 수 있음
    - 파일 상단에 "use client"; 를 사용
    - server component를 import 할 수 있으나, server component가 client component로 변경됨
- not-found.tsx
    - app routing으로 찾을 수 없는 주소 접근 시 노출

