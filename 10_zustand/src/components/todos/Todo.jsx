import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <TodoForm />
      <TodoList showCompleted={false} />
    </div>
  );
};

export default Todo;
