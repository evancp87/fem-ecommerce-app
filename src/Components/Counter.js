import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    count > 0 ? setCount((count) => count - 1) : 0;
  };

  return (
    <div className="counter">
      <button className="counter__btn">
        <div className="counter__btn-inner" onClick={increase}>
          +
        </div>
        <p className="counter-amount">{count}</p>
        <div className="counter__btn-inner" onClick={decrease}>
          {" "}
          -
        </div>
      </button>
    </div>
  );
}

export default Counter;
