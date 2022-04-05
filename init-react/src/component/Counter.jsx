import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div data-testid="counterBlock">
      <span data-testid="counter">{count}</span>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
        data-testid="addCountBtn"
      >
        click me
      </button>
    </div>
  );
}
