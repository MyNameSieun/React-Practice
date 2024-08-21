import styled from 'styled-components';

const NotFound = () => {
  return (
    <StContainer>
      <StMessage>페이지를 찾을 수 없습니다.</StMessage>
    </StContainer>
  );
};

export default NotFound;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const StMessage = styled.div`
  font-size: 24px;
  color: #dc3545;
  text-align: center;
  padding: 20px;
  border: 1px solid #dc3545;
  border-radius: 5px;
  background-color: #fff;
`;
