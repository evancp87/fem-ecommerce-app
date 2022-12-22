/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from "react";
import CartContext from "../services/Cart/CartContext";

function AddToCartBtn({ products }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="add-to-cart">
      <button
        className="add-to-cart__btn"
        onClick={() => addToCart(products[0])}
        tabIndex="11"
      >
        <img
          src={require("../assets/images/icon-cart.svg").default}
          alt="cart"
          className="add-to-cart__cart-icon"
        />
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartBtn;
