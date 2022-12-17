import React, { useState, useEffect, useContext } from "react";
const plus = require("../assets/images/icon-plus.svg").default;
const minus = require("../assets/images/icon-minus.svg").default;
import CartContext from "../services/Cart/CartContext";

function Counter({ products }) {
  const { items, decrease, increase, count, increment, decrement } =
    useContext(CartContext);

  // const isInCart = (product) => {
  //   return !!items.find((item) => item.id === product.id);
  // };

  // const [count, setCount] = useState(1);

  // const decreaseQuantity = () => {
  //   count < 1 ? 1 : setCount((count) => count - 1);
  // };

  // const increaseQuantity = () => {
  //   setCount((count) => count + 1);
  // };

  return (
    <div className="counter">
      <button className="counter__btn">
        <div
          className="counter__btn-inner"
          // onClick={decreaseQuantity}
          onClick={decrement}
        >
          <img src={minus} alt="minus btn" />
        </div>
        <p className="counter-amount">{count}</p>
        <div
          className="counter__btn-inner"
          onClick={increment}
          // onClick={increaseQuantity}
        >
          <img src={plus} alt="plus btn" />
        </div>
      </button>
    </div>
  );
}

export default Counter;
