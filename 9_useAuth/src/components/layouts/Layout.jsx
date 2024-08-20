import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <p>로그인 여부와 상관없이 접근 가능한 페이지입니다.</p>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
