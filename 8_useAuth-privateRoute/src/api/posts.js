// postsApi.js
import axios from 'axios';

const postsAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 게시글 목록 조회
export const fetchPosts = async () => {
  const response = await postsAxios.get('/posts');
  return response.data;
};

// 게시글 작성
export const createPost = async (data) => {
  const response = await postsAxios.post('/posts/new', data);
  return response.data;
};

// 특정 게시글 조회
export const fetchPostById = async (id) => {
  const response = await postsAxios.get(`/posts/${id}`);
  return response.data;
};

// 게시글 수정
export const updatePost = async (id, data) => {
  const response = await postsAxios.put(`/posts/${id}`, data);
  return response.data;
};

// 게시글 삭제
export const deletePost = async (id) => {
  const response = await postsAxios.delete(`/posts/${id}`);
  return response.data;
};
