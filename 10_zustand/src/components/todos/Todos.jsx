// src/components/todos/Todos.jsx
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <div>
      <TodoForm />
      <h1>완료됨</h1>
      <TodoList showCompleted={true} />
      <h1>미완료</h1>
      <TodoList showCompleted={false} />
    </div>
  );
};

export default Todos;
