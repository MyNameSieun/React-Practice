// src/components/Todos/TodoForm.jsx
import { useState } from 'react';

const TodoForm = ({ addTodoMutation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ title, content, isDone: false });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목: </label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
