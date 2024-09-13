import { fetchTodos } from 'api/todos';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetchTodos();
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
        </li>
      ))}
    </div>
  );
};

export default HomePage;
