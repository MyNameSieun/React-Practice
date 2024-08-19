import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:3001",
});

// 응답 인터셉터 추가
api.interceptors.response.use(function (response) {
  console.log("응답합니다.");
  return response;
});

// 요청 인터셉터 추가
api.interceptors.request.use(function (request) {
  console.log("요청합니다");
  return request;
});

export default api;
