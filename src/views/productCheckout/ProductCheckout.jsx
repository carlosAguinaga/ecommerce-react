import React from "react";
import "./productCheckout.styles.css";

const ProductCheckout = () => {
  return (
    <div>
      <p>checkout</p>

      <label for="ccn">Credit Card Number:</label>
      <input
        id="ccn"
        type="tel"
        inputmode="numeric"
        pattern="[0-9\s]{13,19}"
        autocomplete="cc-number"
        maxlength="19"
        placeholder="xxxx xxxx xxxx xxxx"
      ></input>
    </div>
  );
};

export default ProductCheckout;
