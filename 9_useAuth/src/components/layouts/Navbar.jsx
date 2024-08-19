import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/sign-in">로그인</StyledNavLink>
      <StyledNavLink to="/sign-up">회원가입</StyledNavLink>
    </>
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
