import TodoForm from 'components/props-drilling/TodoForm';
import TodoList from 'components/props-drilling/TodoList';
import TodoSort from 'components/props-drilling/TodoSort';
import { useState } from 'react';

const PropsDrilling = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoSort setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default PropsDrilling;
