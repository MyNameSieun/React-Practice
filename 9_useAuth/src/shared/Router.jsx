import Navbar from 'components/layouts/Navbar';
import HomePage from 'pages/protected/HomePage';
import SignInPage from 'pages/public/SignInPage';
import SignUpPage from 'pages/public/SignUpPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />

        {/* 사용자가 잘못된 경로로 이동했을 때 기본적으로 (/)로 리다이렉션 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
