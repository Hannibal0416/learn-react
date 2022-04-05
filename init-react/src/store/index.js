import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "../reducer/todolist";
import otherReducer from "../reducer/other";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
const rootReducer = combineReducers({
  todoReducer,
  otherReducer,
});
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const middlewares = [thunkMiddleware, sagaMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}

const store = configureStore();
sagaMiddleware.run(rootSaga);
export default store


