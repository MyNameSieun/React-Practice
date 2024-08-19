import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// 로그인이 되어있어야만 접근 가능한 페이지
const AuthLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // 로그인 여부를 체크
    if (isLoggedIn) {
      return;
    } else {
      // login 페이지로 이동
    }
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return;
  }

  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
