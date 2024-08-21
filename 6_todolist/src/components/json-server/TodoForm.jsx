import axios from 'axios';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ setTodos }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const deadlineRef = useRef(null);

  const addTodos = async (e) => {
    e.preventDefault();

    try {
      const title = titleRef.current.value;
      const content = contentRef.current.value;
      const deadline = deadlineRef.current.value;

      if (!title || !content || !deadline) {
        return alert('값을 입력하세요.');
      }

      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, {
        id: uuid(),
        title,
        content,
        deadline,
        isDone: false
      });
      setTodos((prev) => [...prev, res.data]);

      titleRef.current.value = '';
      contentRef.current.value = '';
      deadlineRef.current.value = '';
    } catch (error) {
      console.error(error, '데이터를 추가하는 중 문제가 발생했습니다.');
    }
  };

  return (
    <>
      <form onSubmit={addTodos}>
        <input type="text" ref={titleRef} name="title" placeholder="제목을 입력하세요." />
        <input type="text" ref={contentRef} name="content" placeholder="내용을 입력하세요." />
        <input type="date" ref={deadlineRef} name="deadline" />
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default TodoForm;
