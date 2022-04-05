import React from "react";
import { Routes,
    Route,
    Link, } from "react-router-dom";
import Content from "../Content";
import TodoList from "../../TodoList";
import List from "../list/List";

const Main = () => (
  <div>
    <ul>
      <li>
        <Link to="/" data-testid="homeLink">
          首頁
        </Link>
      </li>
      <li>
        <Link to="/todolist" data-testid="todolistLink">
          待辦事項
        </Link>
      </li>
    </ul>
    <Routes>
        <Route path="/*" element={<Content/>} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/list/:taskName" element={<List/>} />
      </Routes>
  </div>
);

export default Main;
