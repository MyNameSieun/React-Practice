import React from "react";

const Home = () => {
  const at = localStorage.getItem("accessToken");
  const nickname = localStorage.getItem("nickname");
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {at ? <p>안녕하세요, {nickname}님!</p> : <p>로그인을 해주세요.</p>}
    </div>
  );
};

export default Home;
