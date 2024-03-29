# React-Practice ⚛️

## 1. arrayAPI

🔗 [arrayAPI 공부 내용 정리 블로그 링크](https://mynamesieun.github.io/javascript/%EB%B0%B0%EC%97%B4%EA%B3%BC-%EB%A9%94%EC%84%9C%EB%93%9C/)

![arrayAPI](arrayAPI/public/arrayAPI.png)

<br>

### ✅ 구현 내용

1. `forEach`: Array의 각 아이템을 출력
2. `filter`: Array의 요소 중에서 입력한 값과 일치하는 요소들만 출력
3. `map`: Array의 각 요소를 대문자로 변환하여 출력
4. `reduce`: 각 아이템을 쉼표로 구분하여 출력
5. `push`: input 태그에 입력한 값을 배열 끝에 추가하여 출력
6. `pop`: 배열에서 마지막 아이템을 제거하고 결과를 출력
7. `slice`: 원본 배열의 뒤에서 두 개의 아이템을 제외한 나머지를 출력
8. `splice`: 원본 배열의 2번째 위치부터 2개의 아이템을 제거하고 "pineapple🍍", "grape🍇"을 추가하여 결과를 출력
9. `indexOf`: input에 입력한 값과 일치하는 값이 있는 경우 해당 index를 출력, 없는 경우, -1을 출력
10. `includes`: 원본배열이 input에 입력한 값과 일치하는 정확한 과일명을 가지고있는 경우 true 출력, 그 외의 경우 false 출력
11. `find`: 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 과일명을 출력, 그 외의 경우 "Not Found"를 출력
12. `some`: 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 true을 출력, 그 외의 경우 false 를 출력
13. `every`: 모든 과일명이 5글자를 초과하는 경우 true를 출력, 그 외의 경우 false를 출력
14. `sort`: 알파벳 내림차순 정렬 후 리스트 명을 ", "로 구분하여 출력
15. `join`: 배열의 모든 요소를 쉼표(", ")로 구분하고 결합된 문자열을 출력

<br>

### 🌟 발생한 문제와 알게된 내용

1. `slice()` 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.

   - 즉, 새 배열을 반환하는 메서드 또는 결과 값을 반환하는 메서드의 경우 `const newArr = [...array];`와 같이 원래 배열을 복사하여 새로운 배열을 만들 필요가 없는 것이다!
   - 이처럼 새로운 배열을 반환하는 메서드는 map, filter, slice, concat 등이 있다.
   - 원본 배열을 수정하는 메서드(push, pop, shift, splice 등)의 경우 원래 배열을 복사해야한다.
   - 또한 state가 array, object인 경우도 원래 배열을 복사해야한다.

   🔽 수정 전 코드

   ```jsx
   const hanlderSlice = () => {
     const newArr = [...array];
     newArr.slice(0, -2);
     setResult(sliced.join(", "));
   };
   ```

   🔽 수정 후 코드

   ```jsx
   const hanlderSlice = () => {
     const newArr = array.slice(0, -2);
     setResult(newArr.join(", "));
   };
   ```

<br>

2. 참조하는 원본 배열 array의 내용도 업데이트되어야한다.

   - newArray는 기존 array를 복사하여 새로운 배열을 만들고, 그 위에 query를 추가한다.
   - 따라서 newArray는 항상 현재 array의 상태를 반영한 새로운 배열이 된다.
   - 즉, 새로운 참조로 상태를 업데이트함으로써 불변성을 지키기 위해 `setArray(newArray)`를 사용하는 것이다.
   - 원본 배열을 수정하는 메서드는 불변성을 지켜야 함에 유의하자!<br><br>

   ```jsx
   const handlePush = () => {
     const newArray = [...array, query];
     setArray(newArray); // 참조하는 원본 array의 값 반영
     setResult(newArray.join(", "));
   };
   ```

<br>

3. 공백 조건을 줘야한다.

   - 공백 조건을 주지 않으면 입력 값이 없음에도 불구하고 무조건 첫 번째 배열의 요소가 출력되는 오류가 있었다.
   - find 및 some 메서드는 입력한 값을 기반으로 배열에서 원하는 값을 찾거나 조건을 확인하는데 공백 조건을 주지 않은 경우, 입력값이 없는 상태에서 함수를 호출하면 query 변수에는 빈 문자열("")이 할당되게 된다.
   - find 및 some 메서드는 입력값이 빈 문자열인 경우, 빈 문자열을 포함한 모든 요소를 찾는 조건을 만족하게 되므로 공백 조건을 줘야한다.<br><br>

   ```js
   const handleSome = () => {
     // query 공백 조건 추가
     if (!query) {
       alert("값이 없습니다!");
       return false;
     }
     const newArray = array.some(function (fruit) {
       return fruit.includes(query);
     });
     setResult(newArray.toString());
   };
   ```

<br>

4.  문자열을 비교할 때는 `localeCompare()` 메서드를 사용해서 비교해야한다.

    - 문자열을 비교할 때는 각 문자의 유니코드 값을 비교하여 정렬하는 방식을 사용하기 때문이다.
    - localeCompare 메소드는 유니코드 값을 기반으로 문자열을 비교하여 정렬할 수 있도록 도와준다.
    - 🔗 [sort 공부 내용 정리 블로그 링크](<https://mynamesieun.github.io/javascript/sort()%EB%A1%9C-%EB%B0%B0%EC%97%B4-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0/>)<br><br>

    | 정렬 방법 |               숫자               |                    문자열                     |
    | :-------: | :------------------------------: | :-------------------------------------------: |
    | 오름차순  | `numbers.sort((a, b) => a - b);` | `strings.sort((a, b) => a.localeCompare(b));` |
    | 내림차순  | `numbers.sort((a, b) => b - a);` | `strings.sort((a, b) => b.localeCompare(a));` |

    ```js
    const handleSort = () => {
      const newArray = [...array];
      console.log(newArray);
      newArray.sort(function (a, b) {
        //return b - a; 숫자 비교시
        return b.localeCompare(a); // 문자열 비교시
      });
      console.log(newArray);
      setResult(newArray.join(", "));
    };
    ```

<br>

---

<br>

## 2. Todolist

https://github.com/MyNameSieun/Todo-List 에서 만들었던 Todoist를 아무것도 참조하지 않고 다시 스스로 만들어보기 위한 목적으로 디자인을 생략하였습니다.

![Todolist](todolist/public/todolist.png)

![](2024-01-24-19-36-20.png)

### ✅ 구현 내용

> state 구조

```jsx
const [todos, setTodos] = useState([{
  id: ~,
  title: ~,
  contents: ~,
  isDone: false,
}]);
```

> 컴포넌트 구조

- App.jsx
  - InputArea.jsx
  - TodoList.jsx
    - Todo.jsx
  - Footer.jsx

> 기능

1. 할 일 추가
   - 폼을 통해 제목과 내용을 입력하여 새로운 할 일을 추가할 수 있습니다.
   - 제목이나 내용이 빈 경우, 알림 창을 통해 사용자에게 메시지가 표시됩니다.<br>
2. 할 일 목록 표시
   - 미완료된 할 일 목록과 완료된 할 일 목록이 각각 나누어져 표시됩니다.
   - 할 일 목록은 TodoList 컴포넌트를 사용하여 표시되며, 각 할 일은 제목, 내용, 완료 버튼, 삭제 버튼으로 구성됩니다.
3. 할 일 완료 및 미완료 토글
   - 할 일 항목의 완료 버튼을 클릭하여 해당 할 일을 완료 또는 미완료로 토글할 수 있습니다.
4. 할 일 삭제
   - 할 일 항목의 삭제 버튼을 클릭하여 해당 할 일을 목록에서 삭제할 수 있습니다.

<br>

### 🌟 발생한 문제와 알게된 내용

- "완료" 버튼 클릭 시 해당 할 일의 isDone 속성을 토글하는 기능 설계에서 어려움을 겪었습니다. 토글 기능을 구현하면서 아래와 같은 내용을 알게 되었습니다.

  1. React에서 상태를 변경하기 위해서는 반드시 setState 함수를 사용해야 한다는 것을 알게 되었습니다.
  2. map 메서드를 사용하여 배열을 불변하게 유지하면서 특정 요소를 수정하는 방법에 대해 알게 되었습니다
  3. 객체의 속성을 수정할 때 전개 연산자를 사용하는 방법에 대해 알게 되었습니다.

   <br>

  먼저 아래와 같이 App.jsx에서 TodoList 컴포넌트에 isDone prop을 전달하여 완료 여부에 따라 다른 할 일 목록을 보여주도록 하였습니다.

  ```js
  {/* App.jsx */}
  <TodoList todos={todos} setTodos={setTodos} isDone={false} />{" "}
  <TodoList todos={todos} setTodos={setTodos} isDone={true} />
  ```

  ```js
  {/* TodoList.jsx */}
  function TodoList({ todos, setTodos, isDone })
  ```

    <br>

  그 후, TodoList.jsx에서는 filteredTodos를 통해 isDone 값에 따라 할 일을 필터링하여 보여주고, 버튼 클릭 시에는 해당 할 일의 isDone 속성을 토글하도록 하였습니다.

  🔽 방법1

  1.  todos라는 배열을 map 메서드를 사용하여 새로운 배열 newTodos를 생성합니다. (불변성 유지)
  2.  map 메서드는 todos 배열의 각 요소에 대해 주어진 함수를 실행하고, 반환된 값을 가지고 새로운 배열을 생성합니다.
  3.  그 후, 전개 연산자를 사용하여 id와 todo.id가 일치한다면 기존 todo 객체의 속성을 복사한 후 isDone 값을 반전시킵니다. (isDone 속성은 변경되지만 나머지 속성들은 변경되지 않습니다.)
  4.  setTodos를 사용하여 새로운 todos 배열로 상태를 업데이트합니다.<br><br>

  ```js
  const handleToggleBtn = (id) => {
    // 눌러서 상태를 바꾼다. 누른게 뭔지 알아야함 id사용
    const newTodos = todos.map(function (todo) {
      if (id === todo.id) {
        return {
          ...todo,
          isDone: !todo.isDone, // 전개연산자 덮어쓰기
        };
      } else return todo; // 클릭한 아이디가 아니라면 isDone:false
    });
    setTodos(newTodos);
  };
  ```

  🔽 방법2

  - 방법1과 유사하지만, 구조 분해 할당을 사용하지 않고 직접 todo.isDone에 값을 할당하는 방식을 사용하였습니다.<br><br>

  ```js
  const handleToggleBtn = (id) => {
    // map은 새 배열을 리턴하기 때문에 구조분해할당 쓰지 않아도 된다.
    // map은 원래 배열을 맵핑하기때문에 기본 배열의 길이가 보장!
    const newTodos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newTodos);
  };
  ```
