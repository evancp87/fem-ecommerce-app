import React from "react";
import EmptyCart from "./EmptyCart";
// import FilledCart from "./FilledCart";

function Cart() {
  return (
    <div className="cart">
      <h2 className="cart_heading"></h2>
      <EmptyCart />
      {/* {items.length === 0 ? <EmptyCart /> : <FilledCart />} */}
    </div>
  );
}

export default Cart;
