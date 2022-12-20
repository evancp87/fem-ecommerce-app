import React from "react";
import ProductDescription from "./ProductDescription";
import Lightbox from "./Lightbox";

function ProductPage() {
  return (
    <main className="product-page">
      <Lightbox />
      <ProductDescription />
    </main>
  );
}

export default ProductPage;
