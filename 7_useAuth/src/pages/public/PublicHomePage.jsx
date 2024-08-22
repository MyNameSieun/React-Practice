import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PublicHomePage = () => {
  const at = localStorage.getItem('accessToken');
  const nickname = localStorage.getItem('nickname');

  return (
    <StContainer>
      <StGreeting>{at ? `안녕하세요, ${nickname}님!` : '로그인을 해주세요!'}</StGreeting>
      <StListContainer>
        <StList>
          <StListItem>
            <StLink to="/search">검색 페이지로</StLink>
          </StListItem>
          <StListItem>
            <StLink to="/test">권한 테스트 페이지로</StLink>
          </StListItem>
        </StList>
        <StList>
          <StListItem>
            <StLink to="/user/1">1번 유저의 정보</StLink>
          </StListItem>
          <StListItem>
            <StLink to="/user/2">2번 유저의 정보</StLink>
          </StListItem>
        </StList>

        <Link to="/write-post">글 작성하기</Link>
        <Link to="/post-list">글 목록보기</Link>
      </StListContainer>
    </StContainer>
  );
};

export default PublicHomePage;

const StContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StGreeting = styled.p`
  font-size: 1.4em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StListItem = styled.li`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StLink = styled(Link)`
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #3498db;
  font-size: 1.1em;
  font-weight: 500;
  border-radius: 8px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #3498db;
  }
`;
