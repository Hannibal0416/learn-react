import React from "react";
import ReactDom from "react-dom";
import styles from "./index.scss";
import SayHello from "./SayHello.jsx";
import TodoList from "./TodoList.jsx"

const Main = () => (
  <>
    <h1 className={styles.main}>Hi JSX！</h1>
    <SayHello names={["gab","hh"]}/>
    <SayHello/>
    <TodoList />
  </>
);

ReactDom.render(<Main />, document.getElementById("root"));
