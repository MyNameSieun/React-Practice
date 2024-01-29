// src/redux/modules/counter.js

// action value
export const PLUS_ONE = "counter/PLUS_ONE"; // value는 상수로 생성
export const MINUS_ONE = "counter/MINUS_ONE";

// action creator: action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
export const counter = (state = initialState, action) => {
  // plusOne()는 밖으로 나가서 사용될 예정이기 때문에 export 해주기
  switch (action.type) {
    case PLUS_ONE: // type에는 위에서 만든 상수로 사용
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
