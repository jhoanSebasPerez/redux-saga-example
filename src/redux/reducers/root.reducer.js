import { combineReducers } from "redux";
import userReducer from "./users.reducer";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
