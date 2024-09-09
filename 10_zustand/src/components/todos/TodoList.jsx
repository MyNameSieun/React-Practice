import { useEffect } from 'react';
import { useTodosStore } from 'store/useTodosStore';

const TodoList = () => {
  const { todos, loading, fetchTodos } = useTodosStore();

  // todo 조회
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // 로딩 처리
  if (loading) {
    return <p>...로딩중</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
