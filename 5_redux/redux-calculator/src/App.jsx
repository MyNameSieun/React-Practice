import { useDispatch, useSelector } from "react-redux";
import { plusNumber, minusNumber } from "./redux/modules/calculator";
import { useState } from "react";

function App() {
  const result = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="값을 입력하세요."
        />
        만큼을
        <button onClick={() => dispatch(plusNumber(inputValue))}>
          더할게요
        </button>
        <button onClick={() => dispatch(minusNumber(inputValue))}>
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result.number}</p>
      </div>
    </div>
  );
}

export default App;
