// src/components/Todos/Todos.jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { fetchTodos, addTodos } from 'api/todos';
import styled from 'styled-components';

const Todos = () => {
  const queryClient = useQueryClient();

  // todos 데이터 fetch
  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  // 할 일 추가
  const addTodoMutation = useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  // 로딩 중 처리
  if (isLoading) {
    return <p>로딩중...</p>;
  }

  // 완료되지 않은 항목과 완료된 항목을 필터링
  const todosNotDone = todos.filter((todo) => !todo.isDone); // 할 일 남음
  const todosDone = todos.filter((todo) => todo.isDone); // 할 일 완료

  return (
    <>
      {/* 할 일 추가 폼 */}
      <TodoForm addTodoMutation={addTodoMutation} />

      <StH1>할 일 남음</StH1>
      <TodoList todos={todosNotDone} isDone={false} />

      <StH1>할 일 완료!</StH1>
      <TodoList todos={todosDone} isDone={true} />
    </>
  );
};

export default Todos;

const StH1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
