import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  const notDoneTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);

  return (
    <>
      <StH1>남은 할 일</StH1>
      <TodoItem todos={notDoneTodos} setTodos={setTodos} />
      <StH1>할 일 끝</StH1>
      <TodoItem todos={doneTodos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;

const StH1 = styled.h1`
  font-size: 24px;
`;
