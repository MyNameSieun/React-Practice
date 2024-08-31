import { fetchComments } from 'api/comments';
import { useEffect, useState } from 'react';

const CommentsList = ({ id }) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const response = await fetchComments(id);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadComments();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
          <p>{comment.createdAt}</p>
          <p>{comment.author.nickname}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
