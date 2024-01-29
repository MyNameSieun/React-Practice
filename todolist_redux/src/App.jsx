// App.jsx
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { PLUS_ONE, minusOne } from "./redux/modules/counter";
import { MINUS_ONE } from "./redux/modules/counter";
import { plusOne } from "./redux/modules/counter";

function App() {
  const date = useSelector((state) => state.counter);

  // dispatch를 가져와보자
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트: {date.number}</div>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>{" "}
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
