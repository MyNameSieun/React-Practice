// api.js - API 호출을 담당
import axios from 'axios';

const authApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true // 모든 요청에 대해 쿠키를 전송하도록 설정
});

export const register = async (data) => {
  return await authApi.post('/members/new', data);
};

export const login = async (data) => {
  return await authApi.post('/login', data);
};

export const logout = async () => {
  return await authApi.get('/logout');
};

export const getProfile = async () => {
  return await authApi.get('/profile');
};
