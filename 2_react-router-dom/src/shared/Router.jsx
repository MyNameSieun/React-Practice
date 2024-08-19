import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import InfoDetailPage from "../pages/InfoDetailPage";
import Layout from "../components/layouts/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="info/:id" element={<InfoDetailPage />} />
        </Route>

        {/* 사용자가 잘못된 경로로 이동했을 때 기본적으로 (/)로 리다이렉션 할 수 있다. */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
