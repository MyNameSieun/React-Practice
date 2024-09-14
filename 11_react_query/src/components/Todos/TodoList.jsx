import { deleteTodos, editTodos, fetchTodos } from 'api/todos';
import { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState(null);

  // 삭제
  const handleDeleteButton = async (id) => {
    try {
      await deleteTodos(id);
      alert('삭제 완료!');
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 수정
  const handleEditTodos = async (id) => {
    try {
      await editTodos(id, { title: editTodo.title, content: editTodo.content });
      alert('수정 완료!');
      setEditTodo(null);

      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editTodo && todo.id === editTodo.id ? (
            <>
              <input
                value={editTodo.title}
                onChange={(e) => setEditTodo((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="수정할 제목을 입력하세요"
              />
              <input
                value={editTodo.content}
                onChange={(e) => setEditTodo((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="수정할 내용을 입력하세요"
              />
              <button onClick={() => setEditTodo(null)}>수정 취소</button>
              <button onClick={() => handleEditTodos(todo.id)}>수정 완료</button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              <button onClick={() => setEditTodo(todo)}>수정</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
