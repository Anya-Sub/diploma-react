import { combineReducers } from "redux";
import TestReducer from "./test"
import IsUserLoggedInReducer from "./isUserLoggedIn";

const rootReducer = combineReducers({
  test: TestReducer,
  login: IsUserLoggedInReducer
});
  
export default rootReducer;