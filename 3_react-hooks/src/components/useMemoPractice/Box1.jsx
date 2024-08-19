import React from 'react';

const Box1 = ({ initCount }) => {
  console.log('Box1 렌더링!');

  return (
    <div>
      <button onClick={() => initCount()}>초기화</button>
    </div>
  );
};

export default React.memo(Box1);
