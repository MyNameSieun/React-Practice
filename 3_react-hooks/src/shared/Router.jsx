import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import UserPage from 'pages/UserPage';
import Layout from 'components/layouts/Layout';
import UseRef from 'components/UseRef';
import Memo from 'components/useMemoPractice/Memo';
import Post from 'components/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="user/:id" element={<UserPage />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="useref" element={<UseRef />} />
          <Route path="memo" element={<Memo />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
