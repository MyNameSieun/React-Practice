import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from 'pages/protected/HomePage';
import PostListPage from 'pages/public/PostListPage';
import SignupPage from 'pages/public/SignupPage';
import ProfilePage from 'pages/public/UserProfilePage';
import MyPage from 'pages/protected/MyPage';
import SigninPage from 'pages/public/SigninPage';
import PostDetailPage from 'pages/public/PostDetailPage';
import PostFormPage from 'pages/public/PostFormPage';
import { useAuth } from 'context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import PublicHomePage from 'pages/public/PulicHomePage';
import Layout from 'components/layouts/Layout';
import UserProfilePage from 'pages/public/UserProfilePage';

const Router = () => {
  const { isSignIn } = useAuth();

  // 비인증 및 인증 사용자 모두 접근 가능한 라우트
  const commonRoutes = [
    { path: '/post-list', element: <PostListPage /> },
    { path: '/post-detail', element: <PostDetailPage /> },
    { path: '/user-profile', element: <UserProfilePage /> },
    { path: '/sign-in', element: <SigninPage /> },
    { path: '/sign-up', element: <SignupPage /> },
    { path: '/profile', element: <ProfilePage /> }
  ];

  // 비인증 사용자 전용 라우트 설정
  const routerForNotAuthenticatedOnly = [{ path: '/', element: <PublicHomePage /> }];

  // 인증 사용자 전용 라우트 설정
  const routersForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />, // 보호된 라우트 적용
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/my-page', element: <MyPage /> },
        { path: '/post-form', element: <PostFormPage /> }
      ]
    }
  ];

  // 404 페이지 라우트 설정
  const notFound = {
    path: '*',
    element: <Navigate to="/" />
  };

  // 라우터 설정
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        ...commonRoutes, // 공통 라우트 추가
        ...(!isSignIn ? routerForNotAuthenticatedOnly : routersForAuthenticatedOnly)
      ]
    },
    notFound
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
