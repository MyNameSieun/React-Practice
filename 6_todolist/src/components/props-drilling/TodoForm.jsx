import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ setTodos }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const deadlineRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const deadline = deadlineRef.current.value;

    if (!title || !content) {
      alert('제목이나 내용을 입력해주세요.');
      return;
    }
    if (!deadline) {
      alert('마감일을 입력해주세요.');
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
      deadline
    };

    setTodos((prev) => [...prev, newTodo]);

    titleRef.current.value = '';
    contentRef.current.value = '';
    deadlineRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" ref={titleRef} placeholder="제목을 입력하세요." />
        <input type="text" name="content" ref={contentRef} placeholder="내용을 입력하세요." />
        <input type="date" name="deadline" ref={deadlineRef} />
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default TodoForm;
