import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = [
    "apple🍎",
    "banana🍌",
    "cherry🍒",
    "melon🍈",
    "lemon🍋",
    "tangerine🍊",
  ];

  const [array, setArray] = useState(initialArray); // origin array
  const [result, setResult] = useState(""); // Result array
  const [query, setQuery] = useState(""); // input창 state

  /*** article_1 함수 ***/

  // 1. forEach: Array의 각 아이템을 출력
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit}`;
    });
    setResult(tempResult);
  };

  // 2.filter: Array의 요소 중에서 입력한 값과 일치하는 요소들만 출력
  const handleFilter = () => {
    const newArray = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else return false;
    });
    setResult(newArray.join(", "));
  };

  // 3. map: Array의 각 요소를 대문자로 변환하여 출력
  const handleMap = () => {
    const newArray = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(newArray.join(", "));
  };

  // 4. reduce: 각 아이템을 쉼표로 구분하여 출력 (축적되는 형태)
  const handleReduce = () => {
    const reduceList = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reduceList);
  };

  // 5. push: input 태그에 입력한 값을 배열 끝에 추가하여 출력
  const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }
    const newArray = [...array, query];
    // newArray.push(query);
    setArray(newArray);
    setResult(newArray.join(", "));
  };

  // 6. pop: 배열에서 마지막 아이템을 제거하고 결과를 출력
  const handlePop = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
    setResult(newArray.join(", "));
  };

  // 7. slice: 원본 배열의 뒤에서 두 개의 아이템을 제외한 나머지를 출력
  const handleSlice = () => {
    const newArr = array.slice(0, -2);
    setResult(newArr.join(", "));
  };

  /*** article_2 함수 ***/

  // 8. splice: 원본 배열의 2번째 위치부터 2개의 아이템을 제거하고 "pineapple🍍", "grape🍇"을 추가하여 결과를 출력
  const handleSplice = () => {
    const newArray = [...array];
    newArray.splice(2, 2, "pineapple🍍", "grape🍇");
    setResult(newArray.join(", "));
  };

  // 9. indexOf: input에 입력한 값과 일치하는 값이 있는 경우 해당 index를 출력, 없는 경우, -1을 출력
  const handleIndexOf = () => {
    const newArray = array.indexOf(query);
    setResult(newArray);
  };

  // 10. includes: 원본배열이 input에 입력한 값과 일치하는 정확한 과일명을 가지고있는 경우 true 출력, 그 외의 경우 false 출력
  const handleIncludes = () => {
    const newArray = array.includes(query);
    setResult(newArray.toString());
  };

  // 11. find: 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 과일명을 출력, 그 외의 경우 "Not Found"를 출력?????????????????????????????????????????????왜?
  const handleFind = () => {
    const newArray = array.find(function (fruit) {
      return fruit.includes(query);
    });
    if (newArray) {
      setResult(newArray);
    } else {
      setResult("Not Found");
    }
  };

  // 12. some: 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 true을 출력, 그 외의 경우 false 를 출력?????????????????????????????????????????????
  const handleSome = () => {
    const newArray = array.some(function (fruit) {
      return fruit.includes(query);
    });
    setResult(newArray.toString());
  };

  // 13. every: 모든 과일명이 5글자를 초과하는 경우 true를 출력, 그 외의 경우 false를 출력
  const handleEvery = () => {
    const newArray = array.every(function (fruit) {
      return fruit.length > 5;
    });
    setResult(newArray.toString());
  };

  // 14. sort: 알파벳 내림차순 정렬 후 리스트 명을 ", "로 구분하여 출력??????????????????????????????????????????????????????????????? ㅠㅠ
  const handleSort = () => {
    const newArray = [...array];
    newArray.array.sort(function (a, b) {
      return a + b;
    });
    setResult(newArray.join(", "));
  };

  // 15. join: 배열의 모든 요소를 쉼표(", ")로 구분하고 결합된 문자열을 출력
  const handleJoin = () => {
    const newArray = array.join(", ");
    setResult(newArray);
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
          <button onClick={handleSplice}>splice</button>
          <button onClick={handleIndexOf}>indexOf</button>
          <button onClick={handleIncludes}>includes</button>
          <button onClick={handleFind}>find</button>
          <button onClick={handleSome}>some</button>
          <button onClick={handleEvery}>every</button>
          <button onClick={handleSort}>sort</button>
          <button onClick={handleJoin}>join</button>
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
