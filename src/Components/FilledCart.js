import React, { useContext } from "react";
import CheckoutBtn from "./CheckoutBtn";
import CartContext from "../services/Cart/CartContext";

const lightboxThumbnailImg = require("../assets/images/image-product-2-thumbnail.jpg");
function FilledCart() {
  const { items, sumItems, itemCount, clearCart } = useContext(CartContext);
  const { name, image, price, quantity } = items[0];
  const total = price * quantity;
  return (
    <div className="cart_content">
      <div className="cart__content-product">
        <div className="cart__content-product-details">
          <img
            src={image}
            alt="product img"
            className="cart__content-product-img"
          />
          <div className="cart__content-product-info">
            <h3 className="cart__content-product-info-heading">{name}</h3>
            <div className="cart__content-product-info-quantity">
              {" "}
              <p className="cart__content-product-info-quantity-detail">
                ${price} x {quantity}
              </p>
              <p className="cart__content-product-info-quantity-amount">
                ${total}
              </p>
            </div>
          </div>
          <img
            src={require("../assets/images/icon-delete.svg").default}
            alt="trash icon"
            onClick={clearCart}
            className="cart__content-product-trash"
          />
        </div>
        <CheckoutBtn />
      </div>
    </div>
  );
}

export default FilledCart;
