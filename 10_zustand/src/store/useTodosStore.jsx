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
      const response = await todosAxios.patch(`/todos/${id}`, updatedData);
      set((state) => ({
        todos: state.todos.map(
          (todo) => (todo.id === id ? response.data : todo) // 수정된 todo 반영
        )
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // todos isDone 상태 수정
  toggleTodos: async (id) => {
    try {
      // 1. 현재 상태에서 id와 일치하는 todo 찾기
      //_토글은 isDone 값을 반전시키기 때문에, 현재 상태를 먼저 알아야 함
      const todoToggle = useTodosStore.getState().todos.find((todo) => todo.id === id);

      // 2. 찾은 todo의 isDone 값을 반전시켜서 서버에 PATCH 요청을 보내기
      const response = await todosAxios.patch(`/todos/${id}`, {
        isDone: !todoToggle.isDone
      });

      // 3. 서버 응답으로 상태 업데이트
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: response.data.isDone } : todo))
      }));
    } catch (error) {
      console.error(error);
    }
  }
}));
