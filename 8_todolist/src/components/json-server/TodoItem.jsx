import axios from 'axios';
import { useState } from 'react';

const TodoItem = ({ todos, setTodos }) => {
  const onIsdoneToggleButton = async (id) => {
    try {
      // 현재 todo 항목을 찾음
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) return;

      // 업데이트할 항목의 isDone 상태를 반전시킴
      const updatedTodo = { ...todoToUpdate, isDone: !todoToUpdate.isDone };

      // 서버에 PATCH 요청을 보냄
      const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, updatedTodo);

      // 상태를 업데이트하여 UI를 갱신함
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error('할 일을 토글하는 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.content}</p>
          <p>마감일: {todo.deadline}</p>
          <button onClick={() => onIsdoneToggleButton(todo.id)}>{todo.isDone ? '할 일 취소' : '할 일 완료'}</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
