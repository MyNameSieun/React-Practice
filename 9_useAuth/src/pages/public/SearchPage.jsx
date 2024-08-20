import postAxios from '../../axios/post';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const userId = searchParams.get('userId');

  // URL의 쿼리 스트링을 변경하는 함수
  const updateSearch = (userId) => {
    setSearchParams({ userId });
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await postAxios.get('/');
        setPosts(res.data);
      } catch (error) {
        alert('글 목록을 가져오는 중 오류가 발생하였습니다.');
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => post.writeUserId === Number(userId));

  return (
    <div>
      <h1>Posting 정보 보기(검색페이지)</h1>
      <div>{userId ? <p>아이디 {userId}님이 쓰신 글</p> : <p>아래 두 버튼 중 하나를 선택해주세요.</p>}</div>
      <button onClick={() => updateSearch(1)}>1번 유저의 글 보기</button>
      <button onClick={() => updateSearch(2)}>2번 유저의 글 보기</button>

      {filteredPosts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
