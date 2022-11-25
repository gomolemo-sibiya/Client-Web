import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import pickUpRootSaga from "../usersagas/pickup_usersagas";
import pickUpRootReducer from "../rootReducer/pickup_rootReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const pickUpStore = createStore(pickUpRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(pickUpRootSaga);

export default pickUpStore;
