// src/components/Todos/TodosList.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodos, editTodos, toggleTodos } from 'api/todos';
import { useState } from 'react';

const TodoList = ({ todos, isDone }) => {
  const [editTodo, setEditTodo] = useState(null);
  const queryClient = useQueryClient(); // 캐시 업데이트를 위한 queryClient 사용

  // 삭제
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']); // 'todos' 쿼리를 무효화하여 목록을 새로고침
      alert('삭제 완료!');
    }
  });

  // 수정
  const editTodoMutation = useMutation({
    mutationFn: ({ id, updatedTodo }) => editTodos(id, updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']); // 'todos' 쿼리 무효화
      setEditTodo(null); // 수정 완료 후 수정 상태 초기화
      alert('수정 완료!');
    }
  });

  // 토글 기능 (완료/미완료 상태 변경)
  const toggleTodoMutation = useMutation({
    mutationFn: ({ id, isDone }) => toggleTodos(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']); // 'todos' 쿼리를 무효화하여 데이터를 새로고침
    }
  });

  // isDone 상태에 따라 필터링
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <ul>
      {filteredTodos.map((todo) => (
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
              <button
                onClick={() =>
                  editTodoMutation.mutate({
                    id: todo.id,
                    updatedTodo: editTodo
                  })
                }
              >
                수정 완료
              </button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <button onClick={() => deleteTodoMutation.mutate(todo.id)}>삭제</button>
              <button onClick={() => setEditTodo(todo)}>수정</button>
              <button
                onClick={() =>
                  toggleTodoMutation.mutate({
                    id: todo.id,
                    isDone: todo.isDone // 현재 isDone 상태를 전달
                  })
                }
              >
                {isDone ? '할 일 취소' : '할 일 완료'}
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
