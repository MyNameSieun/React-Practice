import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter"; // (1) counter reducer import

const rootReducer = combineReducers({
  // (2) reduce 넣어 사용하기
  counter,
});
const store = createStore(rootReducer);

export default store;
