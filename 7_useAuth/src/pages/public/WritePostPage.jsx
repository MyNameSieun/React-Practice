import { PostsContext } from '../../context/PostsContext';
import postsAxios from '../../axios/posts';
import { useContext, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const WritePostPage = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const getPosts = async () => {
      try {
        const res = await postsAxios.post('/', {
          id: uuid(),
          title: titleRef.current.value,
          body: contentRef.current.value
        });
        setPosts((prev) => [...prev, res.data]);
        alert('글 작성이 완료되었습니다!');
        navigate(-1); // 이전 페이지로 이동
      } catch (error) {
        alert('글을 작성하는 중 오류가 발생했습니다.');
        console.log(error);
      }
    };
    getPosts();
  };

  return (
    <div>
      <h1>글 작성하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목: </label>
          <input type="text" id="title" ref={titleRef} placeholder="제목을 입력하세요" />
        </div>
        <div>
          <label htmlFor="content">내용: </label>
          <textarea type="text" id="content" ref={contentRef} placeholder="내용을 입력하세요" />
        </div>

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default WritePostPage;
