import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 컴포넌트 정의
const PublicHomePage = () => {
  const at = localStorage.getItem('accessToken');
  const nickname = localStorage.getItem('nickname');

  return (
    <StContainer>
      {at ? <StGreeting>안녕하세요, {nickname}님!</StGreeting> : <StGreeting>로그인을 해주세요!</StGreeting>}
      {/* 로그인 여부가 상관없는 메뉴 */}
      <StList>
        <StListItem>
          <StLink to="/search">검색 페이지로</StLink>
        </StListItem>
        <StListItem>
          <StLink to="/test">권한테스트 페이지로</StLink>
        </StListItem>
      </StList>
      {/* 로그인이 반드시 필요한 메뉴 */}
      <StImportant>❗️ 로그인이 반드시 필요한 메뉴</StImportant>
      <StList>
        <StListItem>
          <StLink to="/user/1">1번 유저의 정보</StLink>
        </StListItem>
        <StListItem>
          <StLink to="/user/2">2번 유저의 정보</StLink>
        </StListItem>
      </StList>
    </StContainer>
  );
};

export default PublicHomePage;

const StContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
`;

const StGreeting = styled.p`
  font-size: 1.2em;
  color: #333;
`;

const StList = styled.ul`
  list-style-type: none;
`;

const StListItem = styled.li`
  margin: 10px 0;
`;

const StImportant = styled.p`
  font-weight: bold;
  color: #e74c3c;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: #3498db;

  &:hover {
    text-decoration: underline;
  }
`;
