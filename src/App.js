import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); //메인페이지

// 회원페이지 start
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));
// 회원페이지 end

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/*메인페이지*/}
        {/* 회원페이지 Start */}
        <Route path="member">
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* 회원페이지 End */}
        <Route path="*" element={<NotFound />} /> {/*없는 페이지*/}
      </Route>
    </Routes>
  );
};

export default App;
