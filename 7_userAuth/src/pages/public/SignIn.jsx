import { useAuth } from '../../../src/provider/authProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { signIn } = useAuth(); // 인증 제공자에서 로그인 함수 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const { state } = useLocation(); // 이전 페이지 정보 가져오기
  const navigateTo = state?.redirectedFrom || '/'; // 로그인 후 이동할 페이지 설정

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    const id = e.target.id.value;
    const password = e.target.password.value;

    const success = await signIn({ id, password }); // 로그인 시도

    if (success) {
      alert('로그인이 완료되었습니다.');
      navigate(navigateTo); // 성공 시 이전 페이지로 이동
    } else {
      alert('로그인에 실패하셨습니다!');
    }
  };

  return (
    <>
      <h1>SignIn Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input name="id" type="text" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input name="password" type="password" autoComplete="off" />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default SignIn;
