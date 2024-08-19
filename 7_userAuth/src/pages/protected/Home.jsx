// pages/protected/Home.jsx
import { useAuth } from '../../provider/authProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('정말 로그아웃하시겠습니까?');
    if (confirmed) {
      alert('로그아웃이 완료되었습니다.');
      signOut();
      navigate('/sign-in'); // 로그아웃 후 로그인 페이지로 이동
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Home;
