import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

const storage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const cartState = ({ children }) => {
  const initialState = {
    items: storage,
    ...sumItems(storage),
    count: 1,
    checkout: false,
  };

  // reducers
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload: payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload: payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload: payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload: payload });
  };
  const increment = (payload) => {
    dispatch({ type: "INCREMENT", payload: payload });
  };
  const decrement = (payload) => {
    dispatch({ type: "DECREMENT", payload: payload });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        items: state.items,
        count: state.count,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        increment,
        decrement,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default cartState;
