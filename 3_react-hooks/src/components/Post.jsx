import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  const data = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return <div key={data.id}>{data.title}</div>;
};

export default Post;
