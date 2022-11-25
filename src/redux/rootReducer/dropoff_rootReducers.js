import { combineReducers } from "redux";
import dropOffsReducer from "../reducers/dropoff_reducers";

const dropOffRootReducer = combineReducers({
  data: dropOffsReducer,
});

export default dropOffRootReducer;
