import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const hanlde = (e) => {
    setValue(e.target.value);
  };

  return [value, hanlde];
};

export default useInput;
