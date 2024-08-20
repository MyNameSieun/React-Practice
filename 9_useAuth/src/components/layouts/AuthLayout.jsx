import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    alert('로그인이 필요한페이지입니다. 로그인 페이지로 이동할게요!');
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
