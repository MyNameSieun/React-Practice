import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
import { CommonContainer } from 'styles/CommonStyles';

const Layout = () => {
  return (
    <>
      <Navbar />

      <StLayout>
        <StContainer>
          <StMessage>로그인 여부와 상관없이 접근 가능한 페이지입니다.</StMessage>
          <StMain>
            <Outlet />
          </StMain>
        </StContainer>
      </StLayout>
    </>
  );
};

export default Layout;

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
