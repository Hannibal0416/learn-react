import React from "react";
import { render , fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Counter from "../../src/component/Counter";

// expect.extend({ toBeInTheDocument });

describe("Counter", () => {
  test("Content has been rendered correctly", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('counterBlock')).toBeInTheDocument();
  });

  test("Counter click addCount", () => {
    const { getByTestId } = render(<Counter />);
    const counter = getByTestId('counter');
    expect(counter.textContent).toBe('0');
    const addCountBtn = getByTestId('addCountBtn');
    fireEvent.click(addCountBtn);
    expect(counter.textContent).toBe('1');
  });
});
