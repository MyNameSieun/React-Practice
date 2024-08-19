// 액션 객체 type value 상수로 지정
const PLUS_NUMBER = "PLUS_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBERs";

// action creator 생성
export const plusNumber = (value) => {
  return {
    type: PLUS_NUMBER,
    payload: value,
  };
};
export const minusNumber = (value) => {
  return {
    type: MINUS_NUMBER,
    payload: value,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  // action.payload 만큼 더하기
  const value = action.payload;

  switch (action.type) {
    case PLUS_NUMBER:
      return {
        ...state,
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + value,
      };
    case MINUS_NUMBER:
      return {
        ...state,
        number: state.number - value,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
