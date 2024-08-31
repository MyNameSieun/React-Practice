import { fetchPostById } from 'api/posts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // dompurify import

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const loadDetailpost = async () => {
      try {
        const response = await fetchPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadDetailpost();
  }, [id]);

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <div>
      {post ? (
        <ul key={post.id}>
          <li>제목: {post.title}</li>
          <li>
            내용:
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content) // 콘텐츠를 dompurify로 sanitize
              }}
            />
          </li>
          <li>작성일: {post.createdAt}</li>
        </ul>
      ) : (
        <p>등록되지 않았거나 삭제된 글입니다</p>
      )}
    </div>
  );
};

export default PostDetailPage;
