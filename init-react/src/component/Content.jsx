import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataBegin } from "../action/todolist.js";

export default function Content() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoReducer.data);
  return (
    <div data-testid="contentBlock">
      <div data-testid="contentData">
        {data ? JSON.stringify(data) : "no data"}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchDataBegin());
        }}
        data-testid="fetchContentDataBtn"
      >GetData</button>
    </div>
  );
}
