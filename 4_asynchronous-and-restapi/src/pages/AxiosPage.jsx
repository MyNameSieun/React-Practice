import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editInputValue, setEditInputValue] = useState('');

  // get
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('http://localhost:3001/todos');
        setTodos(res.data);
      } catch (error) {
        console.log('에러가 발생하였습니다.', error);
      }
    };
    fetchTodos();
  }, []);

  // post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postTodo = await axios.post('http://localhost:3001/todos', {
        title: inputValue
      });
      setTodos((prev) => [...prev, postTodo.data]);
      setInputValue('');
    } catch (error) {
      console.error('에러가 발생하였습니다.', error);
    }
  };

  // delete
  const handleDeleteButton = async (id) => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/todos/${id}`);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      } catch (error) {
        console.error('에러가 발생하였습니다.', error);
      }
    }
  };

  // patch
  const handleEditChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditButton = async (id) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        title: editInputValue
      });
      setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, title: editInputValue } : todo)));
      setEditTodoId(null);
      setEditInputValue('');
    } catch (error) {
      console.error('에러가 발생하였습니다.', error);
    }
  };

  const handleStartEdit = (id, title) => {
    setEditTodoId(id);
    setEditInputValue(title);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="제목을 입력하세요." />
        <button type="submit">추가</button>
      </form>

      <h1>할 일</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <>
                <input type="text" value={editInputValue} onChange={handleEditChange} />
                <button onClick={() => handleEditButton(todo.id)}>저장</button>
                <button onClick={handleCancelEdit}>취소</button>
              </>
            ) : (
              <>
                <p>{todo.title}</p>
                <button onClick={() => handleStartEdit(todo.id, todo.title)}>수정</button>
                <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
