// api.js - API 호출을 담당
import axios from 'axios';

// Axios 인스턴스 생성
const authApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, // 환경 변수에서 기본 URL을 설정
  withCredentials: true // 쿠키를 자동으로 포함시키기 위한 설정
});
// 요청과 응답 인터셉터 설정
authApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 로그인 페이지로 리디렉션
      window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

// API 호출 함수들
export const register = async (data) => {
  return await authApi.post('/members/new', data);
};

export const login = async (data) => {
  return await authApi.post('/login', data);
};

export const logout = async () => {
  return await authApi.get('/logout');
};

// 프로필 정보 요청
export const getProfile = async () => {
  return await authApi.get('/profile');
};
