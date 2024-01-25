import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import InputArea from "./components/InputArea";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <InputArea todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      <Footer />
    </div>
  );
}

export default App;
