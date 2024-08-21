import AuthLayout from 'components/layouts/AuthLayout';
import Layout from 'components/layouts/Layout';
import NonAuthLayout from 'components/layouts/NonAuthLayout';
import NotFound from 'pages/default-set/NotFound';
import HomePage from 'pages/protected/HomePage';
import MyPage from 'pages/protected/MyPage';
import PublicHomePage from 'pages/public/PublicHomePage';
import SearchPage from 'pages/public/SearchPage';
import SignInPage from 'pages/public/SignInPage';
import SignUpPage from 'pages/public/SignUpPage';
import TestPage from 'pages/public/TestPage';
import UserProfilePage from 'pages/public/UserProfilePage';
import WritePostPage from 'pages/public/WritePostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route element={<Layout />}>
          <Route path="/" element={<PublicHomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="write-post" element={<WritePostPage />} />
          <Route path="/user/:userId" element={<UserProfilePage />} />
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        <Route element={<NonAuthLayout />}></Route>

        {/* 로그인이 필요한 라우터 */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />

        {/* 사용자가 잘못된 경로로 이동했을 때 기본적으로 (/)로 리다이렉션 */}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
