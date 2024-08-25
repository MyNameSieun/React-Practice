// AuthContext.js - 사용자 인증 상태와 관련된 로직을 구현
import { createContext, useState, useEffect, useContext } from 'react';
import { login as apiLogin, logout as apiLogout, getProfile } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isSignIn = user !== null; // 로그인 상태 확인

  // 페이지 새로고침 시 로그인 상태 유지
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.member);
      } catch (error) {
        // 인증되지 않은 상태
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password1: password });
      setUser(response.data);
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

  return <AuthContext.Provider value={{ user, isSignIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
