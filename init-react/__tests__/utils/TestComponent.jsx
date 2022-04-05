import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todoReducer from "../../src/reducer/todolist";
import otherReducer from "../../src/reducer/other";
import { render } from "@testing-library/react";

export const generateProviderComponent = (component,initState) => {
  const rootReducer = combineReducers({
    todoReducer,
    otherReducer,
  });
  const store = createStore(rootReducer,initState);
  return render(<Provider store={store}>{component}</Provider>);
};
