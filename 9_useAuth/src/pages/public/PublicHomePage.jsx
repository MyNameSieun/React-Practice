import { Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import TestPage from './TestPage';
import UserProfilePage from 'pages/protected/UserProfilePage';

const PublicHomePage = () => {
  const at = localStorage.getItem('accessToken');
  const nickname = localStorage.getItem('nickname');

  return (
    <div>
      PublicHomePage
      {at ? <p>안녕하세요, {nickname}님!</p> : <p>로그인을 해주세요!</p>}
      <SearchPage />
      <TestPage />
      <UserProfilePage />
      <p>❗️ 로그인이 반드시 필요한 메뉴</p>
      <li>
        <Link to="/user/1">1번 유저의 정보</Link>
      </li>
      <li>
        <Link to="/user/2">2번 유저의 정보</Link>
      </li>
    </div>
  );
};

export default PublicHomePage;
