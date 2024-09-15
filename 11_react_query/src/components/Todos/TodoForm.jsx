// src/components/Todos/TodoForm.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodos } from 'api/todos';
import { useState } from 'react';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const queryClient = useQueryClient(); // queryClient를 사용하여 쿼리 무효화

  const addTodoMutation = useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // 'todos' 쿼리를 무효화하여 목록을 새로고침
      setTitle(''); // 입력 필드 초기화
      setContent(''); // 입력 필드 초기화
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 할 일 추가
    addTodoMutation.mutate({ title, content, isDone: false }); // addTodos 호출
    alert('작성 완료!');
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
