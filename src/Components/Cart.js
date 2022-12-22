import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import CartContext from "../services/Cart/CartContext";

function Cart({ products }) {
  const { items } = useContext(CartContext);
  return (
    // conditionally fills cart on whether there's items in the cart or not
    <div>
      <h2 className="cart_heading">Cart</h2>
      {items.length > 0 ? <FilledCart products={products} /> : <EmptyCart />}
    </div>
  );
}

export default Cart;
