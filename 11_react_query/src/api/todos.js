// src/api/todos.js
import axios from 'axios';

const todosAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

// todos 조회
export const fetchTodos = async () => {
  const response = await todosAxios.get('/todos');
  return response.data;
};

// todos 작성
export const addTodos = async (data) => {
  const response = await todosAxios.post('/todos', data);
  return response.data;
};

// todos 삭제
export const deleteTodos = async (id) => {
  const response = await todosAxios.delete(`/todos/${id}`);
  return response.data;
};

// todos 수정
export const editTodos = async (id, data) => {
  const response = await todosAxios.patch(`/todos/${id}`, data);
  return response.data;
};

// todos toggle
export const toggleTodos = async (id, isDone) => {
  const response = await todosAxios.patch(`/todos/${id}`, { isDone: !isDone });
  return response.data;
};
