import { useState } from 'react';

const TodoSort = ({ setTodos }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const onChangeSortOrder = (e) => {
    const newSortOrder = e.target.value; // 사용자가 선택한 값
    setSortOrder(newSortOrder); // 상태를 업데이트

    setTodos((prev) =>
      [...prev].sort((a, b) => {
        const dataA = new Date(a.deadline);
        const dateB = new Date(b.deadline);

        // 오름차순 정렬
        if (newSortOrder === 'asc') {
          return dataA - dateB;
        }
        //내림차순 정렬
        else {
          return dateB - dataA;
        }
      })
    );
  };

  return (
    <select value={sortOrder} onChange={onChangeSortOrder}>
      <option value="asc">오름차순</option>
      <option value="desc">내림차순</option>
    </select>
  );
};

export default TodoSort;
