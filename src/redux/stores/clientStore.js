import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import clientRootSaga from "../usersagas/client_usersagas";
import clientRootReducer from "../rootReducer/client_rootReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const clientStore = createStore(clientRootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(clientRootSaga);

export default clientStore;
