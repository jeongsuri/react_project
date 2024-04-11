# 설정

```js
{
    "singleQuote": true,
    "useTabs": false,
    "tabWidth": 2,
    "semi" : true,
    "trailingComma": "all"
}
```

## 의존성 : 필요 라이브러리

> 필요 라이브러리

- `react-router-dom` : 라우터
- `sass`, `styled-components`, `classnames` : 스타일링 목적
- `immer` : 불변성관리
- `react-icons` : 리액트에서 제공하는 아이콘 라이브러리
- `@loadable/component` : 지연로딩
- `react-helmet-async` : haed 태그 내의 특정태그의 내용을 변경시
- 의존성설치

```
yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component react-helmet-async
```

### react-helmet-async 설정

- src/index.js

```jsx
...
import { HelmetProvider } from 'react-helmet-async';
...
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
```

## 다국어, 메세지 처리

- 의존성 : `i18next`, `react-i18next`
- 의존성 설치

```
yarn add i18next react-i18next
```

- 언어파일 생성
  - `src/lang/ko`, `src/lnag/en` 폴더 생성
  - 각 폴더별
    - 공통 문구 - `commons.js`
    - 검증 문구 - `validations.js`
    - 에러 문구 - `errors.js`
- 언어파일 통합 : 예) src/langs/ko/index.js

```js
import commons from './commons';
import validations from './validations';
import errors from './errors';

const ko = { ...commons, ...validations, ...errors };

export default ko;
```

- 설정 파일 구성 : `src/i18n.js`

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko';
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
});
```

- 설정반영 : `src/index.js`

```js
...
import './i18n';
...
```

- 적용하기 : `useTranslation` Hook / `react-i18next`
  - `t` : 번째 배열 값: 메세지 조회 함수
  - `i18n` : 편의 기능 객체, `changeLanguage(..)` : 언어변경

```js
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트!</title>
      </Helmet>
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </>
  );
};

export default App;
```

# 레이아웃 구성

- `src/layouts/MainLayout.js`
- `src/outlines/Header.js`
- `src/outlines/Footer.js`

## 설정
 - `src/index.js` : `BrowserRouter` 컴포넌트 감싸기
 ```jsx
 ...
 import { BrowserRouter } from 'react-router-dom';
 ...
 ```


# 라우팅 구성

## 메인 페이지

## 회원
- `/member/pages/Join` 회원가입
- `/member/pages/Login` 로그인

## 없는 페이지
 - `*` : 없는 페이지 - `commons/pages/NotFound.js`

## 에러페이지
> class형 컴포넌트 - `componentDidCatch`

- `commons/pages/Error.js'
- `commons/components/ErrorDisplay.js




