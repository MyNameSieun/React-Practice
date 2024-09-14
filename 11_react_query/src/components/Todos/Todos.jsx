import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { fetchTodos } from 'api/todos';
import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetchTodos();
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTodos();
  }, []);

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todos;
