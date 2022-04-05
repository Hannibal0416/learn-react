import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from './action/todolist';
import { Link } from "react-router-dom";

function Task(props) {
  const { task } = props;
  return <li><Link to={`/list/${task}`}>{task}</Link></li>;
}

Task.propTypes = {
  task: PropTypes.string,
};

Task.defaultProps = {
  task: "",
};

export default function TodoList() {
  // const [todoList, setTodoList] = useState(["first", "second"]);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const [newTodo, setNewTodo] = useState('');
  return (
    <div data-testid="todolistBlock">
      <span> {`todolist count: ${todoList.length}`}</span>
      <div>
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value); }} />
        <button type="button" onClick={() => { dispatch(addTodo(newTodo)); }}>
          新增事項
        </button>
      </div>
      {todoList.map((task) => (
        <Task key={task} task={task} />
      ))}
    </div>
  );
}
