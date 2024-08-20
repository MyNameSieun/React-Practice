import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NonAuthLayout = () => {
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
