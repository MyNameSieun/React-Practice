import { useState } from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

const Memo = () => {
  console.log('Memo 컴포넌트가 렌더링 되었습니다.');

  const [count, setCount] = useState(0);

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount((prev) => prev - 1);
  };

  // counter를 초기화해주는 함수
  const initCount = () => {
    setCount(0);
  };

  return (
    <>
      <p>현재 카운트: {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <Box1 initCount={initCount} />
    </>
  );
};

export default Memo;
