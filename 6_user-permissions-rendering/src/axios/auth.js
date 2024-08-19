import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터 설정
authApi.interceptors.request.use(
  (config) => {
    console.log(config);

    const ac = localStorage.getItem("accessToken");

    if (config.url === "/user") {
      if (ac) {
        // Bearer은 소유자라는 뜻인데, "이 토큰의 소유자에게 권한을 부여해줘"라는 의미
        // Bearer뒤에 있는 것을 accessToken으로 사용

        // ( config.headers.Authorization = )과 동일
        config.headers["Authorization"] = `Bearer ${ac}`;
      } else {
        alert("인증이 필요합니다.");
        return Promise.reject("인증이 필요합니다! 오류가 발생했어요.");
      }
    }

    // url에 따른 분기
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
