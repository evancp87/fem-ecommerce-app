/* eslint-disable no-undef */
import React, { useState, useContext } from "react";
import Avatar from "./Avatar";
import Cart from "./Cart";
import CartContext from "../services/Cart/CartContext";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
function Nav() {
  const [cartIsActive, setCartIsActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(!openSidebar);
    setOverlay(!overlay);
  };

  const handleCloseSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(false);
    setOverlay(false);
  };

  // open and closes cart
  const openCart = () => {
    setCartIsActive(!cartIsActive);
  };

  const { items } = useContext(CartContext);

  return (
    <div className="navigation">
      <div className="navigation__first-section">
        <ul className="navigation__hamburger ">
          <li className="navigation__hamburger-icons">
            <img
              className={
                openSidebar
                  ? "navigation__hamburger-icons-icon open-menu active"
                  : "navigation__hamburger-icons-icon open-menu "
              }
              src={require("../assets/images/icon-menu.svg").default}
              alt="menu icon"
              onClick={handleOpenSidebar}
            />
            <img
              className={
                openSidebar
                  ? "navigation__hamburger-icons-icon close-menu active"
                  : "navigation__hamburger-icons-icon close-menu "
              }
              src={require("../assets/images/icon-close.svg").default}
              alt="menu-close icon"
              onClick={handleCloseSidebar}
            />
          </li>
          <li className="navigation__hamburger-logo">
            <img
              src={require("../assets/images/logo.svg").default}
              alt="hamburger button"
            />
          </li>
        </ul>

        {openSidebar && <Sidebar openSidebar={openSidebar} />}
        {openSidebar && <Overlay overlay={overlay} />}

        <ul className="navigation-items">
          <li className="navigation__items-item" tabIndex="0">
            Collections
          </li>
          <li className="navigation__items-item" tabIndex="0">
            Men
          </li>
          <li className="navigation__items-item" tabIndex="0">
            Women
          </li>
          <li className="navigation__items-item" tabIndex="0">
            About
          </li>
          <li className="navigation__items-item" tabIndex="0">
            Contact
          </li>
        </ul>
      </div>

      <ul className="cart-wrapper">
        <li className="cart-wrapper__item" tabIndex="0">
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
