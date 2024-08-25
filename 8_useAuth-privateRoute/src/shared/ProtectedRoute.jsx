import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// 인증된 사용자만 접근할 수 있는 보호된 라우트를 관리하는 컴포넌트
const ProtectedRoute = () => {
  const { isSignIn } = useAuth(); // 현재 로그인 상태를 확인
  const location = useLocation(); // 현재 페이지의 경로 정보를 가져옴

  if (!isSignIn) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
    // 로그인 후 돌아올 경로를 state로 전달
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />; // 인증된 사용자는 자식 컴포넌트를 렌더링
};

export default ProtectedRoute;
