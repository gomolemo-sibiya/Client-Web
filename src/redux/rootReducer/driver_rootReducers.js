import { combineReducers } from "redux";
import driverUsersReducers from "../reducers/driver_reducers";

const driverRootReducer = combineReducers({
  data: driverUsersReducers,
});

export default driverRootReducer;
