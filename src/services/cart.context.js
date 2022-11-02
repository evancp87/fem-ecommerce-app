import React, { useState, createContext } from "react";

const purchaseContext = createContext();

function purchaseContextProvider({ children }) {
  return (
    <purchaseContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
      }}
    >
      <div>{children}</div>
    </purchaseContext.Provider>
  );
}

export default purchaseContextProvider;
