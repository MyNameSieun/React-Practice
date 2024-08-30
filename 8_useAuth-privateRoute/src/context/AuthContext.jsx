import { getProfile } from 'api/auth';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isSignIn = !!user; // 로그인 상태 확인

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.member);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser, isSignIn }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
