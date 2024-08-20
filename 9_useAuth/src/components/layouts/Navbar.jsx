import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const at = localStorage.getItem('accessToken') ? true : false;
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    const logoutConfrim = window.confirm('정말 로그아웃 하시겠습니까?');
    if (logoutConfrim) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('avatar');
      localStorage.removeItem('nickname');
      localStorage.removeItem('userId');
      navigate('/sign-in');
      alert('로그아웃 완료되셨습니다!');
    }
  };

  return (
    <nav>
      <>
        <StyledNavLink to="/">Home</StyledNavLink>
        {at ? (
          <>
            <div onClick={handleLogoutButton}>로그아웃</div>
          </>
        ) : (
          <>
            <StyledNavLink to="/sign-in">로그인</StyledNavLink>
            <StyledNavLink to="/sign-up">회원가입</StyledNavLink>
          </>
        )}
      </>
    </nav>
  );
};

export default Navbar;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: red;
    font-weight: bold;
  }
`;
