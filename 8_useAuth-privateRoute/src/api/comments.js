import axios from 'axios';

const commentsAxios = axios.create({
  BaseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
});

// 댓글 작성
const writeComment = async (postId, conetent) => {
  return await commentsAxios.post(`/posts/${postId}/comment`, { content });
};

// 댓글 수정
const updateComment = async (postId, commentId, conetent) => {
  return await commentsAxios.put(`/posts/${postId}/comment/${commentId}`, { content });
};

// 댓글 삭제
const deleteComment = async (postId, commentId) => {
  return await commentsAxios.delete(`/posts/${postId}/comment/${commentId}`);
};

// 댓글 조회
const fetchComments = async (postId) => {
  return await commentsAxios.get(`/posts/${postId}/comments`);
};

// 댓글에 답글 작성
const createReply = async (content) => {
  return await commentsAxios.post(`/reply/${parentId}`, { content });
};

// 댓글에 답글 조회
const fetchReplies = async (parentId) => {
  return await commentsAxios.get(`/comments/${parentId}/replies`);
};
