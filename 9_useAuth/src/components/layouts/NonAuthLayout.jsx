import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NonAuthLayout = () => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (isAuthenticated) {
    alert('이미 로그인 상태입니다.');
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NonAuthLayout;
