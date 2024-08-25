# 1. React 파일 및 프로젝트 셋업 가이드

프로젝트 파일 및 설정은 [[여기↗]](https://mynamesieun.github.io/react/React-%ED%8C%8C%EC%9D%BC-%EB%B0%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%85%8B%EC%97%85/)에서 확인할 수 있다.

<br>

# 2. 기존 Git 저장소 제거 및 새 주소 연결 🗑️🔄

클론받은 프로젝트에서 기존 .git/ 폴더 삭제 후 다시 git 셋업하기 위해 아래 명령어로 Git 재설정

```shell
# 기존 .git/ 삭제 (기존의 모든 커밋히스토리가 제거된다.)
rm -rf .git/

# 깃 시작
git init

# 신규 레포주소를 origin으로 등록
git remote add origin [레포 주소]
```

<br>

# 3. 실행 가이드 🛠️

```shell
$ git clone https://github.com/MyNameSieun/react-project-setting.git
$ cd react-project-setting
$ yarn
$ yarn start
```

<br>

# 4. 설치한 라이브러리 📚

```markdown
- React: ^18.3.1
- styled-components: ^6.1.12
- react-router-dom: ^6.26.0
```

<br>
