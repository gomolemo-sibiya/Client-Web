import { combineReducers } from "redux";
import cleanerUsersReducer from "../reducers/cleaner_reducers";

const cleanerRootReducer = combineReducers({
  data: cleanerUsersReducer,
});

export default cleanerRootReducer;
