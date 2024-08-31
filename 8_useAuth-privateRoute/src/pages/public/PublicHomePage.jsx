import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

const PublicHomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <p>로그인 한 사용자만 접근 가능</p>
      <p>안녕하세요 {user ? user.nickname : 'Guest'}님!</p>
    </div>
  );
};

export default PublicHomePage;