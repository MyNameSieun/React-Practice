// axios instance

import axios from 'axios';

export const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 인터셉터 설정
authApi.interceptors.request.use((config) => {
  console.log(config);

  const ac = localStorage.getItem('accseeToken');

  if (config.url === '/user') {
    if (ac) {
      config.headers['Authorization'] = `Bearer ${ac}`;
    } else {
      alert('인증이 필요합니다.');
      return Promise.reject('인증이 필요합니다! 오류가 발생했어요.');
    }
    return config;
  }
  (error) => {
    return Promise.reject(error);
  };
});
