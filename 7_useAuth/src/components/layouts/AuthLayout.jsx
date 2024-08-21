import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
import { CommonContainer } from 'styles/CommonStyles';

const AuthLayout = () => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    alert('로그인이 필요한 페이지입니다. 로그인 페이지로 이동할게요!');
    // replace를 사용하여 이전 페이지로 돌아가는 것을 방지(새로운 히스토리로 덮어씌우기)
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <Navbar />

      <StLayout>
        <StContainer>
          <StMessage>반드시 로그인이 되어있어야 하는 페이지입니다.</StMessage>
          <StMain>
            <Outlet />
          </StMain>
        </StContainer>
      </StLayout>
    </>
  );
};

export default AuthLayout;

const StLayout = styled.nav`
  background-color: #e2e2e2;
  border-bottom: 1px solid #ddd;
`;

const StContainer = styled(CommonContainer)`
  flex-direction: column;
  min-height: 100vh;
`;

const StMessage = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

const StMain = styled.main`
  flex: 1;
  padding: 20px;
`;
