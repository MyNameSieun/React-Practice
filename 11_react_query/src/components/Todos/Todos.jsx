// src/components/Todos/Todos.jsx
import { useQuery } from '@tanstack/react-query';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { fetchTodos } from 'api/todos';
import { QUERY_KEYS } from 'components/hooks/query/keys';

const Todos = () => {
  const {
    data: todos = [],
    isLoading,
    error
  } = useQuery({
    queryKey: [QUERY_KEYS.TODOS], // 쿼리 키 사용
    queryFn: fetchTodos
  });

  // 로딩 중 처리
  if (isLoading) {
    return <p>로딩중...</p>;
  }

  // 에러 중 처리
  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  // 완료되지 않은 항목과 완료된 항목을 필터링
  const todosNotDone = todos.filter((todo) => !todo.isDone); // 할 일 남음
  const todosDone = todos.filter((todo) => todo.isDone); // 할 일 완료
  return (
    <>
      <TodoForm />
      <h1>할 일 남음ㅜㅜ</h1>
      <TodoList todos={todosNotDone} isDone={false} />
      <h1>할 일 완료!</h1>
      <TodoList todos={todosDone} isDone={true} />
    </>
  );
};

export default Todos;
