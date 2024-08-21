import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 인터셉터 설정
authApi.interceptors.request.use(
  (config) => {
    console.log('authApi config:', config);

    // 유저가 가지고 있는 accessToken이 지금 요청을 보내려고 하는 이 시점에 맞아?? 정확해?? 유효기간 있어?? 를 파악해야한다!
    const token = localStorage.getItem('accessToken');

    if (config.url === '/user') {
      if (token) {
        // Bearer은 소유자라는 뜻인데, "이 토큰의 소유자에게 권한을 부여해줘"라는 의미
        // Bearer뒤에 있는 것을 accessToken으로 사용

        // ( config.headers.Authorization = )과 동일
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        alert('인증이 필요합니다.');
        return Promise.reject('인증이 필요합니다! 오류가 발생했어요.');
      }
    }

    // url에 따른 분기
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
