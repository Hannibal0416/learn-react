import React, {useState} from "react";
import PropTypes from "prop-types";
function Task(props) {
  const { task } = props;
  return <div>{task}</div>;
}

Task.propTypes = {
  task: PropTypes.string,
};

Task.defaultProps = {
  task: "",
};

export default function TodoList() {
  const [todoList, setTodoList] = useState(["first", "second"]);

  return todoList.map((task) => <Task key={task} task={task} />);
}
