/* eslint-disable react/jsx-filename-extension */
import React from "react";

function AddToCartBtn() {
  return (
    <div className="add-to-cart">
      <button className="add-to-cart__btn">
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
