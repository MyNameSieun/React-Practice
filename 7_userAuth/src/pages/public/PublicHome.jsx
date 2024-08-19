// pages/public/PublicHome.jsx

import { Link } from 'react-router-dom';

const PublicHome = () => {
  return (
    <div>
      <h1>PublicHomePage</h1>
      <Link to="/sign-in">
        <button>로그인하러 가기</button>
      </Link>
      <Link to="/sign-up">
        <button>회원가입하러 가기</button>
      </Link>
    </div>
  );
};

export default PublicHome;
