/* eslint-disable no-undef */
import React, { useContext } from "react";
const plus = require("../assets/images/icon-plus.svg").default;
const minus = require("../assets/images/icon-minus.svg").default;
import CartContext from "../services/Cart/CartContext";

function Counter() {
  const { count, increment, decrement } = useContext(CartContext);

  return (
    <div className="counter">
      <button className="counter__btn">
        <div className="counter__btn-inner" onClick={decrement} tabIndex="0">
          <img src={minus} alt="minus btn" />
        </div>
        <p className="counter-amount">{count}</p>
        <div className="counter__btn-inner" onClick={increment} tabIndex="0">
          <img src={plus} alt="plus btn" />
        </div>
      </button>
    </div>
  );
}

export default Counter;
