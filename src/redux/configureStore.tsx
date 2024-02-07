import {
    configureStore,
    combineReducers,
    Tuple
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import { watcherSaga } from "./sagas/rootSaga";
  import songSlice from "./ducks/songSlice";
  
  const sagaMiddleware = createSagaMiddleware();
  
  const reducer = combineReducers({
    user: songSlice
  });
  
  const store = configureStore({
    reducer,
    middleware: () => new Tuple(sagaMiddleware),
  });
  sagaMiddleware.run(watcherSaga);
  
  export default store;
  