import React from "react";
import ProductDescription from "./ProductDescription";
import Lightbox from "./Lightbox";
import Slider from "./Slider";

function ProductPage() {
  return (
    <main className="product-page">
      <Lightbox />
      <Slider />
      <ProductDescription />
    </main>
  );
}

export default ProductPage;
