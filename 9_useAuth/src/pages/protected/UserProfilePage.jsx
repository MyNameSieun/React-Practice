import styled from 'styled-components';

const UserProfilePage = () => {
  // 예시 데이터: 실제 데이터는 API 호출 등을 통해 가져오도록 수정해야 합니다.
  const user = {
    avatar: 'https://via.placeholder.com/150', // 사용자 아바타 URL
    nickname: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.'
  };

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

export default UserProfilePage;

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
