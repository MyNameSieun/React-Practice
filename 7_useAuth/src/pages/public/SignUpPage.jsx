import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../axios/auth';
import styled from 'styled-components';

const SignUpPage = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nickNameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authApi.post('/register', {
        id: idRef.current.value,
        password: pwRef.current.value,
        nickname: nickNameRef.current.value
      });
      // 성공 시
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/sign-in');
    } catch (error) {
      // 실패 시
      const message = error.response?.data?.message || '회원가입 중 문제가 발생했습니다.';
      setErrorMessage(message); // 상태를 통해 오류 메시지 표시
    }
  };

  return (
    <StContainer>
      <StTitle>회원가입 창</StTitle>
      <StForm onSubmit={handleSubmit}>
        <StLabel htmlFor="id">아이디</StLabel>
        <StInput type="text" name="id" ref={idRef} placeholder="아이디를 입력하세요." />
        <StLabel htmlFor="nickname">닉네임</StLabel>
        <StInput type="text" id="nickname" ref={nickNameRef} placeholder="닉네임을 입력하세요." />
        <StLabel htmlFor="password">비밀번호</StLabel>
        <StInput type="password" id="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
        {errorMessage && <StError>{errorMessage}</StError>}
        <StButton type="submit">회원가입</StButton>
        <StButton
          type="button"
          onClick={() => navigate('/sign-in')}
          style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
        >
          로그인하러 가기
        </StButton>
      </StForm>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 500px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const StTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const StInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const StButton = styled.button`
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StError = styled.p`
  color: #d9534f;
  margin: 0.5rem 0;
`;

export default SignUpPage;
