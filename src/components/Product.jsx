import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Watch from "./Watch";
import Speaker from "./Speaker";
import Tab from "./Tab";
import Desktop from "./Desktop";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Watch />
      </div>

      <div class="product_row d-flex">
        <Speaker />
        <Tab />
      </div>
      <div class="product_row d-flex">
        <Desktop />
      </div>
    </div>
  );
}

export default Product;
