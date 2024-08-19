import { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleIdChange = () => {
    if (idRef.current.value.length >= 10) {
      pwRef.current.focus();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    alert(`${idRef.current.value}님 환영합니다!`);
  };
  return (
    <form onSubmit={handleLogin}>
      <input type="text" ref={idRef} onChange={handleIdChange} placeholder="아이디를 입력하세요" />
      <input type="password" ref={pwRef} placeholder="비밀번호를 입력하세요" />
      <button type="submit">로그인</button>
    </form>
  );
};

export default UseRef;
