import React from "react";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart";
import "./ProductCartItem.styles.css";

const ProductCartItem = ({ img, name, description, price, id }) => {
  const {  handleAddItemDispatch, handleRemoveItemDispatch, handleRemoveDispatch, productCart, productItem } =
    useLessPlusItemCart({ name, description, price, id, img });

  return (
    <div className="cart-item-container">
      <img src={img} alt={name} className="image-cart-item" />
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <div className="config-buttons">
        <button className="btn-remove-item" onClick={handleRemoveDispatch}>delete</button>
        <div>
          <button onClick={handleRemoveItemDispatch} disabled={productCart.quantity === 1}>-</button>
          <span>{productCart.quantity}</span>
          <button onClick={handleAddItemDispatch} disabled={productItem.stock === 0}>+</button>
        </div>
        {productItem.stock <= 0 && <span className="text-out-stock">Out of stock</span>}
      </div>
    </div>
  );
};

export default ProductCartItem;
