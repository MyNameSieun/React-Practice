import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  const handlerAddBtn = (e) => {
    e.preventDefault();
    const newTodos = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    console.log(title);
    if (title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (content === "") {
      alert("내용을 입력하세요.");
      return;
    }

    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  return (
    <main>
      <form>
        제목 :{" "}
        <input
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
        내용 :{" "}
        <input
          value={content}
          onChange={function (e) {
            setContent(e.target.value);
          }}
        />
        <button type="submit" onClick={handlerAddBtn}>
          추가
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
    </main>
  );
}

export default App;
