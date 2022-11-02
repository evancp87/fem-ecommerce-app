import React from "react";
import CheckoutBtn from "./CheckoutBtn";

function FilledCart() {
  return (
    <div>
      <div className="cart">
        <h2 className="cart_heading"></h2>
        <div className="cart_content">
          <div className="cart__content-product">
            <div>
              <img src="" alt="" className="cart__content-product-img" />
              <p className="cart__content-product-info" />
              <img src="" alt="" className="cart__content-product-trash" />
            </div>
            <CheckoutBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilledCart;
