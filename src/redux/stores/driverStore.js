import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import driverRootSaga from "../usersagas/driver_usersagas";
import driverRootReducer from "../rootReducer/driver_rootReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const driverStore = createStore(driverRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(driverRootSaga);

export default driverStore;
