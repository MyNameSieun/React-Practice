import axios from 'axios';
import { create } from 'zustand';

// Axios 인스턴스 생성
const todosAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

export const useTodosStore = create((set) => ({
  // todos 초기 값
  todos: [],
  loading: false,

  // todos 조회
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const response = await todosAxios.get('/todos');
      set({ todos: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  // todos 추가
  addTodos: async (data) => {
    try {
      const response = await todosAxios.post('/todos', data);
      set((state) => ({
        todos: [...state.todos, response.data] // 새로운 todo 추가
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // todos 삭제
  deleteTodos: async (id) => {
    try {
      await todosAxios.delete(`/todos/${id}`);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id) // 삭제된 todo 필터링
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // todos 수정
  editTodos: async (id, updatedData) => {
    try {
      const response = await todosAxios.put(`/todos/${id}`, updatedData);
      set((state) => ({
        todos: state.todos.map(
          (todo) => (todo.id === id ? response.data : todo) // 수정된 todo 반영
        )
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // todos 상태 토글
  toggleTodo: async (id, isDone) => {
    try {
      const response = await todosAxios.put(`/todos/${id}`, { isDone });
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: response.data.isDone } : todo))
      }));
    } catch (error) {
      console.error(error);
    }
  }
}));
