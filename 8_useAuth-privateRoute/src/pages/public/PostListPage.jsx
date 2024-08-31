import { fetchPosts } from 'api/posts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify'; // dompurify import

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <StPostItem key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
              <p>제목: {post.title}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content) // 콘텐츠를 dompurify로 sanitize
                }}
              />
              <p>작성일: {post.createdAt}</p>
            </StPostItem>
          ))}
        </ul>
      ) : (
        <p>등록된 글이 없습니다.</p>
      )}
    </div>
  );
};

export default PostListPage;

const StPostItem = styled.li`
  padding: 1rem;
  border: 1px solid black;
  cursor: pointer;
`;
