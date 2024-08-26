import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getProfile } from 'api/auth';

const UserProfilePage = () => {
  const { user, setUser } = useAuth();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile(); // `getProfile` 호출
        setUser(response.data.member); // 사용자 상태 업데이트
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null); // 오류 발생 시 사용자 상태를 null로 설정
      }
    };
    fetchUser();
  }, [setUser]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfilePage;
