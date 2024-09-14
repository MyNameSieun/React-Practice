import { addTodos, fetchTodos } from 'api/todos';
import { useState } from 'react';

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTodo = { title, content, isDone: false };
      await addTodos(newTodo);
      alert('추가 완료!');
      setTitle('');
      setContent('');
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
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
