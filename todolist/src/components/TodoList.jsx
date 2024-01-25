import React from "react";

function TodoList({ todos, setTodos, isDone }) {
  const handleRemoveBtn = (id) => {
    const newTodo = todos.filter(function (todo) {
      return id !== todo.id;
    });
    setTodos(newTodo);
  };

  const handleToggleBtn = (id) => {
    const newTodos = todos.map(function (todo) {
      if (id === todo.id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>{isDone ? "할 일 목록" : "완료 목록"}</h2>
      {todos
        .filter(function (todo) {
          return todo.isDone === isDone;
        })
        .map(function (todo) {
          return (
            <div key={todo.id}>
              <div>제목: {todo.title}</div>
              <div>내용: {todo.content}</div>
              <div>{todo.isDone.toString()}</div>
              <button onClick={() => handleToggleBtn(todo.id)}>
                {" "}
                {isDone ? "취소하기" : "완료"}
              </button>
              <button onClick={() => handleRemoveBtn(todo.id)}>삭제</button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
