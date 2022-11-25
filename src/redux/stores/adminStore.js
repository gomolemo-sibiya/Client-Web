import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import adminRootSaga from "../usersagas/admin_usersagas";
import adminRootReducer from "../rootReducer/admin_rootReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const adminStore = createStore(adminRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(adminRootSaga);

export default adminStore;
