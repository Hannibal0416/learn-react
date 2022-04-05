import React from "react";
import PropTypes from "prop-types";
import { useMatch  } from "react-router-dom";
export default function List(props) {
    let match = useMatch ("/list/:taskName");
  return <div>LIST:{JSON.stringify(match)}</div>;
}

List.propTypes = {
  match: PropTypes.shape({}),
};

List.defaultProps = {
  match: {},
};
