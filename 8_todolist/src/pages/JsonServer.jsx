import axios from 'axios';
import TodoForm from 'components/json-server/TodoForm';
import TodoList from 'components/json-server/TodoList';
import TodoSort from 'components/json-server/TodoSort';
import React, { useEffect, useState } from 'react';

const JsonServer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
        setTodos(res.data);
      } catch (error) {
        console.error(error, '데이터를 불러오는 중 문제가 발생했습니다.');
      }
    };
    fetchTodos();
  }, []);

  return (
    <main>
      <TodoForm setTodos={setTodos} />
      <TodoSort setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default JsonServer;
