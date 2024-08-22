import postsAxios from '../../axios/posts';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postFetch = async () => {
      try {
        const res = await postsAxios.get('/');
        setPosts(res.data);
      } catch (error) {
        console.error(error, '글 목록을 불러오는 중 오류가 발생했습니다.');
      }
    };
    postFetch();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          <p>제목: {post.title}</p>
          <p>내용: {post.body}</p>
          <p>글쓴이: {post.author}</p>
          <p>이미지:{post.imageFile}</p>
        </li>
      ))}
    </div>
  );
};

export default PostList;
