import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    alert("로그인이 필요해요. 로그인 페이지로 이동할게요!");
    // replace를 사용하여 이전 페이지로 돌아가는 것을 방지(새로운 히스토리로 덮어씌우기)
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
