import React, { useContext, useState } from "react";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./productCheckout.styles.css";

const ProductCheckout = () => {

    const [showError, setShowError] = useState(false)
    const {state} = useContext(ShopCartContext)

  return (
    <div className="checkout-container">
      <h2 className="title-checkout">Total</h2>
      <h3 className="price-checkout">${state.totalPrice}</h3>

      <label>Credit Card Number:</label>
      <input
        // id="ccn"
        // type="tel"
        // inputmode="numeric"
        // pattern="[0-9\s]{13,19}"
        // autocomplete="cc-number"
        // maxlength="19"
        placeholder="xxxx xxxx xxxx xxxx"
      />
      <label>Expiration date:</label>
      <input placeholder="Expiration date" id="data-ex"/>
      <label>CVC:</label>
      <input placeholder="CVC" id="cvc" maxLength="3"/>

      { showError && <p className="msg-error">Sorry, this page is just a demo</p>}

      <button className="btn-primary btn-checkout" onClick={()=> setShowError(true)}>Purchase</button>
    </div>
  );
};

export default ProductCheckout;
