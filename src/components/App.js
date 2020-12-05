import React, { useState, useEffect } from "react";

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(props.count);
  };

  return (
    <div>
      <p>
        The current {text || "count"} is {count}
      </p>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default App;
