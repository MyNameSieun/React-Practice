// 권한이 반드시 필요한 요청
import axios from 'axios';

const commentAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/comment`,
  timeout: 1500
});

commentAxios.interceptors.request.use(async (config) => {
  const ac = localStorage.getItem('accessToken');

  try {
    await axios.get('/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ac}`
      }
    });
    return error;
  } catch (error) {
    return Promise.reject(error);
  }
  (error) => {
    return error;
  };
});

commentAxios.interceptors.response.use((response) => {
  console.log('요청 성공입니다.');
  return response;
});
