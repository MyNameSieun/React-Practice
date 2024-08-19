import { useState } from 'react';

const TodoSort = ({ setTodos }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleChangeSortOrder = (e) => {
    const selectOption = e.target.value;
    setSortOrder(selectOption);

    setTodos((prev) =>
      [...prev].sort((a, b) => {
        const dateA = new Date(a.deadline);
        const dateB = new Date(b.deadline);

        if (selectOption === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      })
    );
  };

  return (
    <select value={sortOrder} onChange={handleChangeSortOrder}>
      <option value="asc">오름차순</option>
      <option value="desc">내림차순</option>
    </select>
  );
};

export default TodoSort;
