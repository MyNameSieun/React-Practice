import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = [
    "사과🍎",
    "바나나🍌",
    "체리🍒",
    "멜론🍈",
    "레몬🍋",
    "귤🍊",
  ];

  const [array, setArray] = useState(initialArray); // origin array
  const [result, setResult] = useState(""); // Result array
  const [query, setQuery] = useState(""); // input창 state

  /** article_1 함수 */
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit}, `; // tempResult에 frult을 붙힘
    });
    setResult(tempResult);
    setResult(tempResult.slice(0, -2)); // 뒤에 두 문자 제거
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    // array를 대문자로 변환하여 출력
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedListText);
  };

  const handlePush = () => {
    // input 태그에 입력한 값이 끝에 달라붙도록
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr); // 참조하는 원본 array의 값도 반영해줘야함
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    // 원본배열의 뒤 2개 아이템을 제거하여 출력
    const newArr = array.slice(0, -2);
    setResult(newArr);
    setResult(newArr.join(", "));
  };

  /** article_2 함수 */
  const handleSplice = () => {
    // 원본 배열의 2번째 위치부터 2개의 아이템을 제거하고 "파인애플🍍", "포도🍇"을 추가하여 결과를 출력
    const newArr = [...array];
    newArr.splice(2, 2, "파인애플🍍", "포도🍇");
    setResult(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = () => {
    // 1. input에 입력한 값과 일치하는 값이 있는 경우 `해당 index`를 출력
    // 2. 없는 경우, `-1`을 출력
    const index = array.indexOf(query);
    setResult(index !== -1 ? index : -1);
  };

  const handleIncludes = () => {
    // 원본배열이 input에 입력한 값과 일치하는 정확한 과일명을 가지고있는 경우 true 출력, 그 외의 경우 false 출력
    const includes = array.includes(query);
    setResult(includes);
  };

  const handleFind = () => {
    // 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 과일명을 출력, 그 외의 경우 “Not Found”를 출력
    const foundItem = array.find((fruit) => fruit.includes(query));
    setResult(foundItem || "Not Found");
  };

  const handleSome = () => {
    // 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 true을 출력, 그 외의 경우 false 를 출력
    const hasItem = array.some((fruit) => fruit.includes(query));
    setResult(hasItem);
  };

  const handleEvery = () => {
    // 모든 과일명이 5글자를 초과하는 경우 true를 출력, 그 외의 경우 false를 출력
    const allOverFive = array.every((fruit) => fruit.length > 5);
    setResult(allOverFive);
  };

  const handleSort = () => {
    // 알파벳 내림차순 정렬 후 리스트 명을 “, “로 구분하여 출력
    const sortedArray = [...array].sort((a, b) => b.localeCompare(a));
    setArray(sortedArray);
    setResult(sortedArray.join(", "));
  };

  const handleJoin = () => {
    const joinedString = array.join();
    // join() 메서드만 사용할 경우 배열의 원소들의 쉼표로 구분
    // 원소들의 구분을 다른 문자로 하려면 () 안에 원하는 문자를 넣으면 됨 ex array.join("-")
    setResult(joinedString);
  };

  return (
    <div className="main-layout">
      <div className="top">
        <h1>Array API Practice</h1>
        <div>
          <input
            type="text"
            placeholder="Enter text"
            value={query}
            onChange={function (e) {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>

      <section>
        <article>
          <button onClick={handleForEach}>forEach</button>
          <button onClick={handleFilter}>filter</button>
          <button onClick={handleMap}>map</button>
          <button onClick={handleReduce}>reduce</button>
          <button onClick={handlePush}>push</button>
          <button onClick={handlePop}>pop</button>
          <button onClick={handleSlice}>slice</button>
        </article>
        <article>
          <button onClick={handleSplice}>Splice</button>
          <button onClick={handleIndexOf}>IndexOf</button>
          <button onClick={handleIncludes}>Includes</button>
          <button onClick={handleFind}>Find</button>
          <button onClick={handleSome}>Some</button>
          <button onClick={handleEvery}>Every</button>
          <button onClick={handleSort}>Sort</button>
          <button onClick={handleJoin}>Join</button>
        </article>
      </section>
      <div className="input-layout">
        <div class="division-line"></div>
        <div className="origin">
          <p>원본 배열</p>
          {array.join(", ")}
        </div>
        <div className="result">
          {" "}
          <p>Result</p>
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
