import React from "react";
import ReactDom from "react-dom";
import styles from "./index.scss";
import SayHello from "./SayHello.jsx";
import TodoList from "./TodoList.jsx";
import Content from "./Content.jsx";
import { Provider } from "react-redux";
import store from "./store";
import {
  
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import List from "./component/list/List";
import Main from './component/Main'

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
