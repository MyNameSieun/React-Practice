import { authApi } from '../../axios/auth';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nickNameRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authApi.post(`/register`, {
        id: idRef.current.value,
        password: pwRef.current.value,
        nickname: nickNameRef.current.value
      });
      // 성공 시
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      // 실패 시
      const message = error.response.data.message;
      alert(message || '회원가입 중 문제가 발생했습니다.'); // 사용자 확인
      console.log(message); // 개발자 확인
    }
  };

  return (
    <div>
      <h1>회원가입 창</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" ref={idRef} placeholder="아이디를 입력하세요." />
        <br />
        <label htmlFor="nickname">닉네임</label>
        <input type="text" id="nickname" ref={nickNameRef} placeholder="닉네임을 입력하세요." />
        <br />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
        <br />
        <button type="submit">회원가입</button>
        <button
          type="button"
          onClick={() => {
            navigate('/sign-in');
          }}
        >
          로그인하러 가기
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
