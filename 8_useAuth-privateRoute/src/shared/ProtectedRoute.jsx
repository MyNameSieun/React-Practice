import AuthContext from 'context/AuthContext';
import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isSignIn } = useContext(AuthContext);
  const location = useLocation(); // 현재 페이지의 경로 정보를 가져옴

  if (!isSignIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
