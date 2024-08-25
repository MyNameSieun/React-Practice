// 권한이 반드시 필요한 요청
import axios from 'axios';
import { authApi } from './auth';

const commentsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/comments`,
  timeout: 1500
});

commentsAxios.interceptors.request.use(
  async (config) => {
    try {
      // (1) 유저 권한 체크 to 백엔드
      await authApi.get(`/user`);
      return config; // 성공
    } catch (error) {
      return Promise.reject(error); // 비동기 작업 중 발생한 에러 반환
    }
  },
  (error) => {
    return Promise.reject(error); // 요청 설정 오류 반환
  }
);

commentsAxios.interceptors.response.use((response) => {
  console.log('요청 성공입니다.');
  return response;
});

export default commentsAxios;
