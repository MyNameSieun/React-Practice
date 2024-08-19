// src/App.js

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 4. Action Creatorimport
import { addNumber } from "./redux/modules/counter";

const App = () => {
  // 1. dispatch를 사용하기 위해 선언
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  // 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러를 만들기
  const onClickAddNumberHandler = () => {
    // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣기.
    dispatch(addNumber(number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      {/* 3. 더하기 버튼 이벤트핸들러를 연결 */}
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;
