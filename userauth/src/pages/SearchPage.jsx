// SearchPage.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import postsAxios from "../axios/posts";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const userId = null;

  // URL의 쿼리 스트링을 변경하는 함수
  const updateSearch = (userId) => {};

  useEffect(() => {}, []);

  const filteredPosts = null;

  return (
    <div>
      <h1>Posting 정보 보기</h1>
      <div>
        {userId ? (
          <p>아이디 {userId}님이 쓰신 글</p>
        ) : (
          <p>아래 두 버튼 중 하나를 선택해주세요.</p>
        )}
      </div>

      <button onClick={() => updateSearch("1")}>1번유저의 글 보기</button>
      <button onClick={() => updateSearch("2")}>2번유저의 글 보기</button>

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
