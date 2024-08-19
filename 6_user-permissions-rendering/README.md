[정리 블로그 링크↗️](https://mynamesieun.github.io/react/%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%97%90-%EB%94%B0%EB%A5%B8-%EB%A0%8C%EB%8D%94%EB%A7%81/)

# 인증 API 명세서

## 회원가입

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

## 로그인

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

## 회원정보 확인

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
