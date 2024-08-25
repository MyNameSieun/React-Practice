import { useState } from 'react';
import commentsAxios from '../../axios/comments';
import postsAxios from '../../axios/posts';
import styled from 'styled-components';

const TestPage = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleGetPostButtonClick = async () => {
    try {
      const response = await postsAxios.get('/');
      setPosts(response.data);
      setComments([]);
    } catch (error) {
      console.log(error);
      alert('포스팅을 가져오는 도중 에러가 발생하였습니다.');
    }
  };

  const handleGetCommentsButtonClick = async () => {
    try {
      const response = await commentsAxios.get('/');
      setComments(response.data);
      setPosts([]);
    } catch (error) {
      console.log(error);
      alert('댓글을 가져오는 도중 에러가 발생하였습니다.');
    }
  };

  return (
    <StContainer>
      <StHeader>Test Page</StHeader>
      <StDescription>API 테스트를 진행합니다.</StDescription>
      <StButton onClick={handleGetPostButtonClick}>Posts 가져오기 테스트 (로그인 필요 없음)</StButton>
      <StButton onClick={handleGetCommentsButtonClick}>Comments 가져오기 테스트 (로그인 필요)</StButton>

      <StSection>
        {posts.length > 0 && (
          <>
            <StSubHeader>Posts</StSubHeader>
            {posts.map((post) => (
              <StPost key={post.id}>
                <StPostTitle>{post.title}</StPostTitle>
                <StPostAuthor>{post.author}</StPostAuthor>
              </StPost>
            ))}
          </>
        )}

        {comments.length > 0 && (
          <>
            <StSubHeader>Comments</StSubHeader>
            {comments.map((comment) => (
              <StComment key={comment.id}>
                <StCommentBody>{comment.body}</StCommentBody>
              </StComment>
            ))}
          </>
        )}
      </StSection>
    </StContainer>
  );
};

export default TestPage;

// Styled Components

const StContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StHeader = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const StDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
`;

const StButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const StSection = styled.div`
  margin-top: 20px;
`;

const StSubHeader = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const StPost = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const StPostTitle = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 5px;
`;

const StPostAuthor = styled.p`
  font-size: 1em;
  color: #666;
`;

const StComment = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const StCommentBody = styled.p`
  font-size: 1em;
  color: #666;
`;
