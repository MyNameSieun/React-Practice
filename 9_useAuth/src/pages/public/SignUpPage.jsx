import axios from 'axios';
import { useEffect, useRef } from 'react';

const SignUpPage = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nickNameRef = useRef(null);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, {
        id: idRef.current.value,
        password: pwRef.current.value,
        nickname: nickNameRef.current.value
      });
    } catch (error) {
      alert(error.response.data.message || '회원가입 중 문제가 발생했습니다.');
    }
  };

  return (
    <div>
      <h1>회원가입 창</h1>
      <form onSubmit={handleSubmit}>
        <p>
          아이디: <input type="text" name="id" ref={idRef} placeholder="아이디를 입력하세요." />
        </p>
        <p>
          패스워드: <input type="text" name="nickname" ref={nickNameRef} placeholder="닉네임을 입력하세요." />
        </p>
        <p>
          닉네임: <input type="password" name="password" ref={pwRef} placeholder="비밀번호를 입력하세요." />
        </p>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
