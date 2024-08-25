import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsAxios from '../../axios/posts';
import styled from 'styled-components';

const UserProfilePage = () => {
  const [profilePosts, setProfilePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams(); // URL에서 userId를 추출합니다.

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postsAxios.get('/');
        const posts = res.data;

        // userId와 일치하는 게시글만 필터링
        const userPosts = posts.filter((post) => post.writeUserId === Number(userId));
        setProfilePosts(userPosts);
        setLoading(false);
      } catch (error) {
        setError('게시글을 가져오는 중 오류가 발생했습니다.');
        setLoading(false);
        console.error('게시글을 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchPosts();
  }, [userId]);

  if (loading) return <StLoading>로딩 중...</StLoading>;
  if (error) return <StError>{error}</StError>;

  return (
    <StContainer>
      <StHeader>{profilePosts.length > 0 ? `${profilePosts[0].author}님이 작성한 글` : '사용자 정보'}</StHeader>
      {profilePosts.length > 0 ? (
        <StPostList>
          {profilePosts.map((post) => (
            <StPostItem key={post.id}>
              <StPostTitle>{post.title}</StPostTitle>
              <StPostBody>{post.body}</StPostBody>
            </StPostItem>
          ))}
        </StPostList>
      ) : (
        <StNoPosts>해당 사용자에 대한 게시글이 없습니다.</StNoPosts>
      )}
    </StContainer>
  );
};

export default UserProfilePage;

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

const StLoading = styled.p`
  font-size: 1.2em;
  color: #007bff;
`;

const StError = styled.p`
  font-size: 1.2em;
  color: #dc3545;
`;

const StPostList = styled.div`
  margin-top: 20px;
`;

const StPostItem = styled.div`
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

const StNoPosts = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;
