// src/components/Todos/TodoForm.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodos, fetchTodos } from 'api/todos';
import { useState } from 'react';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const queryClient = useQueryClient(); // queryClient를 사용하여 쿼리 무효화

  // 추가
  const addTodoMutation = useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // 'todos' 쿼리를 무효화하여 목록을 새로고침
      setTitle('');
      setContent('');
      alert('추가 완료!');
    },
    onError: (error) => {
      console.error('추가 실패:', error);
      alert('추가 실패. 다시 시도해 주세요.');
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!title.trim()) {
      return alert('제목을 입력해 주세요.');
    }
    if (!content.trim()) {
      return alert('내용을 입력해 주세요.');
    }

    addTodoMutation.mutate({ title, content, isDone: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목: </label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
