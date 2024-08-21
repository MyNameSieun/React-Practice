import axios from 'axios';
import { createContext, useContext, useState } from 'react';

// 인증 상태를 관리할 Context 생성
const AuthContext = createContext();

// Axios 인스턴스 생성 (JWT 인증 서버와 연결)
const authApiInstance = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 현재 로그인된 사용자 상태
  const isSignIn = !!user; // 로그인 여부 확인

  // 로그인 기능
  const signIn = async ({ id, password }) => {
    try {
      const {
        data: { accessToken, ...user }
      } = await authApiInstance.post('/login', { id, password });
      setUser(user); // 로그인된 사용자 정보 저장
      authApiInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`; // 인증 토큰 설정
      return true; // 로그인 성공
    } catch (error) {
      return false; // 로그인 실패
    }
  };

  // 회원가입 기능
  const signUp = async ({ id, password, nickname }) => {
    try {
      await authApiInstance.post('/register', { id, password, nickname });
      return true; // 회원가입 성공
    } catch (error) {
      return false; // 회원가입 실패
    }
  };

  // 로그아웃 기능
  const signOut = () => {
    setUser(null); // 사용자 정보 삭제
    delete authApiInstance.defaults.headers['Authorization']; // 인증 토큰 삭제
  };

  const contextValue = { isSignIn, signIn, signUp, signOut };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// 인증 상태를 사용하기 위한 커스텀 훅
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
