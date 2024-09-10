import { useEffect, useState } from 'react';
import { useTodosStore } from 'store/useTodosStore';

const TodoList = () => {
  const { todos, loading, fetchTodos, deleteTodos, editTodos } = useTodosStore();
  const [edit, setEdit] = useState(null);

  // todo 조회
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // 로딩 처리
  if (loading) {
    return <p>...로딩중</p>;
  }

  // todo 삭제
  const handleDeleteTodo = (todo) => {
    const deleteComfirm = window.confirm('정말 삭제하시겠습니까?');
    if (deleteComfirm) {
      deleteTodos(todo);
      alert('삭제가 완료되었습니다.');
    }
  };

  // 수정 모드 전환
  const handleEditMode = (todo) => {
    setEdit(todo);
  };

  // 수정 완료
  const handleDoneEdit = (todoId) => {
    editTodos(todoId, { title: edit.title, content: edit.content });
    alert('수정이 완료되었습니다.');
    setEdit(null);
  };

  return (
    <ul>
      {todos.map((todo) => (
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
