import React from "react";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart";
import "./ProductCartItem.styles.css";
import { Icon } from "@iconify/react";

const ProductCartItem = ({ img, name, description, price, id }) => {
  const {
    handleAddItemDispatch,
    handleRemoveItemDispatch,
    handleRemoveDispatch,
    productCart,
    productItem,
  } = useLessPlusItemCart(id);

  return (
    <div >
      <p className="title-intem-cart">{name}</p>
      <div className="cart-item-container">
        <img
          src={`${process.env.PUBLIC_URL}${img}`}
          alt={name}
          className="image-cart-item"
        />
        <div className="item-cart-detail">
          <p className="text-cart-price">${price}</p>
        
          <Icon
            icon="fluent:delete-24-filled"
            className="ic-remove-item"
            onClick={handleRemoveDispatch}
          />
          <div>
            <button
              className="btn-units"
              onClick={handleRemoveItemDispatch}
              disabled={productCart.quantity === 1}
            >
              -
            </button>
            <span className="cart-product-units">{productCart.quantity}</span>
            <button
              className="btn-units"
              onClick={handleAddItemDispatch}
              disabled={productItem.stock === 0}
            >
              +
            </button>
          </div>
          {productItem.stock <= 0 && (
            <span className="text-out-stock">Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
