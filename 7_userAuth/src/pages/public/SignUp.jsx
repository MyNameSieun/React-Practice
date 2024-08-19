import { useAuth } from 'provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { signUp } = useAuth(); // 회원가입 함수 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    const id = e.target.id.value;
    const password = e.target.password.value;
    const nickname = e.target.nickname.value;

    const success = await signUp({ id, password, nickname }); // 회원가입 시도

    if (success) {
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/sign-in'); // 성공 시 로그인 페이지로 이동
    } else {
      alert('회원가입에 실패하였습니다. 아이디 또는 비밀번호를 확인해 주세요.');
    }
  };

  return (
    <>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input name="id" type="text" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input name="password" type="password" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input name="nickname" type="text" />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
