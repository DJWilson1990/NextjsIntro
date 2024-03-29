"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click to count!</button>
      {/* can write count function like this instead */}
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
