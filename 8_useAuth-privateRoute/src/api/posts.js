import axios from 'axios';

const postAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
});

// 게시글 작성
const createPost = async (data) => {
  return await postAxios.post(`/posts/new`, { data });
};

// 게시글 목록 조회
const fetchPosts = async (data) => {
  return await postAxios.get(`/posts`, { data });
};

// 게시글 조회
const fetchPostById = async (id) => {
  return await postAxios.get(`/posts/${id}`);
};

// 게시글 삭제
const deletePost = async (id) => {
  return await postAxios.delete(`/posts/${id}`);
};

// 게시글 수정
const updatePost = async (id) => {
  return await postAxios.put(`/posts/${id}`);
};
