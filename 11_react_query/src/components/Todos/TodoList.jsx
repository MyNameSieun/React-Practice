// src/components/Todos/TodosList.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodos, editTodos, toggleTodos } from 'api/todos';
import { QUERY_KEYS } from 'components/hooks/query/keys';
import { useState } from 'react';

const TodoList = ({ todos, isDone }) => {
  const [editTodo, setEditTodo] = useState(null);

  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);
  const queryClient = useQueryClient();

  // 삭제
  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      alert('삭제 완료!');
    },
    onError: (error) => {
      console.error('삭제 실패:', error);
      alert('삭제 실패. 다시 시도해 주세요.');
    }
  });

  const handleDeleteButton = (id) => {
    const isConfirmed = window.confirm('정말로 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteMutation.mutate(id);
    }
  };

  // 수정
  const editTodoMutation = useMutation({
    // mutate 메서드 호출 시 전달
    mutationFn: ({ id, updatedTodo }) => editTodos(id, updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setEditTodo(null);
      alert('수정 완료!');
    },
    onError: (error) => {
      console.error('수정 실패:', error);
      alert('수정 실패. 다시 시도해 주세요.');
    }
  });

  const handleEditTodos = () => {
    editTodoMutation.mutate({
      id: editTodo.id,
      updatedTodo: { title: editTodo.title, content: editTodo.content }
    });
  };

  // 토글
  const toggleMutation = useMutation({
    mutationFn: ({ id, isDone }) => toggleTodos(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error) => {
      console.error('할 일 상태 변경 실패:', error);
      alert('상태 변경 실패. 다시 시도해 주세요.');
    }
  });

  const handleToggleTodos = (id, currentIsDone) => {
    toggleMutation.mutate({ id, isDone: currentIsDone });
  };

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
              <button onClick={handleEditTodos}>수정 완료</button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              <button onClick={() => setEditTodo(todo)}>수정</button>
              <button onClick={() => handleToggleTodos(todo.id, todo.isDone)}>
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
