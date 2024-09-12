// src/components/todos/TodoList.jsx
import { useEffect, useState } from 'react';
import { useTodosStore } from 'store/useTodosStore';

const TodoList = ({ showCompleted }) => {
  const { todos, loading, fetchTodos, deleteTodos, editTodos, toggleTodo } = useTodosStore();
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) {
    return <p>...로딩중</p>;
  }

  const handleDeleteTodo = (todo) => {
    const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');
    if (deleteConfirm) {
      deleteTodos(todo);
      alert('삭제가 완료되었습니다.');
    }
  };

  const handleEditMode = (todo) => {
    setEdit(todo);
  };

  const handleDoneEdit = (todoId) => {
    editTodos(todoId, { title: edit.title, content: edit.content });
    alert('수정이 완료되었습니다.');
    setEdit(null);
  };

  const handleToggleTodo = (todo) => {
    toggleTodo(todo.id, !todo.isDone);
  };

  const filteredTodos = todos.filter((todo) => todo.isDone === showCompleted);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          {edit && todo.id === edit.id ? (
            <>
              <input value={edit.title} onChange={(e) => setEdit((prev) => ({ ...prev, title: e.target.value }))} />
              <input value={edit.content} onChange={(e) => setEdit((prev) => ({ ...prev, content: e.target.value }))} />
              <button onClick={() => setEdit(null)}>취소</button>
              <button onClick={() => handleDoneEdit(todo.id)}>완료</button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <p>완료 상태: {todo.isDone ? '완료됨' : '미완료'}</p>
              <button onClick={() => handleToggleTodo(todo)}>{todo.isDone ? '취소' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
              <button onClick={() => handleEditMode(todo)}>수정</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
