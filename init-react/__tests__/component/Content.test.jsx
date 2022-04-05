import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from "../../src/component/Content";
import { generateProviderComponent } from "../utils/TestComponent";
import * as ReactRedux from "react-redux";
import * as TodoList from "../../src/action/todolist";

describe("Content", () => {
  test("Content_Check_Render", () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(ReactRedux, "useDispatch");
    jest
      .spyOn(TodoList, "fetchDataBegin")
      .mockReturnValue({ type: "FETCH_DATA_BEGIN2" });

    mockUseDispatch.mockReturnValue(mockDispatch);
    const { getByTestId } = generateProviderComponent(<Content />, {
      todoReducer: { data: { test: "test" } },
    });
    const fetchContentDataBtn = getByTestId("fetchContentDataBtn");
    fireEvent.click(fetchContentDataBtn);
    console.log(mockDispatch.mock.calls[0][0]);

    const contentBlock = getByTestId("contentData");
    console.log(contentBlock.textContent);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: "FETCH_DATA_BEGIN2",
    });
    expect(getByTestId("contentBlock")).toBeInTheDocument();
  });
});
