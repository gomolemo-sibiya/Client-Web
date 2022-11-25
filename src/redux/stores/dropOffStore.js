import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import dropOffRootReducer from "../rootReducer/dropoff_rootReducers";
import dropOffRootSaga from "../usersagas/dropoff_usersagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const dropOffStore = createStore(dropOffRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(dropOffRootSaga);

export default dropOffStore;
