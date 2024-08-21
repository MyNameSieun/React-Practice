import { useState } from 'react';

const TodoSort = ({ setTodos }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;

    setSortOrder(nextSortOrder);

    if (nextSortOrder === 'asc') {
      // 오름차순 정렬
      setTodos((prev) => [...prev].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)));
      return;
    }
    //내림차순 정렬
    setTodos((prev) => [...prev].sort((a, b) => new Date(b.deadline) - new Date(a.deadline)));
  };

  return (
    <div>
      <select value={sortOrder} onChange={onChangeSortOrder}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
    </div>
  );
};
export default TodoSort;
