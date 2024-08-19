import React from 'react';

const Box2 = () => {
  console.log('Box2 렌더링!');

  return <div>Box2</div>;
};

export default React.memo(Box2);
