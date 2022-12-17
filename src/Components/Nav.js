import React, { useState, useContext } from "react";
import Avatar from "./Avatar";
import Cart from "./Cart";
import CartContext from "../services/Cart/CartContext";

function Nav() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const openCart = () => {
    setCartIsActive(!cartIsActive);
  };

  const { items, sumItems } = useContext(CartContext);
  // const { quantity } = items[0];
  return (
    <div className="navigation">
      <div className="navigation__first-section">
        <ul className="navigation__hamburger ">
          <li className="navigation__hamburger-icons">
            <img
              className="navigation__hamburger-icons-icon"
              src={require("../assets/images/icon-menu.svg").default}
              alt="menu icon"
            />
            <img
              className="navigation__hamburger-icons-icon"
              src={require("../assets/images/icon-close.svg").default}
              alt="menu-close icon"
            />
          </li>
          <li className="navigation__hamburger-logo">
            <img src={require("../assets/images/logo.svg").default} />
          </li>
        </ul>

        <ul className="navigation-items">
          <li className="navigation__items-item">Collections</li>
          <li className="navigation__items-item">Men</li>
          <li className="navigation__items-item">Women</li>
          <li className="navigation__items-item">About</li>
          <li className="navigation__items-item">Contact</li>
        </ul>
      </div>

      <ul className="cart-wrapper">
        <li className="cart-wrapper__item">
          <img
            src={require("../assets/images/icon-cart.svg").default}
            className="cart-wrapper__item-icon"
            alt="cart icon"
            onClick={openCart}
          />
          {items.length > 0 && (
            <div className="cart-wrapper__item-count">{items[0].quantity}</div>
          )}
          <div className={cartIsActive ? "cart active" : "cart"}>
            <Cart />
          </div>
        </li>
        <li className="cart-wrapper__item-avatar">
          <div>
            <Avatar />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
