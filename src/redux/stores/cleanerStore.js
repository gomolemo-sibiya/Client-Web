import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import cleanerRootSaga from "../usersagas/cleaner_usersagas";
import cleanerRootReducer from "../rootReducer/cleaner_rootReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const cleanerStore = createStore(cleanerRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(cleanerRootSaga);

export default cleanerStore;
