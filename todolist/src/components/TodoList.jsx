import React from "react";

function TodoList({ todos, setTodos, listIsDone }) {
  const handlerDelateBtn = (id) => {
    const newTodos = todos.filter(function (item) {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      {" "}
      <h2>{listIsDone ? "완료 목록🤩" : "할 일 목록😭"}</h2>
      <div>
        {todos
          .filter(function (todo) {
            return todo.isDone === listIsDone;
          })
          .map(function (todo) {
            return (
              <div className="todo-item" key={todo.id}>
                <h2>제목: {todo.title}</h2>
                <div>내용: {todo.content}</div>
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
    </div>
  );
}

export default TodoList;
