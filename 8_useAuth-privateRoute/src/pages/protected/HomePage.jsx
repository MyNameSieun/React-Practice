import { useAuth } from 'context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>로그인 한사용자만 접근 가능</p>
      <p>안녕하세요, {user?.nickname} 님!</p>
    </div>
  );
};

export default HomePage;
