import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext'; // 인증 상태를 확인하기 위한 훅

const Navbar = () => {
  const { isSignIn, logout } = useAuth(); // 인증 상태와 로그아웃 함수 가져오기

  return (
    <HeaderContainer>
      <Logo>
        <StyledLink to="/">Bored</StyledLink>
      </Logo>
      <Nav>
        <NavList>
          {isSignIn ? (
            <>
              <NavItem>
                <StyledLink to="/my-page">마이페이지</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/post-form">글 작성</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/post-list">글 목록</StyledLink>
              </NavItem>
              <NavItem>
                <LogoutButton onClick={logout}>로그아웃</LogoutButton>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <StyledLink to="/sign-in">로그인</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/sign-up">회원가입</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/post-list">글 목록</StyledLink>
              </NavItem>
            </>
          )}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;

// Styled components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #333;
  color: #fff;
  height: 60px;
`;

const Logo = styled.div`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
