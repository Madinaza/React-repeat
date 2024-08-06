import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>

      <button
        onClick={Increase}
      >
        Increase
      </button>
      <button  onClick={Decrease}>Decrease</button>
    </>
  );
}
export default Counter;
