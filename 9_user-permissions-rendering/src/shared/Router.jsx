import PublicHome from 'pages/public/PublicHome';
import SignIn from 'pages/public/SignIn';
import SignUp from 'pages/public/SignUp';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ProtectedRouter } from './ProtectedRouter';
import Home from 'pages/protected/Home';
import Profile from 'pages/protected/Profile';
import { useAuth } from '../provider/authProvider';

const Router = () => {
  // 인증 상태를 확인합니다.
  const { isSignIn } = useAuth();

  // 비인증 사용자 전용 라우트 설정
  const routerForNotAuthenticatedOnly = [
    { path: '/', element: <PublicHome /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> }
  ];

  // 404 페이지 라우트 설정
  const notFound = {
    path: '*',
    element: <Navigate to="/" /> // 정의되지 않은 URL로 접근 시 홈으로 리다이렉트
  };

  // 인증 사용자 전용 라우트 설정
  const routersForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRouter />, // 보호된 라우트 적용
      children: [
        { path: '', element: <Home /> }, // 기본 페이지
        { path: '/profile', element: <Profile /> } // 사용자 프로필 페이지
      ]
    }
  ];

  // 라우터 설정
  const router = createBrowserRouter([
    ...(!isSignIn ? routerForNotAuthenticatedOnly : []), // 인증되지 않은 사용자는 비인증 전용 라우트 사용
    ...routersForAuthenticatedOnly, // 인증된 사용자는 보호된 라우트 사용
    notFound // 404 페이지
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
