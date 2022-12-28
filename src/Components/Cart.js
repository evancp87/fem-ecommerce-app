import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import CartContext from "../services/Cart/CartContext";
import PropTypes from "prop-types";

function Cart({ products }) {
  const { items } = useContext(CartContext);
  return (
    // conditionally fills cart on whether there's items in the cart or not
    <React.Fragment>
      <h2 className="cart_heading">Cart</h2>
      {items.length > 0 ? <FilledCart products={products} /> : <EmptyCart />}
    </React.Fragment>
  );
}
Cart.propTypes = {
  products: PropTypes.object,
};

export default Cart;
