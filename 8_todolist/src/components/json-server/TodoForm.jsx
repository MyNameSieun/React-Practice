import axios from 'axios';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ setTodos }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const deadlineRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const deadline = deadlineRef.current.value;

    try {
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
      console.error(error, '데이터를 추가하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" ref={titleRef} placeholder="제목을 입력하세요" />
        <input type="text" name="content" ref={contentRef} placeholder="내용을 입력하세요" />
        <input type="date" name="deadline" ref={deadlineRef} />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default TodoForm;
