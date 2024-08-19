import { useEffect, useState } from 'react';

const FetchPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // title만 바꾸고 나머지 요소는 건들지 않는다.
        title: 'Test'
      })
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => alert(`${error} 발생!`));
  }, []);

  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
};

export default FetchPage;
