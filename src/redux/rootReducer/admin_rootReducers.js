import { combineReducers } from "redux";
import adminUsersReducers from "../reducers/admin_reducers";

const adminRootReducer = combineReducers({
  data: adminUsersReducers,
});

export default adminRootReducer;
