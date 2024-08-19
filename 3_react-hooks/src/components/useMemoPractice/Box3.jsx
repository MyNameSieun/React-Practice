import React from 'react';

const Box3 = () => {
  console.log('Box3 렌더링!');
  return <div>Box3</div>;
};

export default React.memo(Box3);
