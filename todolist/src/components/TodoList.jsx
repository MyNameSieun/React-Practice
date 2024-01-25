import { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, isDone }) {
  return (
    <div>
      <h2>{isDone ? "완료여부" : "할 일 목록"}</h2>
      {todos
        .filter(function (item) {
          return item.isDone === isDone;
        })
        .map(function (item) {
          return <Todo item={item} todos={todos} setTodos={setTodos} />;
        })}
    </div>
  );
}

export default TodoList;
