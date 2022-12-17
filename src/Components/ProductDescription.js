import React from "react";
import Counter from "./Counter";
import AddToCartBtn from "./AddToCartBtn";
import { products } from "../data";

function ProductDescription() {
  return (
    <div className="product-desc">
      <h2 className="product-desc__company-heading">Sneaker Company</h2>
      <h3 className="product-desc__product-heading">
        Fall Limited Edition Sneakers
      </h3>
      <p className="product-desc__blurb">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="product-details">
        <div className="product-desc__price">
          <p className="product-desc__price-item">$125.00</p>
          <p className="product-desc__price-item">50%</p>
        </div>
        <div className="product-desc__sale">
          <p> $250.00 </p>
        </div>
      </div>

      <div className="product-desc__pay">
        <Counter products={products} />
        <AddToCartBtn products={products} />
      </div>
    </div>
  );
}

export default ProductDescription;
