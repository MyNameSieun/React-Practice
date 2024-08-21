// 권한이 필요없는 요청
import axios from 'axios';

const postsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/posts`,
  timeout: 1500
});

export default postsAxios;
