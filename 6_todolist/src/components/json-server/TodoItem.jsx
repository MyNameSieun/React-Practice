import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';

const TodoItem = ({ todos, setTodos }) => {
  const [editMode, setEditMode] = useState(null);

  // 삭제
  const handleDeleteButton = async (id) => {
    try {
      const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');

      if (deleteConfirm) {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.error(error, '데이터를 삭제하는 중 오류가 발생했습니다.');
    }
  };

  // 수정
  const handleEditMode = (todo) => {
    setEditMode({ ...todo });
  };

  const handleCompleteEdit = async () => {
    try {
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${editMode.id}`, {
        title: editMode.title,
        content: editMode.content,
        deadline: editMode.deadline
      });
      setTodos((prev) => prev.map((todo) => (todo.id === editMode.id ? editMode : todo)));

      setEditMode(null);
    } catch (error) {
      console.error(error, '데이터를 수정하는 중 오류가 발생했습니다.');
    }
  };

  // 토글
  const onIsDoneToggle = async (id) => {
    try {
      // 현재 todo 객체를 찾기
      const currentTodo = todos.find((todo) => todo.id === id);

      // todo의 isDone 상태를 토글
      const updatedTodo = { ...currentTodo, isDone: !currentTodo.isDone };

      // 서버에 PATCH 요청을 보내기
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, updatedTodo);

      // 로컬 상태를 업데이트
      setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error(error, '토글 오류 발생');
    }
  };

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          {editMode && editMode.id === todo.id ? (
            <>
              <input
                type="text"
                name="title"
                value={editMode.title}
                onChange={(e) => setEditMode({ ...editMode, title: e.target.value })}
              />
              <input
                type="text"
                name="content"
                value={editMode.content}
                onChange={(e) => setEditMode({ ...editMode, content: e.target.value })}
              />
              <input
                type="date"
                name="deadline"
                value={editMode.deadline}
                onChange={(e) => setEditMode({ ...editMode, deadline: e.target.value })}
              />

              <button onClick={() => setEditMode(null)}>수정 취소</button>
              <button onClick={handleCompleteEdit}>수정 완료</button>
              <button onClick={() => onIsDoneToggle(todo.id)}>{todo.isDone ? '할 일 취소' : '할 일 완료'}</button>
              <hr />
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <p>마감일: {dayjs(todo.deadline).format('YYYY-MM-DD')}</p>
              <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              <button onClick={() => handleEditMode(todo)}>수정</button>
              <button onClick={() => onIsDoneToggle(todo.id)}>{todo.isDone ? '할 일 취소' : '할 일 완료'}</button>
              <hr />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
