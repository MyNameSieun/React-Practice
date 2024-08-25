import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import postsAxios from '../../axios/posts';
import styled from 'styled-components';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const userId = searchParams.get('userId');

  const updateSearch = (userId) => {
    setSearchParams({ userId });
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await postsAxios.get('/');
        const posts = res.data;

        const userPosts = posts.filter((post) => post.writeUserId === Number(userId));
        setPosts(userPosts);
      } catch (error) {
        alert('글 목록을 가져오는 중 오류가 발생하였습니다.');
        console.log(error);
      }
    };
    getPosts();
  }, [userId]);

  return (
    <StContainer>
      <StHeader>Posting 정보 보기 (검색페이지)</StHeader>
      <StGreeting>
        {userId ? (
          posts.length > 0 ? (
            <StLink to={`/user/${posts[0].writeUserId}`}>{posts[0].author}님이 작성한 글 (더보기 ↗️)</StLink>
          ) : (
            <p>해당 사용자에 대한 게시글이 없습니다.</p>
          )
        ) : (
          <p>아래 두 버튼 중 하나를 선택해주세요.</p>
        )}
      </StGreeting>
      <StButtonContainer>
        <StButton onClick={() => updateSearch(1)}>1번 유저의 글 보기</StButton>
        <StButton onClick={() => updateSearch(2)}>2번 유저의 글 보기</StButton>
      </StButtonContainer>
      {posts.map((post) => (
        <StPost key={post.id}>
          <StPostTitle>{post.title}</StPostTitle>
          <StPostBody>{post.body}</StPostBody>
        </StPost>
      ))}
    </StContainer>
  );
};

export default SearchPage;

// Styled Components

const StContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StHeader = styled.h1`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

const StGreeting = styled.div`
  margin-bottom: 20px;
`;

const StLink = styled(Link)`
  font-size: 1.2em;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const StButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const StButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StPost = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StPostTitle = styled.h2`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
`;

const StPostBody = styled.p`
  font-size: 1em;
  color: #666;
`;
