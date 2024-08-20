import SearchPage from './SearchPage';
import TestPage from './TestPage';

const PublicHomePage = () => {
  const at = localStorage.getItem('accessToken');
  const nickname = localStorage.getItem('nickname');

  return (
    <div>
      PublicHomePage
      {at ? <p>안녕하세요, {nickname}님!</p> : <p>로그인을 해주세요!</p>}
      <SearchPage />
      <TestPage />
    </div>
  );
};

export default PublicHomePage;
