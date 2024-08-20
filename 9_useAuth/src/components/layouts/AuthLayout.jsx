import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AuthLayout = () => {
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
