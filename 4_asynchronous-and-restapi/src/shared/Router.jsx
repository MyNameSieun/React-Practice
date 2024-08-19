// Router.jsx
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import FetchPage from 'pages/FetchPage';
import AxiosPage from 'pages/AxiosPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="fetch" element={<FetchPage />} />
        <Route path="axios" element={<AxiosPage />} />
        {/* 사용자가 잘못된 경로로 이동했을 때 기본적으로 (/)로 리다이렉션 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
