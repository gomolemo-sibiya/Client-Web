import { combineReducers } from "redux";
import pickUpsReducer from "../reducers/pickup_reducers";

const pickUpRootReducer = combineReducers({
  data: pickUpsReducer,
});

export default pickUpRootReducer;
