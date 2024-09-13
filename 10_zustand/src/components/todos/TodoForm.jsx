import { useState } from 'react';
import { useTodosStore } from 'store/useTodosStore';

const TodoForm = () => {
  const { addTodos } = useTodosStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 모두 입력하세요.');
      return;
    }

    await addTodos({ title, content, isDone: false });
    alert('추가 완료');

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목: </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요."
          required
        />
      </div>
      <div>
        <label htmlFor="content">내용: </label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요."
          required
        />
      </div>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
