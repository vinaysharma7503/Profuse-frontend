//@ts-nocheck

import { createStore,applyMiddleware,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);