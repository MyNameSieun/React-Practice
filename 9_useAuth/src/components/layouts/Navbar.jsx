import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CommonContainer } from 'styles/CommonStyles';

const Navbar = () => {
  const at = localStorage.getItem('accessToken') ? true : false;
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    const logoutConfirm = window.confirm('정말 로그아웃 하시겠습니까?');
    if (logoutConfirm) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('avatar');
      localStorage.removeItem('nickname');
      localStorage.removeItem('userId');
      navigate('/sign-in');
      alert('로그아웃 완료되었습니다!');
    }
  };

  return (
    <StNav>
      <StNavContainer>
        <StNavLink to="/">Home</StNavLink>
        {at ? (
          <StLogoutButton onClick={handleLogoutButton}>로그아웃</StLogoutButton>
        ) : (
          <StAuthLinks>
            <StNavLink to="/sign-in">로그인</StNavLink>
            <StNavLink to="/sign-up">회원가입</StNavLink>
          </StAuthLinks>
        )}
      </StNavContainer>
    </StNav>
  );
};

export default Navbar;

const StNav = styled.nav`
  background-color: #f8f9fa;
  padding: 10px 20px;

  border-bottom: 1px solid #ddd;
`;

const StNavContainer = styled(CommonContainer)`
  justify-content: space-between;
  align-items: center;
`;

const StNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease, background-color 0.3s ease;

  &.active {
    font-weight: bold;
    color: #007bff;
    background-color: #e9ecef;
    border-radius: 5px;
  }

  &:hover {
    color: #0056b3;
  }
`;

const StLogoutButton = styled.div`
  cursor: pointer;
  color: #dc3545;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8d7da;
  }
`;

const StAuthLinks = styled.div`
  display: flex;
  gap: 10px;
`;
