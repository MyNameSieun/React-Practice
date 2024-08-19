import React from "react";
import commentsAxios from "../axios/comments";
import postsAxios from "../axios/posts";

const TestPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  const handleGetPostButtonClick = async () => {
    try {
      const response = await postsAxios.get("/");
      setPosts(response.data);
      setComments([]);
    } catch (error) {
      console.log(error);
      alert("포스팅을 가져오는 도중 에러가 발생하였습니다.");
    }
  };

  const handleGetCommentsButtonClick = async () => {
    try {
      const response = await commentsAxios.get("/");
      setComments(response.data);
      setPosts([]);
    } catch (error) {
      console.log(error);
      alert("accessToken 유효 시간이 만료되었습니다.");
    }
  };

  return (
    <div>
      <h1>Test Page</h1>
      <p>api 테스트를 진행합니다.</p>
      <button onClick={handleGetPostButtonClick}>
        posts가져오기 테스트(로그인필요없음)
      </button>
      <button onClick={handleGetCommentsButtonClick}>
        comments가져오기 테스트(로그인필요)
      </button>

      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
        </div>
      ))}

      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
