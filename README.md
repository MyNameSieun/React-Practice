<div id="top"></div>

<div align='center'>

<h1><b>REACT PRACTICE ⚛️</b></h1>
<h3><b>리액트 공부 실습 코드</b></h3>

</div>

<br>

## 0. 목차

1. [arrayAPI](#1)
2. [React-Router-Dom](#2)
3. [React-Hooks](#3)
4. [axios](#4)
5. [redux](#5)
6. [TodoList](#8)
7. [유저 권한(인증/인가)](#6)
8. [](#9)

<br />

## <span id="1">1. arrayAPI</span>

🔗 [arrayAPI 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/Array-API-%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/)

![arrayAPI](/[1]%20array-api/public/arrayAPI.png)

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

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="2">2. React-Router-Dom</span>

🔗 [React-Router-Dom 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Router-Dom/)

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="3">3. React-Hooks</span>

🔗 [useState 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Hooks-useState/)<br>
🔗 [useEffect 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Hooks-useEffect/)<br>
🔗 [useRef 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Hooks-useRef/)<br>
🔗 [useContext 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Hooks-useContext/)<br>
🔗 [최적화(React.memo, useCallback, useMemo) 공부 내용 정리 블로그 링크↗️](<https://mynamesieun.github.io/react/React-Hooks-%EC%B5%9C%EC%A0%81%ED%99%94(React.memo,-useCallback,-useMemo)/>)<br>
🔗 [useReducer 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/React-Hooks-useReducer/)<br>
🔗 [Custom Hooks 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/Custom-Hooks/)<br>

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="4">4. 비동기와 REST API</span>

🔗 [비동기와 REST API 공부 내용 정리 블로그 링크↗️]()

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="5">5. redux</span>

🔗 [redux 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/Redux/)

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="6">6. TodoList</span>

## <span id="7">7. 유저 권한(인증/인가)</span>

🔗 [인증/인가 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/%EC%9D%B8%EC%A6%9D-%EB%B0%8F-%EC%9D%B8%EA%B0%80/)

🔗 [사용자 권한에 따른 렌더링 공부 내용 정리 블로그 링크↗️](https://mynamesieun.github.io/react/%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%A0%8C%EB%8D%94%EB%A7%81/)

[정리 블로그 링크↗️](https://mynamesieun.github.io/react/%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%A0%8C%EB%8D%94%EB%A7%81/)

```shell
yarn serve
```

### 인증 API 명세서

**회원가입**

> 설명

아이디, 비밀번호, 닉네임으로 DB에 본인의 회원정보를 저장

> Request

- Method → `POST`
- URL PATH → `/register`
- Body ⬇️

  ```json
  JSON
  {
      "id": "유저 아이디",
      "password": "유저 비밀번호",
      "nickname": "유저 닉네임"
  }
  ```

> Response

```json
{
  "message": "회원가입 완료",
  "success": true
}
```

<br>

**로그인**

> 설명

아이디와 비밀번호가 DB에 있는 회원정보와 일치하면 accessToken, userId, avatar, nickname 총 4가지 유저정보를 응답

> Request

- Method → `POST`
- URL PATH → `/login`
- Body ⬇️

  ```json
  JSON
  {
    "id":"유저 아이디",
    "password": "유저 비밀번호"
  }
  ```

<br>

> Query string  (선택)

- accessToken 유효시간 조정을 위한 query string
  - query string 없이 path로만 요청 시 기본 1시간
  - query string (expiresIn) 으로 시간 기입 시 해당 시간대로 토큰 유효시간 조정가능
  - expiresIn : 시간 단위를 붙인 문자열 ex) 10s 10m 10h
  - TIP) 토큰만료 시 로그아웃 처리되는 로직을 테스트할 때 사용 하기

```jsx
/login?expiresIn=10m

// 유효시간을 10분인 accessToken 요청
```

> Response

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2FiYyIsImlhdCI6MTcwMDgxNDQyMCwiZXhwIjoxNzAwODE4MDIwfQ.8hWOHHEzDPzumnqCU7jyoi3zFhr-HNZvC7_pzBfOeuU",
  "userId": "유저 아이디",
  "success": true,
  "avatar": "프로필 이미지",
  "nickname": "유저 닉네임"
}
```

<br>

**회원정보 확인**

> 설명

accessToken이 유효한 경우, 비밀번호를 제외한 본인의 회원정보를 응답

```jsx
// authorization 속성 정의
const response = await axios.get(`${BASE_URL}/user`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
```

> Request

- Method → `GET`
- URL PATH → `/user`
- Header ⬇️

  ```jsx
  {
  	"Authorization": "Bearer AccessToken"
  }
  ```

> Response

```json
{
  "id": "사용자 아이디",
  "nickname": "사용자 닉네임",
  "avatar": null,
  "success": true
}
```

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="8">8. </span>

🔗 [ 공부 내용 정리 블로그 링크↗️]()

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />

## <span id="9">9. </span>

🔗 [ 공부 내용 정리 블로그 링크↗️]()

<br />

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br />
