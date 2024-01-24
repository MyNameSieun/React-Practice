import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [todos, setTodos] = useState([]);

  const handlerAddBtn = (e) => {
    e.preventDefault();
    const newTodos = {
      id: uuidv4(),
      title: "제목3",
      content: "내용3",
      isDone: false,
    };
    setTodos([...todos, newTodos]);
  };
  const handlerDelateBtn = (id) => {
    const newTodos = todos.filter(function (item) {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <main>
      <form>
        제목 :{" "}
        <input
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
        내용 :{" "}
        <input
          onChange={function (e) {
            setContent(e.target.value);
          }}
        />
        <button type="submit" onClick={handlerAddBtn}>
          추가
        </button>
      </form>
      <h2>할 일 목록 📑</h2>
      <div>
        {todos
          .filter(function (todo) {
            return todo.isDone === false;
          })
          .map(function (todo) {
            return (
              <div className="todo-item" key={todo.id}>
                <div>{todo.title}</div>
                <div>{todo.content}</div>
                <button
                  onClick={function () {
                    const newTodos = todos.map(function (item) {
                      if (todo.id === item.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료
                </button>
                <button onClick={() => handlerDelateBtn(todo.id)}>삭제</button>
              </div>
            );
          })}
      </div>
      <h2>완료🎇</h2>
      <div>
        {todos
          .filter(function (todo) {
            return todo.isDone === true;
          })
          .map(function (todo) {
            return (
              <div className="todo-item" key={todo.id}>
                <div>{todo.title}</div>
                <div>{todo.content}</div>
                <button
                  onClick={function () {
                    const newTodos = todos.map(function (item) {
                      if (todo.id === item.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료취소
                </button>
                <button onClick={() => handlerDelateBtn(todo.id)}>삭제</button>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default App;
