import { useState } from "react";
function Todo({ item, todos, setTodos }) {
  const handleRemoveBtn = (id) => {
    const newTodos = todos.filter(function (todo) {
      return id !== todo.id;
    });
    setTodos(newTodos);
  };
  const handleToggleBtn = (id) => {
    const newTodos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todo-item" key={item.id}>
      <h3>제목: {item.title}</h3>
      <div>내용: {item.content}</div>
      <div>완료여부: {item.isDone.toString()}</div>
      <button onClick={() => handleRemoveBtn(item.id)}>삭제</button>
      <button onClick={() => handleToggleBtn(item.id)}>
        {item.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default Todo;
