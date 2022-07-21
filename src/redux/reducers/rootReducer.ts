import { combineReducers } from "redux";
import TestReducer from "./test"
import IsUserLoggedInReducer from "./isUserLoggedIn";
import ThemeReducer from './isDarkTheme'

const rootReducer = combineReducers({
  test: TestReducer,
  login: IsUserLoggedInReducer,
  theme: ThemeReducer
});
  
export default rootReducer;