import { useState } from 'react';
import dayjs from 'dayjs';

const TodoItem = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState(null);

  // 삭제
  const handleDeleteButton = (id) => {
    const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');
    if (deleteConfirm) {
      const newTodo = todos.filter((todo) => todo.id !== id);
      setTodos(newTodo);
    }
  };

  // 수정
  const onEditButton = (todo) => {
    setEdit({ ...todo });
  };

  const handleEditFinishButton = () => {
    const newTodos = todos.map((todo) =>
      todo.id === edit.id ? { ...todo, title: edit.title, content: edit.content, deadline: edit.deadline } : todo
    );
    setTodos(newTodos);
    setEdit(null);
  };

  // 할 일 토글
  const onTodoFinishToggle = (id) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {edit && edit.id === todo.id ? (
            <>
              <input value={edit.title} type="text" onChange={(e) => setEdit({ ...todo, title: e.target.value })} />
              <input value={edit.content} type="text" onChange={(e) => setEdit({ ...todo, content: e.target.value })} />
              <input
                value={edit.deadline}
                type="date"
                onChange={(e) => setEdit({ ...todo, deadline: e.target.value })}
              />
              <button onClick={handleEditFinishButton}>수정 완료</button>
              <button onClick={() => setEdit(null)}>취소</button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <p>마감일: {dayjs(todo.deadline).format('YYYY-MM-DD')}</p>
              <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              <button onClick={() => onEditButton(todo)}>수정</button>
              <button onClick={() => onTodoFinishToggle(todo.id)}>{todo.isDone ? '할 일 취소' : '할 일 완료'}</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
