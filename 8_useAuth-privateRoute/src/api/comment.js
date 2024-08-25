import axios from 'axios';

const commentsAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 댓글 작성
export const createComment = async (postId, data) => {
  try {
    const response = await commentsAxios.post(`/posts/${postId}/comment`, data);
    return response.data;
  } catch (error) {
    return;
  }
};

// 게시글의 댓글 목록 조회
export const fetchComments = async (postId) => {
  const response = await commentsAxios.get(`/posts/${postId}/comments`);
  return response.data;
};

// 댓글 수정
export const updateComment = async (postId, commentId, data) => {
  const response = await commentsAxios.put(`/posts/${postId}/comment/${commentId}`, data);
  return response.data;
};

// 댓글 삭제
export const deleteComment = async (postId, commentId) => {
  const response = await commentsAxios.delete(`/posts/${postId}/comment/${commentId}`);
  return response.data;
};

// 댓글에 답글 작성
export const createReply = async (parentId, data) => {
  const response = await commentsAxios.post(`/reply/${parentId}`, data);
  return response.data;
};

// 댓글의 답글 목록 조회
export const fetchReplies = async (parentId) => {
  const response = await commentsAxios.get(`/comments/${parentId}/replies`);
  return response.data;
};
