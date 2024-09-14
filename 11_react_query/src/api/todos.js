import axios from 'axios';

const todosAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

// todos 조회
export const fetchTodos = async () => {
  return await todosAxios.get(`/todos`);
};

// todos 작성
export const addTodos = async (data) => {
  return await todosAxios.post(`/todos`, data);
};

// todos 삭제
export const deleteTodos = async (id) => {
  return await todosAxios.delete(`/todos/${id}`);
};

// todos 수정
export const editTodos = async (id, data) => {
  return await todosAxios.patch(`/todos/${id}`, data);
};

// todos toggle
export const toggleTodos = async (id) => {
  return await todosAxios.patch(`/todos/${id}`);
};
