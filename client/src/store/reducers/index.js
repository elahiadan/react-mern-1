import { combineReducers } from "redux";
import users from "./user_reducer";
import posts from "./post_reducer";

const appReducer = combineReducers({
  users,
  posts,
});

export default appReducer;
