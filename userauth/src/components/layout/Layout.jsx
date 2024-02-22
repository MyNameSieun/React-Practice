import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const Layout = () => {
  return (
    <div>
      <h1>Common Layout</h1>
      <p>로그인 여부와 상관없이 접근 가능한 페이지입니다.</p>
      <Navigation />
      <main></main>
    </div>
  );
};

export default Layout;
