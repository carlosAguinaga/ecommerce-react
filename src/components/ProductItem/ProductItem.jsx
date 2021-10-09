import React from "react";
import "./ProductItem.styles.css";

import { useHistory } from "react-router";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart";

const ProductItem = ({ name, description, price, id, img }) => {
  const {
    handleAddDispatch,
    handleAddItemDispatch,
    handleRemoveItemDispatch,
    productItem,
    productCart,
  } = useLessPlusItemCart(id);

  const history = useHistory();

  const handleClickItem = () => {
    history.push(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          variant="top"
          src={`${process.env.PUBLIC_URL}${img}`}
          onClick={handleClickItem}
          className="card-image"
          alt={name}
        />
      </div>
      <div className="card-description">
        <h2 className="card-title" onClick={handleClickItem}>
          {name}
        </h2>
        <p>{description}</p>

        {productItem?.stock <= 0 && (
          <p style={{ color: "red" }}>Out of stock</p>
        )}

        <span>${price}</span>

        {productCart ? (
          <div>
            <button onClick={handleRemoveItemDispatch}>-</button>
            <span>{productCart.quantity}</span>
            <button
              onClick={handleAddItemDispatch}
              disabled={productItem.stock === 0}
            >
              +
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => handleAddDispatch()}>Add to cart</button>
          </div>
        )}

        {productCart && (
          <p className="item_added">{productCart.quantity} items added</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
