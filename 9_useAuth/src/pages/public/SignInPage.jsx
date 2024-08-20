import { authApi } from '../../axios/auth';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const { accessToken, avatar, nickname, success, userId } = res.data;

      // 로그인 성공 시
      alert('로그인에 성공하셨습니다. 홈으로 이동합니다.');

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('avatar', avatar);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem('userId', userId);

      navigate('/');

      //  localStorage에 토큰 저장(사실 필요없음(그냥 안전하게 넣어놓은 것) -> res.data에 accessToken이 무조건 있기 때문)
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">아이디: </label>
      <input type="text" id="id" ref={idRef} placeholder="아이디를 입력하세요." />
      <br />
      <label htmlFor="password">비밀번호</label>
      <input type="password" id="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
      <button type="submit">로그인</button>
      <button
        type="button"
        onClick={() => {
          navigate('/sign-up');
        }}
      >
        회원가입하러 가기
      </button>
    </form>
  );
};

export default SignInPage;
