import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../axios/auth';
import styled from 'styled-components';

const SignInPage = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authApi.post('/login', {
        id: idRef.current.value,
        password: pwRef.current.value
      });
      const { accessToken, avatar, nickname, userId } = res.data;

      // 로그인 성공 시
      alert('로그인에 성공하셨습니다. 홈으로 이동합니다.');

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('avatar', avatar);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userId', userId);

      navigate('/');

      if (!res.data.accessToken) {
        alert('토큰이 없습니다. 고객센터에 문의해주세요.');
        return;
      }
    } catch (error) {
      // 로그인 실패 시
      const message = error.response.data.message;
      alert(message || '로그인 중 문제가 발생했습니다.'); // 사용자 확인
      console.log(message); // 개발자 확인
    }
  };

  return (
    <StContainer>
      <StTitle>로그인 창</StTitle>
      <StForm onSubmit={handleSubmit}>
        <StLabel htmlFor="id">아이디: </StLabel>
        <StInput type="text" id="id" ref={idRef} placeholder="아이디를 입력하세요." />
        <StLabel htmlFor="password">비밀번호</StLabel>
        <StInput type="password" id="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
        <StButton type="submit">로그인</StButton>
        <StButton
          type="button"
          onClick={() => {
            navigate('/sign-up');
          }}
          style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
        >
          회원가입하러 가기
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

export default SignInPage;
