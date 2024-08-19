import { createStore } from "redux";
import { combineReducers } from "redux";
import calculator from "../modules/calculator";

const rootReducer = combineReducers({ calculator });
const store = createStore(rootReducer);

export default store;
