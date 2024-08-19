import { useAuth } from 'provider/AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRouter = () => {
  const { isSignIn } = useAuth(); // 인증 상태 확인
  const { pathname } = useLocation(); // 현재 페이지의 경로 정보 가져오기

  if (!isSignIn) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    return <Navigate to="/sign-in" state={{ redirectedFrom: { pathname } }} />;
  }

  return <Outlet />; // 인증된 사용자만 자식 컴포넌트를 렌더링
};
