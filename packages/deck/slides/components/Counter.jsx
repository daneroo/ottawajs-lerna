import React, { useState } from 'react';
import useInterval from './useInterval';

export function Counter() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  useInterval(() => {
    // Your custom logic here
    setTime(time + 1);
  }, 1000)

  return (
    <div>
      <p>I counted  {time} times</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


