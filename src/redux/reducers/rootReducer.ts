import { combineReducers } from "redux";
import TestReducer from "./test"
import IsUserLoggedInReducer from "./isUserLoggedIn";
import ThemeReducer from './isDarkTheme'
import PostsDataReducer from "./postsData";

const rootReducer = combineReducers({
  test: TestReducer,
  login: IsUserLoggedInReducer,
  theme: ThemeReducer,
  postsData: PostsDataReducer
});
  
export default rootReducer;