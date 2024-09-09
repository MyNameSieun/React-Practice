import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Layout from 'components/layouts/Layout';

const Router = () => {
  // 공통 라우트 설정
  const commonRoutes = [
    { path: '/', element: <HomePage /> } // 모든 사용자에게 기본 페이지로 제공
  ];

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...commonRoutes]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
