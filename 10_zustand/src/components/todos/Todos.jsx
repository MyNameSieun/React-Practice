import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <>
      <TodoForm />
      <StH1>할 일 미완료</StH1>
      <TodoList showCompleted={true} />
      <StH1>할 일 완료</StH1>
      <TodoList showCompleted={false} />
    </>
  );
};

export default Todos;

const StH1 = styled.h1`
  font-size: 24px;
`;
