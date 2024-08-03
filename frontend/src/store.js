import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import studentReducer from "./reducers/studentReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
