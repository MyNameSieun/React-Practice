import axios from 'axios';
import { useEffect, useRef } from 'react';

const SignInPage = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
        id: idRef.current.value,
        password: pwRef.current.value
      });

      const { accessToken, avatar, nickname, success, userId } = res.data;
      localStorage.setItem('accessToken', accessToken);
      console.log(accessToken);

      alert('로그인 성공');
    } catch (error) {
      alert(error.response.data.message || '로그인 중 문제가 발생했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" ref={idRef} placeholder="아이디를 입력하세요." />
      <input type="password" name="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
      <button type="submit">로그인</button>
    </form>
  );
};

export default SignInPage;
