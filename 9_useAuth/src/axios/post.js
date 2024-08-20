// 권한이 필요없는 요청
import axios from 'axios';

const postAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/post`,
  timeout: 1500
});

export default postAxios;
