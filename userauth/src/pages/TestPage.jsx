import React from "react";
import commentsAxios from "../axios/comments";
import postsAxios from "../axios/posts";

const TestPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  const handleGetPostButtonClick = async () => {};

  const handleGetCommentsButtonClick = async () => {};

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
        <></>
      ))}

      {comments?.map((comment) => (
        <></>
      ))}
    </div>
  );
};

export default TestPage;
