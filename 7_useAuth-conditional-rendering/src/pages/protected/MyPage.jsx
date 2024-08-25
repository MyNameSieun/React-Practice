import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authApi } from '../../axios/auth';

const MyPage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authApi.get('/user'); // 인증이 필요하므로 authApi를 사용
        setUser(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StContainer>
      <StProfileCard>
        <StAvatar src={user.avatar} alt={`${user.nickname}'s avatar`} />
        <StProfileInfo>
          <StNickname>{user.nickname}</StNickname>
          <StEmail>{user.email}</StEmail>
          <StBio>{user.bio}</StBio>
        </StProfileInfo>
      </StProfileCard>
    </StContainer>
  );
};

export default MyPage;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

const StProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  padding: 20px;
`;

const StAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const StProfileInfo = styled.div`
  text-align: center;
`;

const StNickname = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const StEmail = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const StBio = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-top: 0;
`;
