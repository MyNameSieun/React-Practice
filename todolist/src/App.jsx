import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddBtn = (e) => {
    e.preventDefault();
    const newTodos = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (content === "") {
      alert("내용을 입력해주세요");
      return;
    }
    setTodos([...todos, newTodos]);
    setContent("");
    setTitle("");
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleTextInput = (e) => {
    setContent(e.target.value);
  };
  return (
    <main>
      <form>
        제목:
        <input type="text" value={title} onChange={handleTitleInput} />
        내용: <input type="text" value={content} onChange={handleTextInput} />
        <button onClick={handleAddBtn}>추가</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />{" "}
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </main>
  );
}

export default App;
