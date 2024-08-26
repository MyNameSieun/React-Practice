import { createContext, useState, useEffect, useContext } from 'react';
import { login as apiLogin, logout as apiLogout, getProfile } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isSignIn = user !== null; // 로그인 상태 확인

  // 페이지 새로고침 시 유저 정보 가져오기
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile(); // 서버에서 사용자 정보 가져오기
        setUser(response.data.member); // 사용자 정보 업데이트
      } catch (error) {
        setUser(null); // 인증 실패 시 사용자 정보 초기화
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password1: password });
      // 서버가 쿠키를 설정하므로, 클라이언트에서 로컬스토리지에 저장할 필요 없음
      setUser(response.data); // 상태 업데이트
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return <AuthContext.Provider value={{ user, setUser, isSignIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
