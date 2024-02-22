import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route>
          <Route path="/" />
          <Route path="/search" />
          <Route path="/testPage" />
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        <Route>
          <Route path="/login" />
          <Route path="/signup" />
        </Route>

        {/* 로그인이 필요한 라우터 */}
        <Route>
          <Route path="/user/:userId" />
        </Route>

        {/* 404 Not Found */}
        <Route />
      </Routes>
    </Router>
  );
}
