import { combineReducers } from "redux";
import clientUsersReducers from "../reducers/client_reducers";

const clientRootReducer = combineReducers({
  data: clientUsersReducers,
});

export default clientRootReducer;
